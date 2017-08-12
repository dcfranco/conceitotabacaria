const initialState = {  
    freezeScreen: false
}

export function SystemReducer(state = initialState, action){
    switch(action.type){
        case 'BLOCK_UI':
            return {
                ...state,
                freezeScreen: true
            }
        case 'UNBLOCK_UI':
            return {
                ...state,
                freezeScreen: false
            }
        default:
            return state;
    }
}