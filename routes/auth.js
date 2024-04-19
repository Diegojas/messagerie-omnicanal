const express = require('express')
const router = express.Router()
const registerRequestValidator = require('../validators/register')

router.post('/register', registerRequestValidator, authController.registerUser)