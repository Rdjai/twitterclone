const tweetModel = require("../models/tweet.model.js");
const userModel = require("../models/user.model.js");

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
        const tweetId = req.body;
        console.log("tweet id ", tweetId);
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

async function getSingleTweet(req, res) {
    try {
        const tweetid = req.params;
        console.log("here is the params", req.params.id);
        const tweet = await tweetModel.findById(req.params.id)
        if (!tweet) return res.status(404).json({
            err: "tweet does not exits"
        })
        const user = await userModel.findById(tweet.author);
        console.log(user);
        return res.status(201).json(
            tweet
        )
    } catch (error) {

    }
}

const writeComment = async (req, res) => {
    try {
        const tweetId = req.params.Id;
        const { text } = req.body;
        console.log("here is the parameter debug", req.params.Id);
        if (!text) return res.status(400).json({ error: "Comment text is required." });
        const tweet = await tweetModel.findById(tweetId);

        if (!tweet) return res.status(404).json({ error: "Tweet not found." });
        tweet.comment.push({ text: text, author: req.user.id })
        await tweet.save();
        res.status(200).json({ message: "Comment added", tweet });
    } catch (error) {
        console.error("Add Comment Error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}


const writereply = async (req, res) => {
    try {


        const tweetId = req.params.Id;
        const { text, commentId } = req.body;
        if (!text) return res.status(400).json({ error: "Reply text is required." });
        const tweet = await tweetModel.findById(tweetId);
        if (!tweet) return res.status(404).json({ error: "Tweet not found." });
        const comment = tweet.comment.id(commentId);
        if (!comment) return res.status(404).json({ error: "Comment not found." });
        comment.replies.push({
            text: text,
            author: req.user._id,
        })
        await tweet.save();
        res.status(200).json({ message: "Reply added", tweet });
    } catch (error) {
        console.error("Add Reply Error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}
module.exports = {
    createTweetHandler,
    getAllTweets,
    deleteTweet,
    getSingleTweet,
    writeComment,
    writereply
}