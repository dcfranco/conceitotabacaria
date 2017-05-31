import React from 'react'

import {Navigation} from './navigation/Navigation'
import {Page} from './pages/Page'
import {Footer} from './footer/Footer'

export const App = (props) => (
    <div>
        <Navigation />
        <Page />
        <Footer />
    </div>
);