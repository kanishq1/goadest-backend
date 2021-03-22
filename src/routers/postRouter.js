const express = require('express')

const Post = require('../models/post.js')

const router = new express.Router()


//Add posts to the database

router.post('/post', async (req, res) => {
    const post = new Post(req.body)
    try {
        await post.save()
        res.status(201).send(post);
    } catch (e) {
        res.status(500).send(e.message)
    }
})

module.exports = router;