import React, { Component } from 'react'
import { Modal } from 'react-bootstrap';
import { LucroPercent } from '../../template/Page'
import { ModalHeader, ModalContent, ModalContainer, HeaderLine, TextBodyLine, CustomBodyLine } from '../../template/Modal'

export class ModalProdutoLote extends Component {
    constructor(props) {
        super(props);
         this.state = {
            step: 0
        }
        this.description = [
            'Preencha as informações abaixo e avance para validar os itens',
            'Verifique se as informações estão corretas e confirme para cadastrar os produtos'
        ]

        this.handleClick = this.handleClick.bind(this);
        this.handleClickVoltar = this.handleClickVoltar.bind(this);        
    }
    
    renderStep0(){
        return (
            <ModalContent>
                <ModalContainer size="4">
                    <HeaderLine icon="fa fa-pencil" description="Código do lote:" />
                    <HeaderLine icon="fa fa-pencil" description="Quantidade de unidades:" />
                    <hr />
                    <HeaderLine icon="fa fa-object-group" description="Grupo:" />
                    <HeaderLine icon="fa fa-industry" description="Marca:" />
                    <HeaderLine icon="fa fa-shopping-basket" description="Produto:" />
                    <hr />
                    <HeaderLine icon="fa fa-money" description="Preço de compra do lote:" />
                    <HeaderLine icon="fa fa-money" description="Preço de venda por unidade:" />
                    <hr />
                    <HeaderLine icon="fa fa-money" description="Preço de compra por unidade:" />
                    <HeaderLine icon="fa fa-money" description="Lucro por unidade:" />
                    <HeaderLine icon="fa fa-money" description="Lucro total:" />
                </ModalContainer>
                <ModalContainer size="7" className="input-type">
                    <CustomBodyLine><input type="text" className="input col_9" value="" /></CustomBodyLine>
                    <CustomBodyLine><input type="text" className="input col_100p" value="" /></CustomBodyLine>
                    <CustomBodyLine><input type="text" className="input col_7" value="R$0,00" /><LucroPercent value="0" /></CustomBodyLine>
                    <hr />
                    <CustomBodyLine><input type="text" className="input col_7" value="R$0,00" disabled /></CustomBodyLine>
                    <CustomBodyLine><input type="text" className="input col_7" value="R$0,00" disabled /></CustomBodyLine>
                    <hr />
                    <CustomBodyLine><input type="text" className="input col_7" value="R$0,00" disabled /><LucroPercent value="0" /></CustomBodyLine>
                    <CustomBodyLine><input type="text" className="input col_7" value="R$0,00" disabled /><LucroPercent value="0" /></CustomBodyLine>
                </ModalContainer>
            </ModalContent>
        );
    }

    render(){
        return (
            <Modal bsSize="lg" show={this.props.opened} onHide={() => this.props.closeModal()}>
                <Modal.Header closeButton>
                    <ModalHeader icon="fa fa-database" title="Adicionar produtos por lote" description={this.description[this.state.step]} />
                </Modal.Header>
                <Modal.Body>
                    { this.state.step == 0 && this.renderStep0() }
                    { this.state.step == 1 && this.renderStep1() }
                </Modal.Body>
                <Modal.Footer>
                    <ModalContainer size="6" align="left">
                        { this.state.step == 1 && <button type="button" className="btn btn-link" onClick={() => this.handleClickVoltar()}>Voltar</button> }
                    </ModalContainer>
                    <ModalContainer size="6" align="right">
                        <button type="button" className="btn btn-danger" onClick={() => this.handleClick()}>{this.state.step == 0 ? "Avançar" : "Confirmar"}</button>
                    </ModalContainer>
                </Modal.Footer>
            </Modal>
        );

    }
}