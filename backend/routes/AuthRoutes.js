const express = require('express')
const { signup, login, signupAdmin, loginAdmin,profileAdmin } = require('../controllers/authController')
const {authenticateAdmin}=require('../middleware/authMiddleware')
const router = express.Router()

router.post('/signup', signup)
router.post('/login', login)

router.post('/signupAdmin', signupAdmin)
router.post('/loginAdmin', loginAdmin)
router.get('/profileAdmin',authenticateAdmin,profileAdmin)
module.exports = router