const express = require('express')
const { signup, login, signupAdmin, loginAdmin, profile } = require('../controllers/authController')
const router = express.Router()

router.post('/signup', signup)
router.post('/login', login)
router.get('/profile',profile)
router.post('/signupAdmin', signupAdmin)
router.post('/loginAdmin', loginAdmin)
module.exports = router