import pool from '../configuration/connectDb.js';

let getAllPage = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM users');
    return res.status(200).json({
        message: 'oke',
        data: rows
    })
}

let createUser = async (req, res) => {
    let { firstName, lastName, email, address } = req.body;

    if (!firstName || !lastName || !email || !address) {
        return res.status(200).json({
            message: 'missing required params'
        })
    }

    await pool.execute('insert into users(firstName,lastName,email,address) values (?,?,?,?)',
        [firstName, lastName, email, address]);

    return res.status(200).json({
        message: 'ok'
    })
}

let deleteUser = async (req, res) => {
    let userId = req.params.userId;
    await pool.execute('delete from users where id = ?', [userId]);
    return res.status(200).json({
        message: 'ok'
    })
}

let updateUser = async (req, res) => {
    let { firstName, lastName, email, address, id } = req.body;

    if (!firstName || !lastName || !email || !address) {
        return res.status(200).json({
            message: 'missing required params'
        })
    }

    await pool.execute('update users set firstName = ? , lastName = ? , email = ? , address = ? where id = ?',
        [firstName, lastName, email, address, id]);

    return res.status(200).json({
        message: 'ok'
    })
}

let getDetailUser = async (req, res) => {
    let userId = req.params.userId;
    let user = await pool.execute('SELECT * FROM `users` WHERE id = ?', [userId]);
    // return res.send(JSON.stringify(user[0]));
    return res.status(200).json({
        message: 'ok',
        data: user[0]
    })
}

module.exports = {
    getAllPage,
    getDetailUser,
    createUser,
    deleteUser,
    updateUser
}