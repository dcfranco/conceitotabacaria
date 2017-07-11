const initialState = {  
    grupos: [],
    selectedIndex: 0,
}

export function GruposReducer(state = initialState, action){
    switch(action.type){
        case 'UPDATE_GRUPOS':
            return {
                ...state,
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