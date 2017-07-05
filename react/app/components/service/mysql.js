import mysql from 'mysql';

const sqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'conceitotabacaria'
});

export const sqlQuery = (query, params) => {
    return new Promise((resolve, reject) => {
        sqlConnection.query(query, params, (error, results, fields) => {{
            if(error) reject(error);
            else resolve(results);
        }});
    });
}