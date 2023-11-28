const usuarioController = require('../controllers/usuarioController');

module.exports = (app) => {
    app.post('/api/usuario/create', usuarioController.register);
} 