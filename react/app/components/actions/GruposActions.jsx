import GruposService from '../service/GruposService'

export function addGrupo(grupo){
    return async (dispatch) => {
        let result = await GruposService.putGrupo(grupo);
        dispatch(updateGrupos()).then(
            () => dispatch(selectGrupo(result.insertId)))
    }
}

export function saveGrupo(grupo){
    return async (dispatch) => {
        let result = await GruposService.postGrupo(grupo);
        dispatch({
            type: 'UPDATE_GRUPO',
            grupo
        })
    }
}

export function removeGrupo(grupo){
    return async (dispatch) => {
        let result = await GruposService.cutGrupo(grupo);
        dispatch(updateGrupos());
    }
}

export function updateGrupos(grupoLike = ''){
    return async (dispatch) => {
        let grupos = await GruposService.getGrupos(grupoLike);
        dispatch({
            type: 'UPDATE_GRUPOS',
            grupos
        });
    }
}

export function selectGrupo(codigo){
    return {
        type: 'SELECT_GRUPO',
        codigo
    }
}