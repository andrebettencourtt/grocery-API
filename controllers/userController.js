const User = require('../models/users')
const bycript = require('bcrypt')


exports.profile = (req, res) => {
    console.log(req.userId)

    User.findById(req.userId)
        .then(user => {
            user.password = undefined;
            res.status(200).json({ profile: user })
        }).catch(err => {
            res.status(500).json({ msg: err })
        })
}

exports.changePassword = (req, res) => {
    if (!req.userId || !req.body.password || !req.body.newPassword) {
        return res.status(500).json({
            msg: "Nada alterado"
        })
    }

    let password = req.body.password;
    var newPassword = req.body.newPassword;
    var userToChange;

    User.findById(req.userId)
        .then(user => {
            userToChange = user;
            if (!user) {
                const error = new Error("Falha de validação")
                error.statusCode = 422;
                throw error
            }
            return bycript.compare(password.user.password);
        }).then(passIsEqual => {
            if (!passIsEqual) {
                const error = new Error("Senha ou email invalido")
                error.statusCode = 401;
                throw error
            }

            bcrypt.hash(newPassaword, 12).then(passHashed => {
                userToChange.password = passHashed

                userToChange.save().then(user => {
                    user.password = undefined

                    res.status(201).json({
                        message: "Senha atualizada com sucesso!!",
                        result: user
                    })
                }).catch(error => {
                    res.status(500).json({
                        message: "Error ao atualizar o user",
                        result: error
                    })
                })
            })

        }).catch(err => {
            res.status(err.statusCode).json({
                message: "Error ao atualizar o user...",
                result: err
            })
        })
}