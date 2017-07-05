import React, { Component } from 'react'

import {Navigation} from './navigation/Navigation'
import {Estoque} from './estoque'
import {Footer} from './footer/Footer'

import GruposService from './service/GruposService'

export class App extends Component {
    exit(){
        window.close();
    }
    async test(){
       let grupos = await GruposService.getGrupo(1);
       console.log(grupos);
    }
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
