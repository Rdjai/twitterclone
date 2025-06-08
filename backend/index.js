const express = require("express")
const app = express();
const PORT = 8000 || process.env.PORT
const db = require("./config/db")
require('dotenv').config()
const router = require("./routes/Route");
const userModel = require("./models/user.model");

//middlewere
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", router);
app.use('/uploads', express.static('uploads'));
app.get('/', (req, res) => {

    res.send("Twitter Clone API Running 🐦");
});

app.get("/users", async (req, res) => {

    try {
        const data = await userModel.find();
        if (!data) return res.status(400).json({
            error: "user not found"
        })

        return res.status(200).json({
            data
        })
    } catch (error) {
        console.error("Error during registration:", error);
        res.status(500).json({ error: "Internal server error" });
    }
})


app.listen(PORT, () => {
    console.log(`server started ${PORT}`);
})