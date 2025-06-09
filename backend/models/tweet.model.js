const { default: mongoose } = require("mongoose");
const mongo = require("mongoose");
const commentSchema = require("./comment.model");

const TweetModel = new mongo.Schema({
    author: { type: mongoose.Schema.Types.ObjectId, ref: "Users", required: true },
    text: {
        type: String,
        required: true,
    },
    comment: [commentSchema],
    mediaUrl: {
        type: String,
    },
    mediatype: {
        type: String,
        enum: ['image', 'video']
    },
    like: [{ type: mongoose.Schema.Types.ObjectId, ref: "Users" }],
    repost: [{ type: mongoose.Schema.Types.ObjectId, ref: "Users" }],
    parentTweet: { type: mongoose.Schema.Types.ObjectId, ref: 'post' },
}, { timestamps: true })

module.exports = mongoose.model('post', TweetModel);
