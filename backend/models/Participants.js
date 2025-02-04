const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

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
particapantSchema.statics.signup = async function({ name, email, phone, password }) {
    const salt = await bcrypt.genSalt()
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({
        name,
        email,
        phone,
        password:hash
    })
    const participant = await user.save()
    console.log(participant);
    return participant
}
particapantSchema.statics.login = async function ({email,password}) {
    //check if email exists

    const email_exists = await this.findOne({email })
    if (!email_exists) {
        throw Error('Incorrect credentials')
    }
    else {
        const user = email_exists
        const passwordMatch = await bcrypt.compare(password, user.password)
        if (passwordMatch) {
            return user
        }
        throw Error("Incorrect credentials");
    }
}

const Participant = mongoose.model('Participant', particapantSchema)
module.exports = Participant