const Product = require('../models/product')

exports.get = (req, res, next) => {
    Product.findAll()
        .then(result => {
            res.status(201).json({
                product: result
            })
        })
        .catch(error => {
            console.log(error)
        })
}

exports.post = (req, res, next) => {
    const name = req.body.name;
    const valor = req.body.valor;
    const qtd = req.body. qtd;

    const newProduct = new Product({
        name: name,
        valor: valor,
        qtd: qtd

    })

    newProduct.save()
        .then((resunt) => {
            console.log(result)

            res.status(401).json({
                message: "Salvo",
                error: false
            })
            .catch((error) => {
                console.log(error)
            })
        })
}