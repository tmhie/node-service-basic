import connection from '../configuration/connectDb.js';

let getHomepage = (req, res) => {
    let data = [];
    connection.query(
        'SELECT * FROM  `users`',
        function (error, results, fields) {
            console.log('>>>Check result');
            console.log(results);
            data = results.map((row) => { return row });
        })
    return res.render('index.ejs', { dataUser: JSON.stringify(data) })
}

export default getHomepage