const User = require('../models/users')
const bycript = require('bcrypt')


exports.profile = (req, res) => {
    console.log(req.UserId)

    User.findById(req.UserId)
        .then(user => {
            user.password = undefined;
            res.status(200).json({ profile: user })
        }).catch(err => {
            res.status(500).json({ msg: err })
        })
}