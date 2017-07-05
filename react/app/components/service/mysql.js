import mysql from 'mysql';

export const sqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'conceitotabacaria'
});