const express = require('express')

const Place = require('../models/place.js')

const router = new express.Router()

// Add a place to database

router.post('/place', async (req, res) => {
    const place = new Place(req.body)
    try {
        await place.save()
        res.status(201).send(place.placename)
    } catch (e) {
        res.status(500).send(e.message)
    }
})

module.exports = router