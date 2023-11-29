const db = require('../config/config');

const Cadastro = {};

Cadastro.create = (cadastro, result) => {
    const sql = `INSERT INTO cadastro(nome, sobrenome, email, senha, confirmeSenha, idStatus) VALUES (?,?,?,?,?,?)`;

    db.query(
        sql,
        [
            cadastro.nome,
            cadastro.sobrenome,
            cadastro.email,
            cadastro.senha,
            cadastro.confirmeSenha,
            cadastro.idStatus
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

module.exports = Cadastro