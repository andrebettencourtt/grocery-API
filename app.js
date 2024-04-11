const express = require('express')
const app = express()

const authRoutes = require('./routes/authRoutes')
const productRoutes = require('./routes/productRoutes')

app.use(express.json())


app.use(productRoutes)
app.use(authRoutes)

app.listen(4001, async () => {
    console.log('server on')

})