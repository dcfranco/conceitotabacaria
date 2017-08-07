export function blockUi(){
    return {
        type: 'BLOCK_UI'
    }
}

export function unblockUi(){
    return {
        type: 'UNBLOCK_UI'
    }
}

export function openQuestionModal(options){
    return {
        type: 'OPEN_QUESTION_MODAL',
        options
    }
}

export function closeQuestionModal(){
    return {
        type: 'CLOSE_QUESTION_MODAL'
    }
}