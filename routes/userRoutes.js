const express = require('express')
const router = express.Router();
const isAuth = require('../middlewares/authJwt')

const user = require('../controllers/userController')
const { validateEmail, validateName, validatePassword, validateEmailExists } = require("../services/validator");

router.put('/change-password', [validateEmail, validatePassword], user.changePassword)
router.get('/profile', [validateEmail, validatePassword], user.profile)

module.exports = router;
