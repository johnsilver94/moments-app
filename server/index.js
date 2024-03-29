import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

import postRoutes from './routes/posts.js'

const app = express();



app.use(bodyParser.json({limit:"30mb", extended: true}))
app.use(bodyParser.urlencoded({limit:"30mb", extended: true}))
app.use(cors());

app.use('/posts', postRoutes)

const MONGO_URL = 'mongodb+srv://johnsilver94:8octombrie081094silver_fang@firstmongodb.f4t1i.mongodb.net/momentsDB?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000 

mongoose.connect(MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false)

