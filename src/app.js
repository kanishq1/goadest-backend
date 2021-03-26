const express = require('express')

require('./db/mongoose.js')

const placeRouter = require('./routers/placeRouter.js')
const postRouter = require('./routers/postRouter.js')


const app = express()


app.use((req, res, next) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Headers', '*');
    res.set('Access-Control-Allow-Methods', '*');
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }
    next();
});




app.use(express.json())


app.use(placeRouter)
app.use(postRouter)




const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})