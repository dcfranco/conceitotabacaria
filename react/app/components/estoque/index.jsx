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

    renderPage(){
        if(this.state.selectedMenu == "principal") return (<Principal />);
        if(this.state.selectedMenu == "produtos") return (<Produtos  openModal={this.props.openModal} closeModal={this.props.closeModal} />);
        if(this.state.selectedMenu == "marcas") return(<Marcas openModal={this.props.openModal} closeModal={this.props.closeModal} />)
        if(this.state.selectedMenu == "grupos") return (<Grupos  openModal={this.props.openModal} closeModal={this.props.closeModal} />);
    }

    render(){
        return (
            <div className="container-fluid text-center">
                <div className="row content">
                    <EstoqueMenu selected={this.state.selectedMenu} onClick={this.onMenuClick} />                    
                    { this.renderPage() }
                </div>
            </div>
        );
    }
}