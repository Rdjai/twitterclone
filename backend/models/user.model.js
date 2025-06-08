const { default: mongoose } = require("mongoose");
const mongo = require("mongoose");
const userModel = new mongo.Schema({
    Name: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        unique: true,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    bio: {
        type: String,
    },
    profilePic: {
        type: String,
    },
    coverPic: {
        type: String
    },
    followers: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Users" }],

    },
    following: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Users" }],

    },
    createdAt: { type: Date, default: Date.now },
},
    { timestamps: true })

module.exports = mongoose.model("Users", userModel)