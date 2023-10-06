const express = require('express')
const validarSenha = require('./intermediarios')
const rotas = require('./roteador.js')

const app = express()


app.use(validarSenha)
app.use(express.json())
app.use(rotas)


app.listen(3000)