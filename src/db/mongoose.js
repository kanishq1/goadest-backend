const mongoose = require('mongoose')

const dbURL = process.env.GOADEST_DB_URL;

mongoose.connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})