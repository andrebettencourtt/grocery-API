const express = require('express')
const router = express.Router()

const auth = require('../controllers/authController')

const { validateEmail, validatePassword, validateName, validateEmailExistes } = require('../services/validator')

router.post('/signUp', [validateEmail, validatePassword, validateName, validateEmailExistes], auth.signUpUser)
router.post('/signIn', [validateEmail, validatePassword], auth.signInUser)

module.exports = router;
