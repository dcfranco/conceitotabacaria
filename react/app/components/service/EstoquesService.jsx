import {sqlQuery} from './mysql';

export default class EstoquesService {
    static async getEstoque(est_produto){
        try {
            let estoque = await sqlQuery('select * from tb_estoque where est_produto = ?', [est_produto]);
            return estoque;
        } catch(e){
            console.error(e);
        }
        return null;
    }

    static async postEstoque(estoque){
        try {
            let query = 'update tb_estoque set';
            let params = [];
            Object.keys(estoque).map((key) => {
                if(['est_produto','est_data_cadastro'].indexOf(key) < 0){
	                query = query.concat(" ",`${key} = ?,`);
                    params.push(estoque[key]);
                }                
            });
            
            query = query.concat(" ", 'where est_codigo = ?');
            params.push(estoque.est_codigo);

            let sucess = await sqlQuery(query, params);
            return sucess;
        } catch(e){
            console.error(e);
        }
        return false;
    }

    static async putEstoque(estoque){
        try {
            let fields = "";
            let values = "";
            let params = [];

            Object.keys(estoque).map((key, index) => {
                if(key != 'est_codigo'){
                    if(index == 0) {
	                    fields = fields.concat("",`${key}`);
                        values = values.concat("",'?');
                    } else {
                        fields = fields.concat(", ",`${key}`);
                        values = values.concat(", ",'?');
                    }
                    params.push(estoque[key]);
                }                
            });
            let date = new Date();
            params.push(`${date.toLocaleDateString('pt-br')} ${date.toLocaleTimeString('pt-br')}`);

            let query = "insert into tb_estoque (".concat("", fields).concat(", est_data_cadastro) values (", values).concat(", STR_TO_DATE(?, '%d/%m/%Y %H:%i:%s'))");
            let sucess = await sqlQuery(query, params);
            return sucess;
        } catch(e){
            console.error(e);
        }
        return false;
    }

    static async cutEstoque(estoque){
        try {
            let sucess = await sqlQuery("delete from tb_estoque where est_codigo = ?", [estoque.est_codigo]);
            return sucess;
        } catch(e){
            console.error(e);
        }
        return false;
    }
}
