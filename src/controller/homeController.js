import express from 'express';
import pool from '../configuration/connectDb.js';

let getHomepage = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM users');
    return res.render('index.ejs', { dataUser: rows })
}

let getDetailPage = async (request, res) => {
    let userId = request.params.userId;
    let user = await pool.execute('SELECT * FROM `users` WHERE id = ?', [userId]);
    return res.send(JSON.stringify(user[0]));
}

let createNewUser = async (request, res) => {
    let { firstName, lastName, email, address } = request.body;
    await pool.execute('insert into users(firstName,lastName,email,address) values (?,?,?,?)',
        [firstName, lastName, email, address]);

    return res.redirect('/')
}

let deleteUser = async (request, res) => {
    let userId = request.body.userId;
    await pool.execute('delete from users where id = ?', [userId]);
    return res.redirect('/');

}

let getEditPage = async (request, res) => {
    let userId = request.params.userId;
    let [user] = await pool.execute('selebct * from users where id = ?', [userId]);

    return res.render('update.ejs', { dataUser: user[0] });
}

let updateUser = async (request, res) => {
    let { firstName, lastName, email, address, id } = request.body;
    await pool.execute('update users set firstName = ? , lastName = ? , email = ? , address = ? where id = ?',
        [firstName, lastName, email, address, id]);
    return res.redirect('/')
}

module.exports = {
    getHomepage,
    getDetailPage,
    createNewUser,
    deleteUser,
    getEditPage,
    updateUser
}


