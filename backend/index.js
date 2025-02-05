const express = require('express')
const app = express()
const mongoose = require('mongoose')
const challengeRoutes = require('./routes/challengeRoutes')
const authRoutes = require('./routes/AuthRoutes')
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser")
const cors=require('cors')
const workRoutes = require('./routes/workRoutes')
dotenv.config();


mongoose.connect("mongodb://127.0.0.1:27017/skillsChallenges").then(() => {
    console.log('Connected to the server');
    
    app.listen(1234, ()=>{
        console.log('listening to port 1234');
    })
})
.catch((err) => {
    console.error('Error connecting to MongoDB:', err);
})
app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use('/challenges', challengeRoutes)
app.use('/auth',authRoutes)
app.use('/work', workRoutes)



