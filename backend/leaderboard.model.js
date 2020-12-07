const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let leaderboardSchema = new Schema({
    uid : {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    score : {
        type: Number,
        required : true,
    }
});

module.exports = mongoose.model('leaderboard', leaderboardSchema);