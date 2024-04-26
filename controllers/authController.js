const { validationResult } = require('express-validator')
const bycript = require('bcrypt')

const User = require('../models/users')

exports.signUpUser = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        const error = new Error("falha na validação");
        error.statusCode = 422;
        error.data = error.array();
        throw error;
    }

    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    bycript.hash(password, 12).then(passHashed => {
        const user = new User({
            name: name,
            email: email,
            password: passHashed,
        })

        user.save()
            .then(user => {
                user.password = undefined;
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
    })

}

exports.signInUser = async (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    let loadedUser

    await User.findOne({ email: email }).then((user) => {
        if (!user) {
            const error = new Error("Email invalido!");
            error.statusCode = 422;
            throw error;
        }

        loadedUser = user;
        return bycript.compare(password, user.password)

    }).then(passIsEqual => {
        if (!passIsEqual) {
            const error = new Error("Email ou senha inválida...");
            error.statusCode = 401;
            throw error;
        }

        const token = jwt.sign(
            {
                email: loadedUser.email,
                userId: loadedUser._id.toString()
            },
            "chavetoken",
            { expiresIn: "4h"}
        )

        return res.status(200).json({
            message: "Usuario logado com sucesso",
            token: token
        })


    })
    .catch(error => {
        if (!error.statusCode) {
            error.statusCode = 500;
        }
        next(error);
    })
}