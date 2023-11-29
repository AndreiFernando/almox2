const db = require('../config/config');

const Usuario = {};

Usuario.create = (usuario, result) => {
    const sql = `INSERT INTO usuario(nome, email, senha, idStatus) VALUES (?,?,?,?)`;

    db.query(
        sql,
        [
            usuario.email,
            usuario.senha,
            usuario.hash,
            usuario.idTipo,
            usuario.idStatus


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

module.exports = Usuario