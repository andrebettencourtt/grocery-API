const express = require('express')
const router = express.Router();

const product = require('../controllers/productController')

router.get('/listarProduct', product.listar)
router.post('/addProduct', product.add)


module.exports = router;