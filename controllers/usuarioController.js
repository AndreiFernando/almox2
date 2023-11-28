const Usuario = require('../models/usuario');

module.exports = {
    register(req, res) {
        const status = req.body;

        Usuario.create(status, (
            err,
            data
        ) => {
            if (err) {
                return res.status(501).json({
                    success: false,
                    message: 'Erro ao criar o usuario no banco',
                    error: err
                });
            } else {
                return res.status(201).json({
                    success: true,
                    message: 'Usuario cadastrado com sucesso no banco',
                    data: data
                });
            }
        })
    }
}