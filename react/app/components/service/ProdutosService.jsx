import {sqlQuery} from './mysql';

export default class ProdutosService {
    static async getProdutos(like = ''){
        try {
            let query = 'SELECT a.*, \
                        (SELECT COUNT(*) FROM tb_estoque b where b.est_produto = a.pro_codigo) pro_qntd_estoque, \
                        (SELECT est_preco_venda FROM tb_estoque b where b.est_produto = a.pro_codigo ORDER BY est_data_cadastro DESC LIMIT 1) pro_preco_venda \
                        FROM tb_produtos a \
                        WHERE pro_descricao LIKE ?';
            let produtos = await sqlQuery(query, [`%${like}%`]);
            return produtos;
        } catch(e){
            console.error(e);
        }
        return null;
    }

    static async getProduto(pro_codigo){
        try {
            let query = 'SELECT a.*, \
                        (SELECT COUNT(*) FROM tb_estoque b where b.est_produto = a.pro_codigo) pro_qntd_estoque, \
                        (SELECT est_preco_venda FROM tb_estoque b where b.est_produto = a.pro_codigo ORDER BY est_data_cadastro DESC LIMIT 1) pro_preco_venda \
                        FROM tb_produtos a \
                        WHERE pro_codigo = ?';
            let produto = await sqlQuery(query, [pro_codigo]);
            return produto;
        } catch(e){
            console.error(e);
        }
        return null;
    }

    static async getProdutosBy(where = {}){
        try{
            let query = "SELECT a.*, \
                        CONCAT((SELECT mar_descricao FROM tb_marcas WHERE mar_codigo = a.pro_marca), \
                            ' ', \
                            pro_descricao, \
                            ' ', \
                            pro_peso, \
                            (SELECT med_sigla FROM tb_medidas WHERE med_codigo = a.pro_medida)) PRO_NOME_COMPLETO \
                        FROM tb_produtos a \
                        WHERE 1=1";
            let params = [];
            Object.keys(where).map((condicional) => {
                query = query.concat(" and ", condicional, " = ?");
                params.push(where[condicional]);
            });

            let marcas = await sqlQuery(query, params);
            return marcas;
        } catch(e){
            console.error(e);
        }
    }

    static async postProduto(produto){
        try {
            let query = 'update tb_produtos set';
            let params = [];
            Object.keys(produto).map((key) => {
                if(['pro_codigo','pro_data_alteracao','pro_data_cadastro'].indexOf(key) < 0){
	                query = query.concat(" ",`${key} = ?,`);
                    params.push(produto[key]);
                }                
            });
            
            let date = new Date();
            query = query.concat(" ", "pro_data_alteracao = STR_TO_DATE(?, '%d/%m/%Y %H:%i:%s')");            
            params.push(`${date.toLocaleDateString('pt-br')} ${date.toLocaleTimeString('pt-br')}`);

            query = query.concat(" ", 'where pro_codigo = ?');
            params.push(produto.pro_codigo);

            let sucess = await sqlQuery(query, params);
            return sucess;
        } catch(e){
            console.error(e);
        }
        return false;
    }

    static async putProduto(produto){
        try {
            let fields = "";
            let values = "";
            let params = [];

            Object.keys(produto).map((key, index) => {
                if(key != 'pro_codigo'){
                    if(index == 0) {
	                    fields = fields.concat("",`${key}`);
                        values = values.concat("",'?');
                    } else {
                        fields = fields.concat(", ",`${key}`);
                        values = values.concat(", ",'?');
                    }
                    params.push(produto[key]);
                }                
            });
            let date = new Date();
            params.push(`${date.toLocaleDateString('pt-br')} ${date.toLocaleTimeString('pt-br')}`);

            let query = "insert into tb_produtos (".concat("", fields).concat(", pro_data_cadastro) values (", values).concat(", STR_TO_DATE(?, '%d/%m/%Y %H:%i:%s'))");
            let sucess = await sqlQuery(query, params);
            return sucess;
        } catch(e){
            console.error(e);
        }
        return false;
    }

    static async cutProduto(produto){
        try {
            let sucess = await sqlQuery("delete from tb_produtos where pro_codigo = ?", [produto.pro_codigo]);
            return sucess;
        } catch(e){
            console.error(e);
        }
        return false;
    }
}
