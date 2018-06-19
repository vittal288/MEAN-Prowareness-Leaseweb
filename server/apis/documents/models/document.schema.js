const mongoose = require('mongoose');
const validator = require('validator');
//----------------------------------------------------
var DocumentSchema = new mongoose.Schema({
    // _creator:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     required:true
    // },
    uid: { type: String, required: true },
    // did: { type: String},
    type: { type: String, required: true },
    title: { type: String, required: true },
    created_date: { type: Date, default: Date.now },
    last_modified_date: { type: Date, default: Date.now },
    completion: { type: Number, min: 0, max: 100, required: true },
    data: { type: mongoose.Schema.Types.Mixed, required: true },
    status: { type: Number, required: true },
    created_by: {
        type: String,
        minlength: 1,
        required: true,
        trim: true,
        validate: {
            validator: validator.isEmail,
            message: '{VALUE} is not a valid email !'
        }
    },
    esign: {
        payload: { type: mongoose.Schema.Types.Mixed },
        status: Number
    },
    stage: {
        doc: {
            status: String,
            comment: String,
            effect_date: Date
        },
        order: {
            status: String,
            comment: String,
            effect_date: Date
        },
        review: {
            status: String,
            comment: String,
            effect_date: Date
        },
        process: {
            status: String,
            comment: String,
            effect_date: Date
        }
    }
});


module.exports = DocumentSchema;  
