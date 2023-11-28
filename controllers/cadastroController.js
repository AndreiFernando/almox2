const Cadastro = require('../models/cadastro');

module.exports = {
    register(req, res) {
        const status = req.body;

        Cadastro.create(status, (
            err,
            data
        ) => {
            if (err) {
                return res.status(501).json({
                    success: false,
                    Message: 'Erro ao criar o cadastro no banco!',
                    error: err
                });
            }

            return res.status(201).json({
                success: true,
                message: 'Cadastro inserido com sucesso no banco!',
                data: data
            });
        })
    }
}