const { check } = require('express-validator')
const User = require('../models/users')

module.exports = {
    validateEmail: check('email')
        .isEmail()
        .withMessage('Digite um email valido!'),

    validatePassword: check("password")
        .isLength({ min: 8 })
        .withMessage('A senha precisa de pelo menos 8 caracteres!'),

    validateName: check("name")
        .isLength({ min: 7 })
        .withMessage('O nome precisa de pelo menos 8 caracteres!'),

    validateEmailExistes: check('email')
        .isEmail()
        .custom((emailRecebido, { }) => {
            return User.findOne({ email: emailRecebido }).then(user => {

                if (user) {
                    return Promise.reject("Email já existe")
                }
            })
        })




}
