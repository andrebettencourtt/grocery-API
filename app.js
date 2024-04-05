const express = require('express')
const app = express()

const authRoutes = require('./routes/authRoutes')


app.use(authRoutes)

app.listen(4001, async () => {
    console.log('server on')

    try {
        await sequelize.authenticate();
        console.log('Banco conectado com sucesso');
      } catch (error) {
        console.error('Erro ao conectar com o banco', error);
    }
})