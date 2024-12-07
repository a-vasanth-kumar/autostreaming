const express = require('express');
const mysql = require('mysql');
const app = express();

app.get('/user', (req, res) => {
    const username = req.query.username;
    const password = req.query.password;

    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'mydatabase'
    });

    connection.connect();

    // GOOD: Use parameterized queries to prevent SQL injection
    const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
    connection.query(query, [username, password], (error, results) => {
        if (error) throw error;
        res.send(results);
    });

    connection.end();
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
