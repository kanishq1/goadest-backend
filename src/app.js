const express = require('express')

require('./db/mongoose.js')

const placeRouter = require('./routers/placeRouter.js')
const postRouter = require('./routers/postRouter.js')


const app = express()


app.use(express.json())


app.use(placeRouter)
app.use(postRouter)




const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})