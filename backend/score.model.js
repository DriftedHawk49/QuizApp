const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let scoreSchema = new Schema({
    uid : {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    maxScore : {
        type: Number,
        required: true,
        default : 0
    }
});

module.exports = mongoose.model('scores', scoreSchema);