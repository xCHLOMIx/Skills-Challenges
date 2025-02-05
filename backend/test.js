const express = require('express')
const app = express()
const mongoose = require('mongoose')
const challengeRoutes = require('./routes/challengeRoutes')
const authRoutes = require('./routes/AuthRoutes')
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser")
const cors=require('cors')
const workRoutes = require('./routes/workRoutes')
const {faker} = require('@faker-js/faker')

const fakeUser = {
    name: faker.person.fullName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    title:faker.
    
}
console.log(fakeUser);
