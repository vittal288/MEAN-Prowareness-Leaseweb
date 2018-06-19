const mongoose = require('mongoose');
const validator = require('validator');
//const jwt = require('jsonwebtoken');
const _ = require('lodash');
//const bcrypt = require('bcryptjs');
let MSGS = require('../config/messages.json');

var DocumentSchema = require('./document.schema');

// DocumentSchema.methods.toJSON = function () {
//     var document = this;
//     var documentObject = document.toObject();
//     documentObject.message = MSGS.SUCCESS_MSG.POST_SUCCESS_MSG;
//     return _.pick(documentObject, ['_id', 'created_date', 'last_modified_date', 'message', 'completion', 'status']);
// };

var Document = mongoose.model('Document', DocumentSchema);
module.exports = { Document };