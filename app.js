const express = require('express')
const app = express()

const authRoutes = require('./routes/authRoutes')
const productRoutes = require('./routes/productRoutes')

app.use(express.json())

app.use(productRoutes)
app.use(authRoutes)

app.use((error, req, res, next) => {
    const message = error.message;
    const status = error.statusCode || 500;
    const data = error.data;

    console.log(message)

    res.status(status).json({ message: message, error: data })
})


app.listen(4001, async () => {
    console.log('server on')

})