import React from 'react'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { Router, Route, IndexRedirect, createMemoryHistory, hashHistory } from 'react-router'

import {Estoque} from './estoque'
import {App} from './App'
import {reducers} from './reducers'

const memoryHistory = createMemoryHistory();
const store = createStore(reducers, undefined, applyMiddleware(thunk, routerMiddleware(hashHistory)));

export const AppMain = (props) => (
    <Provider store={store}>
        <Router history={memoryHistory}>
            <Route path="/" component={App}>
                <Route path='/estoque' component={Estoque} />
                <Route path='/caixa' component={Caixa} />
                <Route path='/balanco' component={Balanco} />
                <IndexRedirect to='/estoque' />
            </Route>
        </Router>
    </Provider>
);

const Caixa = (props) => (<div> Under construction </div>);
const Balanco = (props) => (<div> Under construction </div>);

