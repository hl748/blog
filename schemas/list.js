const mongoose = require("mongoose")
const { Schema } = mongoose
const { model } = mongoose

const list = new Schema({
    title: {
        required: true,
        type: String
    },
    body: {
        required: true,
        type: String
    }
})

module.exports = model("list",list)