const Cadastro = require('../models/cadastro');

module.exports = {
    register(req, res) {
        const cadastro = req.body;

        Cadastro.create(cadastro, (
            err,
            data
        ) => {
            if (err) {
                return res.cadastro(501).json({
                    success: false,
                    message: 'Erro ao criar o cadastro no banco',
                    error: err
                });
            } else {
                return res.cadastro(201).json({
                    success: true,
                    message: 'Cadastro cadastrado com sucesso no banco',
                    data: data
                });
            }
        })
    }
}