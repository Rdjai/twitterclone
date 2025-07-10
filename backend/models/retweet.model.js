const mongoose = require('mongoose');
const repostSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: true
    }
    , postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "post",
        required: true
    }
    , repostedBy: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users"
    }]
    , repostedAt: {
        type: Date,
        default: Date.now
    }
}
    , { timestamps: true });

module.exports = mongoose.model('repost', repostSchema);