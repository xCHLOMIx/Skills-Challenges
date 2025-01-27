const express = require('express')
const app = express()
const mongoose = require('mongoose')
const challengeRoutes = require('./routes/challengeRoutes')

mongoose.connect("mongodb://localhost:27017/skillsChallenges").then(() => {
    console.log('Connected to the server');
    
    app.listen(1234, ()=>{
        console.log('listening to port 1234');
    })
})
.catch((err) => {
    console.log(err);
})

app.use(express.json())
app.use('/challenges', challengeRoutes)