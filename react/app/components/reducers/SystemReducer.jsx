const initialState = {  
    freezeScreen: false,
    questionModal: {
        opened: false,
        question: "",
        onYes: () => null,
        onNo: () => null
    }
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
        case 'OPEN_QUESTION_MODAL':
            return {
                ...state,
                questionModal: {
                    ...state.questionModal,
                    ...action.options,
                    opened: true
                }
            }
        case 'CLOSE_QUESTION_MODAL':
            return {
                ...state,
                questionModal: {
                    ...state.questionModal,
                    opened: false
                }
            }
        default:
            return state;
    }
}