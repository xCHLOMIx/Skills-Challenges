const jwt = require('jsonwebtoken')
const Participant = require('../models/Participants')
const authenticateUser = async (req,res,next) => {
    const token = req.cookies.jwt
    if (token) {
        try {
            const verification = jwt.verify(token, process.env.SECRET_KEY)
            if (verification) {
                console.log(req.participant);
                console.log(req.participant);
                next()
            } else {
                res.status(403).json({message:'you are unauthorized'})
            }
        } catch (error) {
            res.status(403).json({message:'your unauthorized'})
        }
    }
    else {
        res.status(403).json({message:'you are unauthorized 2'})
        
    }
}
module.exports = {
    authenticateUser
}