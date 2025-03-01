const { model, Schema } = require('mongoose');


const blogs = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    img: { type: String, required: true }
})

module.exports = model("blogs", blogs);