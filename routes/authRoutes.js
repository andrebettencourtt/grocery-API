const express = require('express')
const router = express.Router()

const auth = require('../controllers/authController')

router.post('/signUp', auth.signUpUser)
router.post('/signIn', auth.signInUser)

module.exports = router;
