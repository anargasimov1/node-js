const { model, Schema } = require('mongoose');


const user = new Schema({
    name: { type: String, required: true },
    surname: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, default: "user" }
})

module.exports = model("users", user);