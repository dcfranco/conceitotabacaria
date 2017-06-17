import React from 'react'
import { Router, Route, IndexRedirect, hashHistory } from 'react-router'

import {Estoque} from './estoque'
import {App} from './App'

export const AppMain = (props) => (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path='/estoque' component={Estoque} />
            <Route path='/caixa' component={Caixa} />
            <Route path='/balanco' component={Balanco} />
            <IndexRedirect to='/estoque' />
        </Route>
    </Router>
);

const Caixa = (props) => (<div> Under construction </div>);
const Balanco = (props) => (<div> Under construction </div>);

