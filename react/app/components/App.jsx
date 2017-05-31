import React from 'react'

import {Navigation} from './navigation/Navigation'
import {Estoque} from './estoque'
import {Footer} from './footer/Footer'

export const App = (props) => (
    <div>
        <Navigation />
        <Estoque />
        <Footer />
    </div>
);