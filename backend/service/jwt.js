const jwt = require("jsonwebtoken")
const key = process.env.SECRETEPASSWORDJWT
const setuser = (id) => {
    return jwt.sign({
        id
    }, key
    )
}


function getUser(token) {
    try {
        return jwt.verify(token, key)

    } catch (error) {
        console.error("Invalid token:", error.message);
        return null;
    }
}

module.exports = {
    setuser,
    getUser
}