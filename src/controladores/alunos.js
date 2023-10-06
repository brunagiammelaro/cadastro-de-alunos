let alunos = require('../dados/bancodedados')
let cursos = require('../dados/cursos')
let identificadorAluno = 1

const listarAlunos = (req, res) => {
    return res.json(alunos).status(200)
}

const obterAlunoById = (req, res) => {
    const id = Number(req.params.id)
    
    if(isNaN(id)) {
        return res.status(400).json({ mensagem: 'Id deve ser um número válido.'})
    }

    const aluno = alunos.find((elemento) => {
        return elemento.id === id
    })

    if(!aluno) {
        return res.status(404).json({ mensagem: 'Aluno não encontrado.'})
    }

    return res.json(aluno)
}

const cadastrarAluno = (req, res) => {
    const { nome, sobrenome, idade, curso } = req.body

    if (!nome || !sobrenome || !idade || !curso) {
        return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios' })
    }

    if(idade < 18) {
        return res.status(400).json({mensagem: 'Idade não autorizada'})
    }
    if(!cursos.includes(curso) ) {
        return res.status(400).json({mensagem: 'O curso não é válido'})
    }
    
    const aluno = {
        id: identificadorAluno,
        nome,
        sobrenome,
        idade,
        curso
    }
        identificadorAluno++
        alunos.push(aluno)
        return res.status(201).send()
}

const excluirAluno = (req, res) => {
    const id = Number(req.params.id)
    
    if(isNaN(id)) {
        return res.status(400).json({ mensagem: 'Id deve ser um número válido.'})
    }

    const indiceAlunoExcluido = alunos.find((aluno) => {
        return aluno.id === id
    })
    if(!indiceAlunoExcluido) {
        return res.status(404).json({mensagem: 'Aluno não existe.'})
    }

    const alunoExcluido = alunos.splice(indiceAlunoExcluido, 1)[0]
    return res.status(200).send(alunoExcluido)
}

const atualizarAluno = (req, res) => {
    const id = req.params.id
    const { nome, sobrenome, idade, curso } = req.body

    if (!nome || !sobrenome || !idade || !curso) {
        return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios' })
    }
    if(idade < 18) {
        return res.status(400).json({mensagem: 'Idade não autorizada'})
    }
    if(!cursos.includes(curso) ) {
        return res.status(400).json({mensagem: 'O curso não é válido'})
    }

    const aluno = alunos.find((aluno) => {
        return aluno.id === Number(id)
    })

    if (!aluno) {
        return res.status(404).json({ mensagem: 'Aluno não encontrado.' });
    }
    aluno.nome = nome;
    aluno.sobrenome = sobrenome;
    aluno.idade = idade;
    aluno.curso = curso;

    return res.status(203).send()
}

const atualizarIdadeAluno = (req, res) => {
    const { id } = req.params
    const { idade } = req.body

    const aluno = alunos.find((aluno) => {
        return aluno.id === Number(id)
    })

    if(!aluno) {
        return res.idade(404).json({ mensagem: 'Aluno não encontrado.'})
    }
    
    aluno.idade = idade;

    return res.idade(204).send()
}

module.exports = {
    listarAlunos,
    obterAlunoById,
    cadastrarAluno,
    excluirAluno,
    atualizarAluno,
    atualizarIdadeAluno
}