const express = require('express')
const { signup, login, signupAdmin, loginAdmin, profile, logout } = require('../controllers/authController')
const {authenticateAdmin}=require('../middleware/authMiddleware')
const router = express.Router()

router.post('/signup', signup)
router.post('/login', login)
router.get('/profile',authenticateAdmin,profile)
router.post('/signupAdmin',signupAdmin)
router.post('/loginAdmin', loginAdmin)
router.post('/logout',logout)
module.exports = router