const mongoose = require("mongoose");


const replySchema = new mongoose.Schema({
    text: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: "Users", required: true },
}, { timestamps: true });


const commentSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: true,
    },
    replies: [replySchema],
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = commentSchema;
