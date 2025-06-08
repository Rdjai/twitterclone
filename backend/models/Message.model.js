const { default: mongoose } = require("mongoose");
const mongo = require("mongoose");

const msgModel = new mongo.Schema({
    sender: { type: mongoose.Schema.Types.ObjectId, ref: "Users", required: true },
    receiver: { type: mongoose.Schema.type.ObjectId, ref: "Users", required: true },
    content: { type: String, required: true },
    read: { type: Boolean, default: false }
}, { timestamps: true })

module.exports = mongoose.model("Message", msgModel);