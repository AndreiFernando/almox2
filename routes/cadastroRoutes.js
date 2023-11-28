const cadastroController = require('../controllers/cadastroController');

module.exports = (app) => {
    app.post('/api/cadastro/create', cadastroController.register);
}
