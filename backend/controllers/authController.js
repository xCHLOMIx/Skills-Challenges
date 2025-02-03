const Participant = require('../models/Participants')
const jwt = require('jsonwebtoken')

const signup =async  (req, res) => {
    try {
        const user = await Participant.signup(req.body)
        res.json({user})
    } catch (error) {
        console.log(error);
        res.status(400).json({'error':error.message})
    }
};
const login = async (req, res) => {
    try {
        const user = await Participant.login(req.body)
        const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY)
        res.cookie('jwt', token, {
            httpOnly: true,
            secure: true,
            maxAge: 1000*3600*72
        })
        res.json({message:'your logged in'})
    } catch (error) {
        console.log(error);
        res.status(400).json({'error':error.message})
    }
}


module.exports = {
    signup,
    login
}