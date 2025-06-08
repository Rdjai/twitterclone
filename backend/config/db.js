const mongoose = require("mongoose")

const dba = mongoose.connect("mongodb://127.0.0.1:27017/twitter", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected ✅")).catch((err) => console.error("MongoDB connection failed ❌", err))

module.exports = dba;