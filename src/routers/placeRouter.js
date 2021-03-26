const express = require('express')
const getDistfromCoords = require('../distcalculation.js')

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



//Get Place Data

router.post('/travelplaces', async (req, res) => {
    try {
        const places = await Place.find()
        const userdist = req.body.distance || 0;


        const dests = places.filter((place) => {

            let typeofplace = req.body.typeofplace
            if (req.body.typeofplace === 'all') {
                typeofplace = place.typeofplace
            }

            let placedist = getDistfromCoords(place.latitude, place.longitude);


            return placedist <= userdist && typeofplace === place.typeofplace;
        });

        res.send(dests)
    } catch (e) {
        res.status(500).send(e.message)
    }
})

module.exports = router