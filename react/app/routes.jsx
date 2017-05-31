import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import {Page} from './components/pages/Page'
import {App} from './components/App'

export default (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Page} />
            <Route path='/balanco' component={Page} />
        </Route>
    </Router>
)