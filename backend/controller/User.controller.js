const tweetModel = require("../models/tweet.model");
const userModel = require("../models/user.model");


const getAllUsers = async (req, res) => {
    try {
        // Fetch all users and exclude sensitive fields like password
        const users = await userModel.find();

        if (users.length === 0) {
            return res.status(404).json({
                message: "No users found", users

            });
        }

        return res.status(200).json(users);
    } catch (error) {
        console.error("Error fetching users:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};



async function getUserByUsername(req, res) {
    try {
        const userId = req.params.username;
        console.log(userId);
        const user = await userModel.findOne({ userName: userId });
        if (user == null) res.status(401).json({ error: "User not found" });
        if (user) return res.status(200).json({
            msg: "user found",
            userdata: user
        })
        return res.status(200).json(user);
    } catch (error) {
        console.error("Error :", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

// search user by user name

const getUsersbyNameHandler = async (req, res) => {
    const { Name } = req.body;
    console.log(Name);
    if (!Name || typeof Name !== 'string') {
        return res.status(400).json({ error: "Name is required and must be a string" });
    }
    try {
        const users = await userModel.find({
            $or: [
                { Name: { $regex: Name, $options: 'i' } },
                { userName: { $regex: Name, $options: 'i' } }
            ]
        });


        if (users == null) res.status(401).json({ error: "User not found" });
        if (users) return res.status(200).json({
            msg: "user found",
            userdata: users
        })
        return res.status(200).json(users);
    } catch (error) {
        console.error("Error :", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

//follow user controller

async function getUserById(req, res) {

    try {
        const isfollow = await userModel.findById(req.params.id);
        if (!user) return res.status(404).json({ msg: 'User not found' });
        res.json(user);
    } catch (error) {
        res.status(500).json({
            msg: 'Server error',
            error
        });
    }

}
const updateUser = async (req, res) => {
    try {
        const { Name, userName, bio } = req.body;
        const profilePic = req.file ? req.file.path : null;

        if (!Name || !userName || !bio) {
            return res.status(400).json({ msg: 'Please provide Name, userName, and bio' });
        }

        const user = await userModel.findById(req.user.id);
        if (!user) return res.status(404).json({ msg: 'User not found' });

        user.Name = Name;
        user.userName = userName;
        user.bio = bio;

        if (profilePic) {
            user.profilePic = profilePic;
        }

        await user.save();

        const updatedUser = user.toObject();
        delete updatedUser.password;

        res.json({ msg: 'User updated successfully', user: updatedUser });
    } catch (error) {
        console.error("Error updating user:", error);
        res.status(500).json({ msg: 'Server error', error: error.message });
    }
};



//follow user 

const followUserHandle = async (req, res) => {
    try {
        const currentUser = await userModel.findById(req.body.myId);
        const userTofollow = await userModel.findById(req.body.userId);
        if (!userTofollow.followers.includes(req.body.myId)) {
            userTofollow.followers.push(req.body.myId);
            currentUser.following.push(req.body.userId);
            await userTofollow.save();
            await currentUser.save();
            res.json({ msg: 'Followed successfully' });
        }
        else res.status(400).json({ msg: 'Already following this user' });
    } catch (error) {
        console.error("Error:", error); // helpful log
        res.status(500).json({ msg: 'Server error', error });
    }
}


//unfollow user

const unfollowUserHandler = async (req, res) => {
    try {
        const currentUser = await userModel.findById(req.body.myId)
        const toUnfollowUser = await userModel.findById(req.body.userId)
        currentUser.following.pull(req.body.userId)
        toUnfollowUser.followers.pull(req.body.myId)
        await currentUser.save();
        await toUnfollowUser.save();
        res.json({ msg: 'Unfollowed successfully' });

    } catch (error) {
        console.error("Error:", error); // helpful log
        res.status(500).json({ msg: 'Server error', error });
    }
}

//get all followers

const getFollowersHandler = async (req, res) => {
    try {
        const data = await userModel.findById(req.body.Id).populate('followers', 'userName Name profilePic');
        console.log(data);
        if (data == null) return res.status(401).json({
            msg: "user not found"
        })
        res.status(200).json({
            succuss: "followers fetched successfully",
            data: data.followers
        })
    } catch (error) {
        console.error("Error:", error); // helpful log
        res.status(500).json({ msg: 'Server error', error });
    }
}

//get all following
const getFollowingHandler = async (req, res) => {
    try {
        const data = await userModel.findById(req.body.Id).populate('following', 'userName Name profilePic');
        if (data == null) return res.status(401).json({
            msg: "user not found"
        })
        res.status(200).json({
            succuss: "followers fetched successfully",
            data: data.following
        })

    } catch (error) {
        console.error("Error:", error); // helpful log
        res.status(500).json({ msg: 'Server error', error });
    }
}

//get full data of user 
const getUserProfile = async (req, res) => {
    try {
        const user = await userModel.findById(req.params.id).select('-password -email');

        if (user == null) return res.status(404).json({ msg: "User not found" });

        const tweets = await tweetModel.find({ author: req.params.id }).sort({ createdAt: -1 });
        res.status(200).json({
            user,
            tweets,
        });
    } catch (error) {
        console.error("Profile fetch error:", error);
        res.status(500).json({ msg: "Server error", error });
    }
}

//update profile 

// const updateprofile=async(req, res)=>{
//     try {
//         const
//     } catch (error) {

//     }
// }
module.exports = {
    getAllUsers,
    getUserByUsername,
    getUserById,
    getUsersbyNameHandler,
    updateUser,
    followUserHandle,
    unfollowUserHandler,
    getFollowersHandler,
    getFollowingHandler,
    getUserProfile

}