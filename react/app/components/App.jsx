import React, { Component } from 'react'

import {Navigation} from './navigation/Navigation'
import {Estoque} from './estoque'
import {Footer} from './footer/Footer'

import GruposService from './service/GruposService'

export class App extends Component {
    render(){
        return (
            <div>
                <Navigation exit={this.test} router={this.props.router} />
                {this.props.children}
                <Footer />
            </div>
        );
    }
}
