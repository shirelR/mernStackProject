import express from 'express'
import bodyPaser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

import router from './routes/posts.js'

const app = express()

app.use('/posts', router)
// for images
app.use(bodyPaser.json({ limit: "30mb", extended: true }))
app.use(bodyPaser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())

const CINNECTION_URL = "mongodb+srv://shirel541:shirel541@projectcluster.pubbcai.mongodb.net/?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000

mongoose.connect(CINNECTION_URL
    // , { useNewUrlParser: true, useUnifiedTopology: true }
)
    .then(() => app.listen(PORT, () => console.log(`server running on port ${PORT}`)))
    .catch((error) => console.log(error.message))

// mongoose.set("useFindAndModify", false)