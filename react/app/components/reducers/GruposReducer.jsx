const initialState = {  
    grupos: [],
    selectedIndex: 0,
}

export function GruposReducer(state = initialState, action){
    switch(action.type){
        case 'UPDATE_GRUPO':
            let grupos = state.grupos.map(grupo => {
                if(grupo.gru_codigo == action.grupo.gru_codigo)
                    return action.grupo;
                return grupo;
            });
            return {
                ...state,
                grupos
            }
        case 'UPDATE_GRUPOS':
            return {
                ...state,
                selectedIndex: 0,
                grupos: action.grupos
            }
        case 'SELECT_GRUPO':
            return {
                ...state,
                selectedIndex: action.index
            }
        default:
            return state;
    }
}