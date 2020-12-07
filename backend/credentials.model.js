const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let credentialSchema = new Schema({
    uid : {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    password : {
        type: String,
        required: true
    },
    customHash : {
        type: String,
        default: null
    }
});

module.exports = mongoose.model('credentials', credentialSchema);