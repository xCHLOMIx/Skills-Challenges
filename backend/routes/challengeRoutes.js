const challengeController = require('../controllers/challengeController')
const express = require('express')
const router = express.Router()
const authenticate = require('../middleware/authMiddleware')

router.get('/', authenticate.authenticateUser, challengeController.getChallenges)
router.post('/', challengeController.createChallenge)
router.get('/:id', challengeController.getChallenge)
router.put('/:id',challengeController.updateChallenge)
router.delete('/:id',challengeController.deleteChallenge)
module.exports = router