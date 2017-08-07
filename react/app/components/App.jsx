import React, { Component } from 'react'
import BlockUi from 'react-block-ui';
import 'react-block-ui/style.css';

import {Navigation} from './navigation/Navigation'
import {Estoque} from './estoque'
import {Footer} from './footer/Footer'

import {QuestionModal} from './modals/QuestionModal'

import GruposService from './service/GruposService'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as SystemActions from './actions/SystemActions'

class App extends Component {
    render(){
        return (
            <div>
                <Navigation exit={this.test} router={this.props.router} />
                <BlockUi tag="div" blocking={this.props.freezeScreen} className="blockUi">
                    {this.props.children}
                </BlockUi>
                <Footer />
                <QuestionModal questionModal={this.props.questionModal} closeQuestionModal={this.props.closeQuestionModal} />
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

export default connect(mapStateToProps, mapDispatchToProps)(App);