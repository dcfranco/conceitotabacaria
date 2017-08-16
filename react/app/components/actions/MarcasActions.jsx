import MarcasService from '../service/MarcasService'

export function addMarca(marca){
    return async (dispatch) => {
        let result = await MarcasService.putMarca(marca);
        dispatch(updateMarcas()).then(
            () => dispatch(selectMarca(result.insertId)));
    }
}

export function saveMarca(marca){
    return async (dispatch) => {
        let result = await MarcasService.postMarca(marca);
        dispatch({
            type: 'UPDATE_MARCA',
            marca
        })
    }
}

export function removeMarca(marca){
    return async (dispatch) => {
        let result = await MarcasService.cutMarca(marca);
        dispatch(updateMarcas());
    }
}

export function updateMarcas(marcaLike = ''){
    return async (dispatch) => {
        let marcas = await MarcasService.getMarcas(marcaLike);
        dispatch({
            type: 'UPDATE_MARCAS',
            marcas
        });
    }
}

export function selectMarca(codigo){
    return {
        type: 'SELECT_MARCA',
        codigo
    }
}