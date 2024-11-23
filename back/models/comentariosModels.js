var pool = require('./bd');

async function getComentarios() {

    var query = "select * from comentarios";
    var rows = await pool.query(query);

    return rows;
}

async function inserComentarios(obj) {
    try {
        var query = "insert into comentarios set ?";
        var rows = await pool.query(query, [obj]);
        return rows
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function borrarComentarioById(id) {

    console.log(id);

    var query = "delete from comentarios where id_comentario = ?";
    var rows = await pool.query(query, [id]);

    return rows;
}

async function getComentarioById(id) {

    var query = "select * from comentarios where id_comentario = ?";
    var rows = await pool.query(query, [id]);

    return rows[0];
}

async function modificarComentarioById(obj, id) {
    try {
        var query = 'update comentarios set ? where id_comentario = ?';
        var rows = await pool.query(query, [obj, id]);
        return rows;
    } catch (error) {
        throw error;
    }
}

module.exports = { getComentarios, inserComentarios, borrarComentarioById, getComentarioById, modificarComentarioById }