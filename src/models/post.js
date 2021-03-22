const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    author: {
        type: String,
        required: true,
        trim: true
    },
    content: {
        type: String,
        required: true,
        trim: true
    },
    likes: {
        type: Number,
        required: true,
        default: 0
    }
})

const Post = mongoose.Model('Post', postSchema)

module.exports = Post