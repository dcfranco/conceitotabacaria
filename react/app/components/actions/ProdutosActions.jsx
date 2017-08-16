import ProdutosService from '../service/ProdutosService'

export function addProduto(produto){
    return async (dispatch) => {
        let result = await ProdutosService.putProduto(produto)
        dispatch(updateProdutos()).then(
            () => dispatch(selectProduto(result.insertId)));
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

export function updateProdutos(produtoLike = ''){
    return async (dispatch) => {
        let produtos = await ProdutosService.getProdutos(produtoLike);
        dispatch({
            type: 'UPDATE_PRODUTOS',
            produtos
        });
    }
}

export function selectProduto(codigo){
    return {
        type: 'SELECT_PRODUTO',
        codigo
    }
}