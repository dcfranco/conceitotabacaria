const initialState = {  
    marcas: [],
    selectedIndex: 0,
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
                selectedIndex: 0,
                marcas: action.marcas
            }
        case 'SELECT_MARCA':
            return {
                ...state,
                selectedIndex: action.index
            }
        default:
            return state;
    }
}