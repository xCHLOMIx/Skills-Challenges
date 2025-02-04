const express = require('express')
const { signup, login, signupAdmin, loginAdmin } = require('../controllers/authController')
const router = express.Router()

router.post('/signup', signup)
router.post('/login', login)

router.post('/signupAdmin', signupAdmin)
router.post('/loginAdmin', loginAdmin)

module.exports = router