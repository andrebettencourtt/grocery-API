const User = require('../models/users')

exports.signUpUser = async (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const user = new User({
        name: name,
        email: email,
        password: password,
    })

    await user.save()
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
    const password = req.body.email;    

    await User.findOne({ email: email }).then((user) => {
        if(!user) {
            const error = new Error("Email invalido!");
            error.statusCode = 401;
            throw error;
        }
        if(password === user.password) {
            return console.log("tudo ok")
        }
    })

}