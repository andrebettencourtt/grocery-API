const jwt = require('jsonwebtoken')

module.exports = (req, res, next ) => {
    const token =req.get("Authorization").split(' ')[1];

    let decodedToken;

    try {
        decodedToken = jwt.verify(token, "chavetoken")
    } catch (error) {
        error.statusCode = 500;
        throw error
    }

    if(!decodedToken){
        const erro = new Error("Usuario não autenticado!")
        error.statusCode = 401;
        throw error;
    }

    req.userId = decodedToken;
    next();
}