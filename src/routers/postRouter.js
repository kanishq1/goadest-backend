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


//Get all posts

router.get('/posts', async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).send(posts.sort((a, b) => b.createdAt - a.createdAt))
    } catch (e) {
        res.status(500).send(e.message)
    }
})

router.get('/post/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const post = await Post.findById(id)
        res.status(200).send(post);
    } catch (e) {
        res.status(500).send(e.message)
    }
})


module.exports = router;