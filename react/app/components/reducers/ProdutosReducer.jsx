const initialState = {  
    produtos: [],
    selected: 0,
    estoque: []
}

export function ProdutosReducer(state = initialState, action){
    switch(action.type){
        case 'UPDATE_PRODUTO':
            let produtos = state.produtos.map(produto => {
                if(produto.pro_codigo == action.produto.pro_codigo)
                    return action.produto;
                return produto;
            });
            return {
                ...state,
                produtos
            }
        case 'UPDATE_PRODUTOS':
            return {
                ...state,
                produtos: action.produtos
            }
        case 'SELECT_PRODUTO':
            return {
                ...state,
                selected: action.codigo,
                estoque: action.estoque
            }
        default:
            return state;
    }
}