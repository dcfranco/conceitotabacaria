import {sqlQuery} from './mysql';

export default class GruposService {
    static async getGrupos(){
        try {
            let grupos = await sqlQuery('select * from tb_grupos', []);
            return grupos;
        } catch(e){
            console.error(e);
        }
        return null;
    }

    static async getGrupo(gru_codigo){
        try {
            let grupo = await sqlQuery('select * from tb_grupos where gru_codigo = ?', [gru_codigo]);
            return grupo;
        } catch(e){
            console.error(e);
        }
        return null;
    }

    static async postGrupo(grupo){
        try {
            let query = 'update tb_grupos set';
            let params = [];
            Object.keys(grupo).map((key) => {
                if(key != 'gru_codigo'){
	                query = query.concat(" ",`${key} = ?`);
                    params.push(grupo[key]);
                }                
            });
            query = query.concat(" ", 'where gru_codigo = ?');
            params.push(grupo.gru_codigo);

            let sucess = await sqlQuery(query, params);
            return sucess;
        } catch(e){
            console.error(e);
        }
        return false;
    }

    static async putGrupo(grupo){
        try {
            let fields = "";
            let values = "";
            let params = [];

            Object.keys(grupo).map((key, index) => {
                if(key != 'gru_codigo'){
                    if(index == 0) {
	                    fields = fields.concat("",`${key}`);
                        values = values.concat("",'?');
                    } else {
                        fields = fields.concat(", ",`${key}`);
                        values = values.concat(", ",'?');
                    }
                    params.push(grupo[key]);
                }                
            });

            let query = "insert into tb_grupos (".concat("", fields).concat(") values (", values).concat(")");
            let sucess = await sqlQuery(query, params);
            return sucess;
        } catch(e){
            console.error(e);
        }
        return false;
    }

    static async cutGrupo(grupo){
        try {
            let sucess = await sqlQuery("delete from tb_grupos where gru_codigo = ?", [grupo.gru_codigo]);
            return sucess;
        } catch(e){
            console.error(e);
        }
        return false;
    }
}
