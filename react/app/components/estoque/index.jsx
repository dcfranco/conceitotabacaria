import React, {Component} from 'react'

import EstoqueMenu from './EstoqueMenu'
import Principal from './principal'
import Produtos from './produtos'
import Marcas from './marcas'
import Grupos from './grupos'


export class Estoque extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedMenu: 'principal'
        }
        this.onMenuClick = this.onMenuClick.bind(this);
    }

    onMenuClick(menu){
        this.setState({selectedMenu: menu});
    }

    render(){
        return (
            <div className="container-fluid text-center">
                <div className="row content">
                    <EstoqueMenu selected={this.state.selectedMenu} onClick={this.onMenuClick} />
                    { this.state.selectedMenu == "principal" &&  <Principal />}
                    { this.state.selectedMenu == "produtos" &&  <Produtos />}
                    { this.state.selectedMenu == "marcas" &&  <Marcas />}
                    { this.state.selectedMenu == "grupos" &&  <Grupos />}
                </div>
            </div>
        );
    }
}