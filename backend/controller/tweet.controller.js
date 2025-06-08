const tweetModel = require("../models/tweet.model")

const createTweetHandler = async (req, res) => {
    try {
        const { text } = req.body;

        const tweet = new tweetModel({
            author: req.user._id,
            text
        })
        if (req.file) {
            tweet.mediaUrl = `/uploads/${req.file.filename}`;
            tweet.mediatype = req.file.mimetype.startsWith('video') ? 'video' : 'image';
        }
        await tweet.save()
        res.status(201).json({ msg: "Tweet posted!", tweet });
    } catch (error) {
        console.error("Error posting tweet:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}


const getAllTweets = async (req, res) => {
    try {
        console.log("user req _id", req.user);
        const tweets = await tweetModel.find().populate('author', 'userName').sort({ createdAt: -1 });
        res.status(200).json({
            tweets
        })

    } catch (error) {
        console.error("Get Tweets Error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
module.exports = {
    createTweetHandler,
    getAllTweets
}