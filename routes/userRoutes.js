const express = require('express')
const router = express.Router();
const isAuth = require('../middlewares/authJwt')

const user = require('../controllers/userController')
const { validateEmail, validateName, validatePassword, validateEmailExists } = require("../services/validators");


module.exports = router;
