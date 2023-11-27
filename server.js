const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const logger = require('morgan');
const cors = require('cors');

const statusRoutes = require('./routes/statusRoutes');
const tipoRoutes = require('./routes/tipoRoutes');
const cadastroRoutes = require('./routes/cadastroRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');

const port = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use(cors());

app.disable('x-powered.by');

app.set('port', port)

statusRoutes(app);
tipoRoutes(app);
cadastroRoutes(app);
usuarioRoutes(app);

server.listen(3000, '10.24.96.22' || 'localhost', function () {
    console.log('teste' + process.pid + 'porta' + port + 'iniciada...');
});

app.get('/', (req, res) => {
    res.send('Rota raiz');
});

app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500).send(err.stack);
});