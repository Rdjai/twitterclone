const mongodb = require("mongoose");

const HashtagModel = new mongodb.Schema({
    tag: { type: String, unique: true, required: true },
    post: [{ type: mongodb.Schema.Types.ObjectId }]
})

module.exports = mongoose.model('Hashtag', HashtagModel);
