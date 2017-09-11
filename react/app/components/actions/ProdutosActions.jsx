import ProdutosService from '../service/ProdutosService'
import EstoquesService from '../service/EstoquesService'

export function addEstoque(estoque){
    return async (dispatch) => {
        let result = await EstoquesService.putEstoque(estoque);
        dispatch(updateProdutos('', estoque.est_produto));
    }
}

export function addProduto(produto){
    return async (dispatch) => {
        let result = await ProdutosService.putProduto(produto)
        dispatch(updateProdutos('', result.insertId));
    }
}

export function saveProduto(produto){
    return async (dispatch) => {
        let result = await ProdutosService.postProduto(produto);
        dispatch({
            type: 'UPDATE_PRODUTO',
            produto
        })
    }
}

export function removeProduto(produto){
    return async (dispatch) => {
        let result = await ProdutosService.cutProduto(produto);
        dispatch(updateProdutos());
    }
}

export function updateProdutos(produtoLike = '', selected = null){
    return async (dispatch) => {
        let produtos = await ProdutosService.getProdutos(produtoLike);
        dispatch({
            type: 'UPDATE_PRODUTOS',
            produtos
        });
        
        let produtoCodigo = selected || (produtos[0] && produtos[0].pro_codigo);
        if(produtoCodigo) dispatch(selectProduto(produtoCodigo));
    }
}

export function selectProduto(codigo){
    return async (dispatch) => {
        let estoque = await EstoquesService.getEstoque(codigo);
        dispatch({
            type: 'SELECT_PRODUTO',
            codigo,
            estoque
        });
    }
}