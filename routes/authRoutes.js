const express = require('express')
const router = express.Router()

const auth = require('../controllers/authController')

const { check } = require("express-validator")

router.post('/signUp', check('email').isEmail(), auth.signUpUser)
router.post('/signIn', auth.signInUser)

module.exports = router;
