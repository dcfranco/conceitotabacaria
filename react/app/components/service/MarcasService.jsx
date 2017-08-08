import {sqlQuery} from './mysql';

export default class MarcasService {
    static async getMarcas(like = ''){
        try {
            let marcas = await sqlQuery('select * from tb_marcas where mar_descricao like ?', [`%${like}%`]);
            return marcas;
        } catch(e){
            console.error(e);
        }
        return null;
    }

    static async getMarcasBy(where = {}){
        try{
            let query = 'select * from tb_marcas where 1=1';
            let params = [];
            Object.keys(where).map((condicional) => {
                query = query.concat(" and ", condicional, " = ?");
                params.push(where[condicional]);
            });

            debugger;
            let marcas = await sqlQuery(query, params);
            return marcas;
        } catch(e){
            console.error(e);
        }
    }

    static async getMarca(mar_codigo){
        try {
            let marca = await sqlQuery('select * from tb_marcas where mar_codigo = ?', [mar_codigo]);
            return marca;
        } catch(e){
            console.error(e);
        }
        return null;
    }

    static async postMarca(marca){
        try {
            let query = 'update tb_marcas set';
            let params = [];
            Object.keys(marca).map((key) => {
                if(['mar_codigo','mar_data_alteracao','mar_data_cadastro'].indexOf(key) < 0){
	                query = query.concat(" ",`${key} = ?,`);
                    params.push(marca[key]);
                }                
            });
            
            let date = new Date();
            query = query.concat(" ", "mar_data_alteracao = STR_TO_DATE(?, '%d/%m/%Y %H:%i:%s')");            
            params.push(`${date.toLocaleDateString('pt-br')} ${date.toLocaleTimeString('pt-br')}`);

            query = query.concat(" ", 'where mar_codigo = ?');
            params.push(marca.mar_codigo);

            let sucess = await sqlQuery(query, params);
            return sucess;
        } catch(e){
            console.error(e);
        }
        return false;
    }

    static async putMarca(marca){
        try {
            let fields = "";
            let values = "";
            let params = [];

            Object.keys(marca).map((key, index) => {
                if(key != 'mar_codigo'){
                    if(index == 0) {
	                    fields = fields.concat("",`${key}`);
                        values = values.concat("",'?');
                    } else {
                        fields = fields.concat(", ",`${key}`);
                        values = values.concat(", ",'?');
                    }
                    params.push(marca[key]);
                }                
            });
            let date = new Date();
            params.push(`${date.toLocaleDateString('pt-br')} ${date.toLocaleTimeString('pt-br')}`);

            let query = "insert into tb_marcas (".concat("", fields).concat(", mar_data_cadastro) values (", values).concat(", STR_TO_DATE(?, '%d/%m/%Y %H:%i:%s'))");
            let sucess = await sqlQuery(query, params);
            return sucess;
        } catch(e){
            console.error(e);
        }
        return false;
    }

    static async cutMarca(marca){
        try {
            let sucess = await sqlQuery("delete from tb_marcas where mar_codigo = ?", [marca.mar_codigo]);
            return sucess;
        } catch(e){
            console.error(e);
        }
        return false;
    }
}
