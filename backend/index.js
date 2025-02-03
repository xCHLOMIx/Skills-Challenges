const express = require('express')
const app = express()
const mongoose = require('mongoose')
const challengeRoutes = require('./routes/challengeRoutes')
const authRoutes = require('./routes/AuthRoutes')
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser")
dotenv.config();


mongoose.connect("mongodb://localhost:27017/skillsChallenges").then(() => {
    console.log('Connected to the server');
    
    app.listen(1234, ()=>{
        console.log('listening to port 1234');
    })
})
.catch((err) => {
    console.error('Error connecting to MongoDB:', err);
})
app.use(cookieParser())
app.use(express.json())
app.use('/challenges', challengeRoutes)
app.use('/auth',authRoutes)