const express = require('express')
const router = express.Router()
const registerRequestValidator = require('../validators/register')
const authController = require('../controllers/auth')

router.post('/register', registerRequestValidator, authController.registerUser)

module.exports = router;