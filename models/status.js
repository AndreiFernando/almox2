const db = require('../config/config');

const Status = {};

Status.create = (status, result) => {
    const sql = `INSERT INTO status( descricao) VALUES (?)`;

    db.query(
        sql,
        [
            status.descricao
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

module.exports = Status