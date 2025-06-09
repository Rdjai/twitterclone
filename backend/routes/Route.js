const express = require("express");
const router = express.Router();

//user route controller
const { createAccount, userLogin, myprofile } = require("../controller/auth.controller");
const { getUserByUsername,
    getAllUsers,
    getUserById,
    getUsersbyNameHandler,
    followUserHandle,
    unfollowUserHandler,
    getFollowersHandler,
    getFollowingHandler,
    getUserProfile

} = require("../controller/user.controller");

const { createTweetHandler, getAllTweets, deleteTweet, getSingleTweet, writeComment, writereply } = require('../controller/tweet.controller')
const { HandleResctricUser } = require("../middlewere/auth.middlewere");
const upload = require("../middlewere/upload");


//auth routes
router.post("/register", createAccount);
router.post("/login", userLogin)
router.get("/me", HandleResctricUser, myprofile)

// user routes

router.get("/username/:username", HandleResctricUser, getUserByUsername);
router.get("/users/:id", HandleResctricUser, getUserById);
router.get("/users", HandleResctricUser, getAllUsers);
router.get("/profile/:id", getUserProfile);
router.get("/getfollowers", getFollowersHandler);
router.get("/getfollowing", getFollowingHandler);

router.post("/user/follow", HandleResctricUser, followUserHandle)
router.post("/user/unfollow", HandleResctricUser, unfollowUserHandler)
router.post("/find/users", HandleResctricUser, getUsersbyNameHandler)


//tweet routes

router.post("/tweet/write", HandleResctricUser, upload.single('media'), createTweetHandler)
router.get("/tweet/alltweet", HandleResctricUser, getAllTweets);
router.delete("/tweet/delete", HandleResctricUser, deleteTweet)
router.post("/tweet/:Id/comments", HandleResctricUser, writeComment)
router.post("/tweet/:Id/reply", HandleResctricUser, writereply)
router.get("/tweet/:id", getSingleTweet)


module.exports = router;