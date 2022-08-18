const { Pool} = require('pg');

const  pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '1234',
    database: 'firstapi',
    port: '5432'
})

const getUsers = async (req, res) => {    
   const response = await pool.query('Select * from users');
   res.status(200).json(response.rows);
}

const getUserById = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    res.json(response.rows);
}

const createUser = async (req, res) => {
    const {name, apellido, nit, email} = req.body;

    const response = await pool.query('INSERT INTO users (name, apellido, nit, email) VALUES ($1, $2, $3, $4)', [name, apellido, nit, email])
    console.log(response);
    res.json({
        message: 'Usuario creado correctamente',
        body: {
            user: {name, apellido, nit, email}
        }
    });

}

const updateUser = async (req, res) => {
    const id = req.params.id;
    const  {name, apellido, nit, email} = req.body;
    const response = await pool.query('UPDATE users SET name = $1, apellido = $2, nit = $3, email = $4 WHERE  id=$5' , [
        name,
        apellido,
        nit,
        email,
        id
    ]);
    console.log(response);
    res.json('Usuario actualizado correctamente');
}

const deleteUser = async (req, res) => {
    const  id = req.params.id;
    const response = await pool.query('DELETE FROM users WHERE id = $1', [id]);
    console.log(response);
    res.json(`Usuario: ${id} eliminado correctamente`);
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    deleteUser,
    updateUser
}