"use strict";
let express = require('express');
let fs = require('fs');
//let morganLogger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let https = require('https');
let http = require('http');
//let firebase = require('firebase');
global.fireBaseAdmin = require("firebase-admin");
//----------------------------------------------------------
global.config = require('./config/config.json');
global.esign = require('./config/digio-esign.json');

var serviceAccount= require('./config/firebase-admin.json');
const ENV = process.env.NODE_ENV;
global.ENV = process.env.NODE_ENV;
var mongoose = require('./config/db/mongoose');
global.logger = require('./logger').logger;




//firebase setup
global.fireBaseAdmin.initializeApp({
  credential: fireBaseAdmin.credential.cert(serviceAccount),
  databaseURL: global.config[ENV].FIREBASE_CONFIG.DATA_BASE_URL
});



let swaggerJSDoc = require('swagger-jsdoc');
let swaggerUi = require('swagger-ui-express');

let documentRoutes = require('./apis/documents/routes/document.routes');

let app = express();


//app.use(morganLogger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Origin,x-access-token,X-Requested-With,Content-Type,Accept,x-auth');
    res.header('Access-Control-Allow-Methods', 'POST,PATCH,GET, PUT, DELETE, OPTIONS');
    next();
});


// https.createServer(sslKeysAndCert, app).listen(global.config[ENV].PORT, function () {
//     process.stdout.write(`Server is running with HTTPS with PORT ${global.config[ENV].PORT}`);
// });
app.listen(global.config[ENV].PORT,()=>{
    global.logger.info(`Server is running with HTTP with PORT ${global.config[ENV].PORT} in ${global.ENV} Environment`)
    process.stdout.write(`Server is running with HTTP PORT ${global.config[ENV].PORT} in ${global.ENV} Environment`);
});


//app.use(`${global.config.BASE_ROUTE}`, postRoutes, getRoutes, putRoutes);
app.use(`${global.config.BASE_ROUTE}`, userRoutes,documentRoutes,paymentRoutes,pricingRoutes,orderRoutes);

let options = {
    swaggerDefinition: {
        info: {
            title: 'Dial legal india API-DOCS',
            version: '0.0.1'
        },
        basePath: global.config.BASE_ROUTE
    },
    apis: ['./apis/documents/routes/document.routes.js']
};
let swaggerDocument = swaggerJSDoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, true));

app.all('*', function(req, res){
  res.sendStatus(404);
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error();
    err.message = 'Invalid URL';
    err.status = 404;
    err.err_code = "LEASEWEB_101";
    next(err);
});

// error handler
app.use(function (err, req, res, next) {

    console.log('ERROR HANDLER',err);
    // logging the error
    logger.error(err);

    // set locals, only providing error in development
    res.locals.error = req.app.get('env') === 'DEV' ? err : { name: err.name, message: err.message, status: err.status, err_code: err.err_code};

    // render the error page
    res.status(err.status || 500);
    res.send(res.locals.error);
    next();
});

module.exports = app;
