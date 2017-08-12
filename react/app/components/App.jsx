import React, { Component } from 'react'
import BlockUi from 'react-block-ui';
import 'react-block-ui/style.css';

import {Navigation} from './navigation/Navigation'
import {Estoque} from './estoque'
import {Footer} from './footer/Footer'

import MessageModals from './modals/MessageModals'

import GruposService from './service/GruposService'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as SystemActions from './actions/SystemActions'

class App extends Component {
    render(){
        let newChildren = React.Children.map(this.props.children, (child => 
            React.cloneElement(child, {
                openModal: this.props.openModal, 
                closeModal: this.props.closeModal 
            })
        ));

        return (
            <div>
                <Navigation exit={this.test} router={this.props.router} />
                <BlockUi tag="div" blocking={this.props.freezeScreen} className="blockUi">
                    {newChildren}
                </BlockUi>
                <Footer />
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        ...state.SystemReducer
    }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(SystemActions, dispatch)
}

export default MessageModals(connect(mapStateToProps, mapDispatchToProps)(App));