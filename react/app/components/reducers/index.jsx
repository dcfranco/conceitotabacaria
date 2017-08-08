import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { GruposReducer } from './GruposReducer'
import { SystemReducer } from './SystemReducer'
import { MarcasReducer } from './MarcasReducer'

export const reducers = combineReducers({
    routing,
    GruposReducer,
    SystemReducer,
    MarcasReducer
});