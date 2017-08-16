const initialState = {  
    marcas: [],
    selected: 0,
}

export function MarcasReducer(state = initialState, action){
    switch(action.type){
        case 'UPDATE_MARCA':
            let marcas = state.marcas.map(marca => {
                if(marca.mar_codigo == action.marca.mar_codigo)
                    return action.marca;
                return marca;
            });
            return {
                ...state,
                marcas
            }
        case 'UPDATE_MARCAS':
            return {
                ...state,
                selected: action.marcas[0] && action.marcas[0].mar_codigo,
                marcas: action.marcas
            }
        case 'SELECT_MARCA':
            return {
                ...state,
                selected: action.codigo
            }
        default:
            return state;
    }
}