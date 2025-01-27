const mongoose = require('mongoose')
const Schema = mongoose.Schema

const challengeSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required']
    },
    deadline: {
        type: Date,
        required: [true, 'Deadline is required'],
    },
    duration:{
        type: Number,
        required: [true,'Duration is required']
    },
    moneyPrize: {
        type: Number,
        required: [true,'You must provide money Prize ']
    },
    contactEmail: {
        type: String,
        required: [true,'You must provide contact email ']
    },
    projectDescription: {
        type: String,
        required: [true,'You must provide project Description ']
    },
    projectBrief: {
        type: String,
        required: [true,'You must provide project Brief ']
    },
    projectTasks: {
        type: String,
        required: [true,'You must provide project Tasks ']
    },
    skills: {
        type: [String],
        required: [true,'You must provide skills ']
    },
    seniorityLevel: {
        type: String,
        required: [true,'You must provide seniority Level ']
    },
    status: {
        type: Boolean,
        default: true
    }
} , {timestamps: true})

const Challenge = mongoose.model('Challenge', challengeSchema)
module.exports = Challenge