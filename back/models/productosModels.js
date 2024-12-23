var pool = require('./bd');

async function getProductos() {

    var query = "select * from productos";
    var rows = await pool.query(query);

    return rows;
}

async function inserProductos(obj) {
    try {
        var query = "insert into productos set ?";
        var rows = await pool.query(query, [obj]);
        return rows
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function borrarProductoById(id) {

    console.log(id);

    var query = "delete from productos where id_producto = ?";
    var rows = await pool.query(query, [id]);

    return rows;
}

async function getProductoById(id) {

    var query = "select * from productos where id_producto = ?";
    var rows = await pool.query(query, [id]);

    return rows[0];
}

async function modificarProductoById(obj, id) {
    try {
        var query = 'update productos set ? where id_producto = ?';
        var rows = await pool.query(query, [obj, id]);
        return rows;
    } catch (error) {
        throw error;
    }
}

module.exports = { getProductos, inserProductos, borrarProductoById, getProductoById, modificarProductoById }