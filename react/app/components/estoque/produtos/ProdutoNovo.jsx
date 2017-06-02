import React, { Component } from 'react'
import { Modal } from 'react-bootstrap';
import { ModalHeader, ModalContent, ModalContainer, HeaderLine, TextBodyLine, CustomBodyLine } from '../../template/Modal'

export class ModalProdutoNovo extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.handleClickAdicionar = this.handleClickAdicionar.bind(this);
    }

    handleClick(){
        this.props.closeModal();
    }

    handleClickAdicionar(){
        this.props.closeModal();
        this.props.openModalProdutoEstoque();
    }

    render(){
        return (
            <Modal bsSize="lg" show={this.props.opened} onHide={() => this.props.closeModal()}>
                <Modal.Header closeButton>
                    <ModalHeader icon="fa fa-shopping-basket" title="Criar novo produto" description="Preencha as informações e salve para adicionar o produto ao estoque" />
                </Modal.Header>
                <Modal.Body>
                    <ModalContent>
                        <ModalContainer size="5">
                            <HeaderLine icon="fa fa-pencil" description="Descrição:" />
                            <HeaderLine icon="fa fa-pencil" description="Peso:" />
                            <HeaderLine icon="fa fa-pencil" description="Medida:" />
                            <hr />
                            <HeaderLine icon="fa fa-object-group" description="Grupo:" />
                            <HeaderLine icon="fa fa-industry" description="Marca:" />
                        </ModalContainer>
                        <ModalContainer size="7" className="input-type">
                            <CustomBodyLine><input type="text" className="input col_100p" value="" /></CustomBodyLine>
                            <CustomBodyLine smallDescription="mg"><input type="text" className="input col_7" value="" /></CustomBodyLine>
                            <CustomBodyLine><select className="input col_100p">
                                <option value="">Miligramas (mg)</option>
                                <option value="">Gramas (g)</option>
                                <option value="">Mililitros (ml)</option>
                                <option value="">Litros (L)</option>
                                <option value="">Itens</option>
                            </select></CustomBodyLine>
                            <hr />
                            <CustomBodyLine><select className="input col_100p">
                                <option value="">Carvão</option>
                                <option value="">Essência</option>
                                <option value="">Mangueira</option>
                                <option value="">Vaso</option>
                                <option value="">Stem</option>
                                <option value="">Roxe</option>
                            </select></CustomBodyLine>
                            <CustomBodyLine><select className="input col_100p">
                                <option value="">Adalia</option>
                                <option value="">Mazzaia</option>
                                <option value="">Tangiers</option>
                                <option value="">Gold</option>
                                <option value="">Hookah Time</option>
                            </select></CustomBodyLine>
                        </ModalContainer>
                    </ModalContent>
                </Modal.Body>
                <Modal.Footer>
                    <ModalContainer size="6" align="left">
                        <button type="button" className="btn btn-link" onClick={() => this.handleClickAdicionar()}>Salvar e adicionar ao estoque</button>
                    </ModalContainer>
                    <ModalContainer size="6" align="right">
                        <button type="button" className="btn btn-danger" onClick={() => this.handleClick()}>Salvar</button>
                    </ModalContainer>
                </Modal.Footer>
            </Modal>
        );
    }
}