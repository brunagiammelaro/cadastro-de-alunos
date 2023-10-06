const validarSenha = (req, res, next) => {
    const senha = req.query.senha

    if(senha !== 'cubos123') {
        return res.status(401).json({mensagem:'O usuário não está autenticado. A senha está incorreta'})
    } else {
        next()
    }
}

module.exports = validarSenha
