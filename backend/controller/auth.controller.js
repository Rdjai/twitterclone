const bcrypt = require('bcryptjs');
const sendWelcomeEmail = require("../utils/sendemail")

const userModel = require("../models/user.model");
const { setuser } = require('../service/jwt');

const createAccount = async (req, res) => {
    const { Name, userName, email, password } = req.body;
    console.log(req.body);

    try {
        if (!Name || !userName || !email || !password) {
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
        const checkusername = await userModel.findOne({
            userName
        });
        if (checkusername) return res.status(400).json({
            error: `user name already used ${userName}`
        })
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

}

module.exports = {
    createAccount,
    userLogin
}