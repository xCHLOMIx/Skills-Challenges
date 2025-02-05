const express = require('express')
const router = express.Router()
const { createWork, getWork, getWorks } = require('../controllers/workController')

router.get('/', getWorks)
router.get('/:id', getWork)
router.post('/', createWork)

module.exports = router