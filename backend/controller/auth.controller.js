const bcrypt = require('bcryptjs');
const sendWelcomeEmail = require("../utils/sendemail")

const userModel = require("../models/user.model");
const tweetModel = require("../models/tweet.model")
const { setuser } = require('../service/jwt');

const createAccount = async (req, res) => {
    const { Name, email, password } = req.body;
    console.log(req.body);

    try {
        if (!Name || !email || !password) {
            return res.status(400).json({
                errorMsg: "Something went wrong",
                error: "Please fill all fields properly"
            });
        }
        const checkemail = await userModel.findOne({
            email
        });
        if (checkemail) return res.status(400).json({
            error: `email already used ${email}`
        })
        const Uname = Name.replace(/\s+/g, '').toLowerCase();
        let userName = Uname;
        let count = 0;
        while (await userModel.findOne({ userName: userName })) {
            count++;
            userName = `${Uname}${count}`;
        }
        // if (checkusername) return res.status(400).json({
        //     error: `user name already used ${userName}`
        // })
        const hashedPassword = await bcrypt.hash(password, 10);
        const data = new userModel({
            Name,
            userName,
            email,
            password: hashedPassword
        })
        await data.save();
        await sendWelcomeEmail(email, Name);
        return res.status(200).json({
            message: "User registered successfully", data
        })
    } catch (error) {
        console.error("Error during registration:", error);
        res.status(500).json({ error: "Internal server error" });

    }

}


const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) res.status(401).json({
            error: "plz fill email or pass"
        })
        const data = await userModel.findOne({ email });
        if (!data) res.status(401).json({ error: "User not found" });
        const ispassmatch = await bcrypt.compare(password, data.password);
        if (!ispassmatch) res.status(401).json({ error: "email or pass someting went wrong" });
        const token = setuser(data._id);
        return res.status(200).json({
            msg: "user logged in successfully",
            token: token
        })
    } catch (error) {
        console.error("Error during registration:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}


async function myprofile(req, res) {
    try {
        console.log("user req _id", req.user._id);

        const userinfo = await userModel.find(req.user._id);
        const alltweet = await tweetModel.find({ author: req.user._id }).populate('author', 'userName').sort({ createdAt: -1 });
        console.log(userinfo, alltweet);
        return res.status(201).json({
            user: userinfo,
            tweets: alltweet
        })
    } catch (error) {
        console.error("Error during registration:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = {
    createAccount,
    userLogin,
    myprofile
}