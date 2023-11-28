const db = require('../config/config');

const Tipo = {};

Tipo.create = (tipo, result) => {
    const sql = `INSERT INTO tipo(tipo, descricao) VALUES (?,?)`;

    db.query(
        sql,
        [
            tipo.tipo,
            tipo.descricao
        ],
        (err, res) => {
            if (err) {
                console.log('Erro no banco de dados', err);
                result(err, null);
            } else {
                result(null, res.insertId);
            }
        }
    )
}

module.exports = Tipo