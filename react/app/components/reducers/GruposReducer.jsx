const initialState = {  
    grupos: [],
    selected: 0,
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
                selected: action.grupos[0] && action.grupos[0].gru_codigo,
                grupos: action.grupos
            }
        case 'SELECT_GRUPO':
            return {
                ...state,
                selected: action.codigo
            }
        default:
            return state;
    }
}