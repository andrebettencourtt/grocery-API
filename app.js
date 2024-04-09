const express = require('express')
const app = express()

const authRoutes = require('./routes/authRoutes')

app.use(express.json())

app.use(authRoutes)

app.listen(4001, async () => {
    console.log('server on')

})