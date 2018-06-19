const _ = require('lodash');
let documentService = require('../services/document.service');
let userControllerMethods;
var pdf = require('html-pdf');
var request = require('request');
var http=require("https");

module.exports = userControllerMethods = {

    "createDocument": (req, res, next) => {
        global.logger.debug('POST : create document request');
        var createDocumentPayLoad = req;
        documentService.createDocument(createDocumentPayLoad, (err, response) => {
            if (err) {
                global.logger.error(err);
                res.status(400).send(err);
            } else {
                if (response.res) {
                    global.logger.info(`Document is NOT created,${response.res}`);
                    res.status(response.res).send();
                } else {
                    global.logger.info(`Document is created,${response.data}`);
                    res.send(response.data);
                }
            }
        });
    },

    "updateDocument": (req, res, next) => {
        global.logger.debug('PATCH : update document request');
        var updateDocumentPayLoad = req.body;
        updateDocumentPayLoad.fid = req.params.fid;

        documentService.updateDocument(updateDocumentPayLoad, (err, response) => {
            if (err) {
                global.logger.error(err);
                res.status(400).send(err);
            } else {
                if (response.res) {
                    global.logger.info(`Document is NOT updated,${response.res}`);
                    res.status(response.res).send();
                } else {
                    global.logger.info(`Document is created,${response.data}`);
                    res.send(response.data);
                }
            }
        });
    },

    "getDocument": (req, res, next) => {
        global.logger.debug('GET : Get the document details');
        var reqParams = {
            "key": req.params.key,
            "val": req.params.val
        };
        documentService.getDocument(reqParams, (err, response) => {
            if (err) {
                global.logger.error(err);
                res.status(400).send(err);
            } else {
                if (response.res) {
                    global.logger.info(`Could not able to fetch document details,${response.res}`);
                    res.status(response.res).send();
                } else {
                    global.logger.info(`Document feched successfully,${response.data}`);
                    res.send(response.data);
                }
            }
        });
    },

    "getAllDocumens": (req, res, next) => {
        var documentPayLoad = req.body;
        documentPayLoad.uid = req.user.uid;
        documentPayLoad.created_by = req.user.email;
        documentService.getAllDocumens(documentPayLoad, (err, response) => {
            if (err) {
                global.logger.error(err);
                res.status(400).send(err);
            } else {
                if (response.res) {
                    global.logger.info(`Could not able to fetch documents details,${response.res}`);
                    res.status(response.res).send();
                } else {
                    global.logger.info(`Documents feched successfully,${response.data}`);
                    res.send(response.data);
                }
            }
        });
    },

    "generatePDFDocument": (req, res, next) => {
        global.logger.debug('POST : generate PDF document request');
        var dataPayload = "";
        req.on('data', function (chunk) {
            dataPayload += chunk;
        });

        var options = global.config.GENERIC_CONFIG.PDF_DOC_FORMAT
        req.on('end', function (chunk) {
            res.setHeader('Content-disposition', 'attachment; filename=document.pdf');
            res.setHeader('Content-type', 'application/pdf');

            pdf.create(dataPayload).toStream(function (err, stream) {
                stream.pipe(res);
                global.logger.info('PDF DATA', res);
            });
        });
    },
    "esignPDFDocumentDownload": (req, res, next) => {
        var docId = req.params.id;
        var options = {
            host: global.esign.host ,
            port: global.esign.port ,
            path:global.esign.downloadPDF.replace("{1}",docId),
            headers: {
                "Authorization": "Basic " + new Buffer(global.esign.clientId + ":" + global.esign.clientSecret).toString("base64")
            }
        };

        http.get(options, function (response) {
            response.pipe(res);
        });
    },
    "esignPDFDocument": (req, res, next) => {
        global.logger.debug('POST : sign PDF document request');


        var created_by = req.user.email;
        var docId = req.params.id;
        var dataPayload = "";
        req.on('data', function (chunk) {
            dataPayload += chunk;
        });

        var options = global.config.GENERIC_CONFIG.PDF_DOC_FORMAT

        req.on('end', function (chunk) {

            var reqParams = {
                "key": "_id",
                "val": docId
            };
            documentService.getDocument(reqParams, (err, response) => {
                if (err) {
                    res.status(400).send(err);
                } else {
                    if (response) {
                        var oDocument = response.data && response.data.length ? response.data[0] : null;

                        if (!oDocument) {
                            res.status(400).send({ error: "Document not found." });
                            return;
                        }

                        if (oDocument && oDocument.esign && oDocument.esign.status) {
                            res.json(oDocument.esign.payload);
                        } else {
                            pdf.create(dataPayload).toBuffer(function (err, buffer) {
                                if (err) {
                                    res.status(400).send(err);
                                } else {
                                    userControllerMethods.digioPDFUpload({
                                        signers: [created_by],
                                        comment: "Request to sign (e-sign) the document.",
                                        display_on_page: "all",
                                        notify_signers: true,
                                        file_name: "legal_document.pdf",
                                        file_data: buffer.toString("base64")
                                    }, function (data) {

                                        oDocument.esign = {
                                            payload: data,
                                            status: 1
                                        };

                                        oDocument.fid = docId;
                                        documentService.updateDocument(oDocument, function (er, rp) {
                                            res.json(data);
                                        });

                                    });
                                }

                            });
                        }
                    }
                }
            });

        });
    },
    "digioPDFUpload": (oData, fnResponse) => {
        var options = {
            url: global.esign.uri + global.esign.uploadPDF,
            method: 'POST',
            json: oData,
            headers: {
                "Authorization": "Basic " + new Buffer(global.esign.clientId + ":" + global.esign.clientSecret).toString("base64")
            }
        };

        request(options, function (error, response, body) {
            global.logger.debug('GOT REP FOUND', body);
            fnResponse(body);
        });
    }
}
