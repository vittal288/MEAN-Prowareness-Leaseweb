let express = require('express');
let router = express.Router();
let documentController = require('../controllers/document.controller');
var { authenticate } = require('../../middleware/authenticate');


/**
 * @swagger
 * /documents/:
 *   post:
 *     tags:
 *       - Documents
 *     summary: Document create API
 *     description: to post document details
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: create Document
 *         description: Create Document Details 
 *         in: body
 *         required: true
 *         schema:
 *           $ref: "#/definitions/documents"
 *       - name: x-auth
 *         type: string
 *         in: header
 *         required: true
 *         schema:
 *           $ref: "#/definitions/documents"
 *     responses:
 *       200:
 *         description: Success
 */
router.post('/documents', authenticate, documentController.createDocument);

/**
 * @swagge
 * /documents/download:`
 *   post:
 *     tags:
 *       - Documents
 *     summary: Document Download in PDF format
 *     description: to download document in PDF format
 *     produces:
 *       - application/pdf
 *     parameters:
 *       - name: x-auth
 *         type: string
 *         in: header
 *         required: true
 *     responses:
 *       200:
 *         description: Success
 */
router.post('/documents/download', authenticate, documentController.generatePDFDocument);


router.post('/documents/esign/:id', authenticate, documentController.esignPDFDocument);  

router.get('/documents/esign/:id', authenticate, documentController.esignPDFDocumentDownload);  

/**
 * @swagger
 * /documents/key/{key}/value/{val}:
 *   get:
 *     description: get the document details by key and value
 *     tags:
 *       - Documents
 *     summary: Update document details 
 *     parameters:
 *       - name: key 
 *         description: KEY
 *         in: path
 *         required: true
 *         type: string
 *       - name: val 
 *         description: Value
 *         in: path
 *         required: true
 *         type: string    
 *       - name: x-auth
 *         description: Autherization token  
 *         type: string
 *         in: header
 *         required: true
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/documents/:key/:val', authenticate, documentController.getDocument);

/**
 * @swagger
 * /documents/:
 *   get:
 *     description: get the document details
 *     tags:
 *       - Documents
 *     summary: Update document details 
 *     parameters:
 *       - name: x-auth
 *         description: Autherization token  
 *         type: string
 *         in: header
 *         required: true
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/documents', authenticate, documentController.getAllDocumens);
/**
 * @swagger
 * /documents/{fid}:
 *   post:
 *     description: Update the document details 
 *     tags:
 *       - Documents
 *     summary: Update document details 
 *     parameters:
 *       - name: update Document
 *         description: Create Document Details 
 *         in: body
 *         required: true
 *       - name: fid 
 *         description: fid
 *         in: path
 *         required: true
 *         type: string   
 *       - name: x-auth
 *         description: Autherization token  
 *         type: string
 *         in: header
 *         required: true
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Success
 */
router.post('/documents/:fid', authenticate, documentController.updateDocument);


module.exports = router;