import React, { Component } from 'react'
import { Modal } from 'react-bootstrap';
import { ListaProdutos } from '../../localizadores/Produto'
import { LucroPercent } from '../../template/Page'
import { ModalHeader, ModalContent, ModalContainer, HeaderLine, TextBodyLine, CustomBodyLine } from '../../template/Modal'

export class ModalProdutoEstoque extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.handleClickAdicionar = this.handleClickAdicionar.bind(this);
    }

    handleClickAdicionar(){
        
    }

    handleClick(){
        this.props.closeModal();
    }

    render(){
        return (
            <Modal bsSize="lg" show={this.props.opened} onHide={() => this.props.closeModal()}>
                 <Modal.Header closeButton>
                    <ModalHeader icon="fa fa-shopping-basket" title="Adicionar produto ao estoque" description="Preencha as informações e salve para criar um novo produto" />
                </Modal.Header>
                <Modal.Body>
                    <ModalContent>
                        <ModalContainer size="4">
                            <HeaderLine icon="fa fa-pencil" description="Código:" />
                            <hr />
                            <HeaderLine icon="fa fa-shopping-basket" description="Produto:" />
                            <hr />
                            <HeaderLine icon="fa fa-money" description="Preço de compra:" />
                            <HeaderLine icon="fa fa-money" description="Preço de venda:" />
                            <HeaderLine icon="fa fa-money" description="Lucro:" />
                        </ModalContainer>
                        <ModalContainer size="7" className="input-type">
                            <CustomBodyLine><input type="text" className="input col_9" value="" /></CustomBodyLine>
                            <hr />
                            <CustomBodyLine><ListaProdutos /></CustomBodyLine>
                            <hr />
                            <CustomBodyLine><input type="text" className="input col_7" value="R$0,00" /></CustomBodyLine>
                            <CustomBodyLine><input type="text" className="input col_7" value="R$0,00" /></CustomBodyLine>
                            <CustomBodyLine><input type="text" className="input col_7" value="R$0,00" disabled /><LucroPercent value="0" /></CustomBodyLine>
                        </ModalContainer>
                    </ModalContent>
                </Modal.Body>
                <Modal.Footer>
                    <ModalContainer size="6" align="left">
                        <button type="button" className="btn btn-link" onClick={() => this.handleClickAdicionar()}>Salvar e adicionar outro</button>
                    </ModalContainer>
                    <ModalContainer size="6" align="right">
                        <button type="button" className="btn btn-danger" onClick={() => this.handleClick()}>Salvar</button>
                    </ModalContainer>
                </Modal.Footer>
            </Modal>
        );
    }
}