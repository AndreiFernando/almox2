const tipoController = require('../controllers/tipoController');

module.exports = (app) => {
    app.post('/api/tipo/create', tipoController.register);
}