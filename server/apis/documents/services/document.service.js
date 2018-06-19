const _ = require('lodash');
var { Document } = require('./../models/document.model');
let userServicesMethods;
var pdf = require('html-pdf');
module.exports = userServicesMethods = {

    "createDocument": (bodyPayload, callback) => {
        var documentPayLoad = bodyPayload.body;
        var document = new Document(documentPayLoad);
        document.uid = bodyPayload.user.uid;
        document.created_by = bodyPayload.user.email;
        document.save().then((document) => {
            if (!document) {
                document = {};
                // callback(null, { "res": 404 });
            }
            callback(null, { "data": document });
        }).catch((err) => {
            callback(err);
        });
    },

    "updateDocument": (bodyPayload, callback) => {

        Document.findOne({ _id: bodyPayload.fid })
            .then(function (document) {
                document.data = bodyPayload.data;
                document.last_modified_date = bodyPayload.last_modified_date;
                document.completion = bodyPayload.completion;
                document.status = bodyPayload.status;
                document.stage = bodyPayload.stage;
                document.esign = bodyPayload.esign;
                document.save().then(function (document) {
                    if (!document) {
                        document = {};
                    }
                    callback(null, { "data": document });
                }).catch(function (err) {
                    callback(err);
                })

            }).catch((err) => {
                callback(err);
            });
    },

    "getDocument": (reqParams, callback) => {
        var key = reqParams.key;
        var val = reqParams.val;
        var query = {};
        query[key] = val;

        Document.find(query).then((document) => {
            if (!document) {
                document = [];
            }
            callback(null, { "data": document });
        }).catch((err) => {
            callback(err);
        });
    },

    "getAllDocumens": (documentPayLoad, callback) => {
        var document = new Document(documentPayLoad);
        document.uid = req.user.uid;
        document.created_by = req.user.email;
        document.save().then((document) => {
            if (!document) {
                //callback(null, { "res": 404 });
                document = [];
            }
            callback(null, { "data": document });
        }).catch((err) => {
            callback(err);
        });
    },


    // "generatePDFDocument": (req, callback) => {

    //     var dataPayload = "";
    //     req.on('data', function (chunk) {
    //         dataPayload += chunk;
    //     });


    //     var options = {
    //         "format": 'A4', // allowed units: A3, A4, A5, Legal, Letter, Tabloid 
    //         "orientation": "portrait",
    //         "border": {
    //             "top": "2cm", // default is 0, units: mm, cm, in, px 
    //             "right": "2cm",
    //             "bottom": "2cm",
    //             "left": "2cm"
    //         }
    //     };
    //     req.on('end', function (chunk) {
    //         res.setHeader('Content-disposition', 'attachment; filename=test.pdf');
    //         res.setHeader('Content-type', 'application/pdf');

    //         pdf.create(dataPayload).toStream(function (err, stream) {
    //             stream.pipe(res);
    //         });
    //     });

    // }

}
