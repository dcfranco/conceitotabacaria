import React, { Component } from 'react'
import { Modal } from 'react-bootstrap';
import { ModalHeader, ModalContent, ModalContainer, HeaderLine, TextBodyLine, CustomBodyLine } from '../../template/Modal'

export class ModalProdutoEstoque extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.props.closeModal();
    }

    render(){
        return (null);
    }
}