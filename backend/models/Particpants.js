const mongoose = require('mongoose')
const Schema = mongoose.Schema

const particapantSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
    },
    phone:{
        type: Number,
        required: [true,'Phone is required']
    },
    challengeId: {
        type: Schema.Types.ObjectId, ref: 'Challenge'
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    }
})
particapantSchema.statics.signup = () => {
    
}

const Participant = mongoose.model('Participant', particapantSchema)
module.exports = Participant