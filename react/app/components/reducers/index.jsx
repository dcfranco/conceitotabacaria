import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { GruposReducer } from './GruposReducer'

export const reducers = combineReducers({
    routing,
    GruposReducer
});