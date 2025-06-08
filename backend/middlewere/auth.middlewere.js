const jwt = require("jsonwebtoken");
const { getUser } = require("../service/jwt");
const userModel = require("../models/user.model");

async function HandleResctricUser(req, res, next) {
    try {
        const authHeader = req.headers.authorization;
        const token = authHeader.split(" ")[1]
        console.log(token);
        if (!token) return res.status(401).json({
            error: "please login and try again",
        })
        const id = getUser(token);
        const data = await userModel({
            _id: id._id
        })
        if (!data) return res.status(401).json({
            error: "please login and try again",
        })
        req.user = data;
        next();

    } catch (error) {
        console.error("Error in HandleRestricUser:", error);
        res.status(401).json({ error: "Unauthorized: Invalid token" });
    }

}

module.exports = {
    HandleResctricUser
}