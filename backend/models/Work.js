const mongoose = require('mongoose')
const Schema = mongoose.Schema

const workSchema = new Schema({
    repositoryUrl: {
        type: String,
        required: [true,'repository url is required']
    },
    challengeId: {
        type: Schema.Types.ObjectId,
        "ref": "Challenge",
        required:true
    },
    participantId: {
        type: Schema.Types.ObjectId,
        "ref": "Participant",
        required:true
    }
})

const Work = mongoose.model("work", workSchema)
module.exports = Work