const express = require('express')
const {listarAlunos, obterAlunoById, cadastrarAluno, excluirAluno, atualizarAluno, atualizarIdadeAluno} = require('./controladores/alunos')

const rotas = express()

rotas.get('/alunos', listarAlunos)
rotas.get('/alunos/:id', obterAlunoById)
rotas.post('/alunos', cadastrarAluno)
rotas.delete('/alunos/:id', excluirAluno)
rotas.put('/alunos/:id', atualizarAluno)
rotas.patch('/alunos/:id/idade', atualizarIdadeAluno)

module.exports = rotas