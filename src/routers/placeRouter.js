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

router.get('/travelplaces', async (req, res) => {
    try {
        let count = 0;
        const places = await Place.find()
        let dests = new Array();
        const userdist = req.body.distance;

        let placecount = 0;

        places.map((place) => {
            const placedist = getDistfromCoords(place.latitude, place.longitude)
            if (placedist <= userdist) {
                placecount = placecount + 1
            }
        })

        places.map((place) => {
            const placedist = getDistfromCoords(place.latitude, place.longitude)

            if (placedist <= userdist) {

                for (let i = 0; i < placecount; i = i + 1) {
                    if (dests[i] === undefined) {
                        dests[i] = place;
                        count = count + 1;
                        break;
                    }
                }
            }
        })

        res.send(dests)
    } catch (e) {
        res.status(500).send(e.message)
    }
})

module.exports = router