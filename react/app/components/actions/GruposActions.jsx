export function updateGrupos(grupos){
    return {
        type: 'UPDATE_GRUPOS',
        grupos
    }
}

export function selectGrupo(index){
    return {
        type: 'SELECT_GRUPO',
        index
    }
}