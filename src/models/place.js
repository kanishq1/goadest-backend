const { Decimal128 } = require('bson')
const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
    placename: {
        type: String,
        required: true,
        trim: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    latitude: {
        type: Decimal128,
        required: true,
    },
    longitude: {
        type: Decimal128,
        required: true,
    },
    typeofplace: {
        type: String,
        required: true
    },
    imageurl: {
        type: String
    }
})

const Place = mongoose.model('Place', placeSchema)

module.exports = Place