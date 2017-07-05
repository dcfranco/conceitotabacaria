import {sqlConnection} from './mysql';

export default class GruposService {
    static getGrupo(gru_codigo){
        return new Promise((resolve, reject) => {
            sqlConnection.query(`select * from tb_grupos where gru_codigo = ${gru_codigo}`, (error, results) => {                
                if(error) reject(error);
                else resolve(results);
            });            
        });
    }
}
