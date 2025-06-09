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
        const tweets = await tweetModel
            .find({ author: req.user._id })
            .populate('author', 'userName')
            .sort({ createdAt: -1 });
        res.status(200).json({ tweets });
    } catch (error) {
        console.error("Get Tweets Error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}


const deleteTweet = async (req, res) => {
    try {
        const tweetId = req.body.id;
        const userId = req.user.id;
        const tweet = await tweetModel.findById(tweetId);
        if (!tweet) return res.status(404).json({ msg: "Tweet not found" });
        if (tweet.author.toString() !== userId) return res.status(403).json({ msg: "You are not authorized to delete this tweet" });
        await tweetModel.findByIdAndDelete(tweetId)
        res.status(200).json({ msg: "Tweet deleted successfully" });

    } catch (error) {
        console.error("❌ Error deleting tweet:", error.message);
        res.status(500).json({ msg: "Internal Server Error" });
    }
}
module.exports = {
    createTweetHandler,
    getAllTweets,
    deleteTweet
}