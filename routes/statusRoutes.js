const statusController = require('../controllers/statusController');

module.exports = (app) => {
    app.post('./api/status/create', statusController.register);
}