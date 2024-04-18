const { validationResult } = require('express-validator')

const User = require('../models/users')

exports.signUpUser =  (req, res, next) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        const error = new Error("falha na validação");
        error.statusCode = 422;
        error.data = error.array();
        throw error;
    }

    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const user = new User({
        name: name,
        email: email,
        password: password,
    })

     user.save()
        .then(result => {
            res.status(201).json({
                massage: "User criado com sucesso!",
                result: result
            })
        }).catch(error => {
            res.status(500).json({
                massage: "Erro ao cria user",
                result: error
            })
        })
}

exports.signInUser = async (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;    

    await User.findOne({ email: email }).then((user) => {
        if(!user) {
            const error = new Error("Email invalido!");
            error.statusCode = 401;
            throw error;
        }
        if(password === user.password) {
            return res.json({ msg: "tudo ok" })
        }
        return res.json({ msg: "senha incorreta" })
    })

}