const multer = require("multer");
const path = require("path")

// Storage config
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        const uniquName = `${Date.now()}-${Math.round(Math.random() * 1e9)}${ext}`
        cb(null, uniquName)
    }
})

// File filter for image/video

const filefilter = (req, file, cb) => {
    const allowtype = ['image/jpeg', 'image/png', 'video/mp4', 'video/mpeg'];
    if (allowtype.includes(file.mimetype)) {
        cb(null, true);
    } else cb(new Error('Unsupported file type'), false);
}

const upload = multer({
    storage,
    filefilter,
    limits: { fileSize: 20 * 1024 * 1024 }
})

module.exports = upload;