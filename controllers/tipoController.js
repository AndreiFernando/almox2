const Tipo = require('../models/tipo');

module.exports = {
    register(req, res) {
        const tipo = req.body;

        Tipo.create(tipo, (
            err,
            data
        ) => {
            if (err) {
                return res.status(501).json({
                    success: false,
                    message: 'Erro ao criar o tipo no banco',
                    error: err
                });
            } else {
                return res.status(201).json({
                    success: true,
                    message: 'Tipo cadastrado com sucesso no banco',
                    data: data
                });
            }
        })
    }
}