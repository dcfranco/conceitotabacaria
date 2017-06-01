import React, { Component } from 'react'
import { Modal } from 'react-bootstrap';
import { LucroPercent } from '../../template/Page'
import { ModalHeader, ModalContent, ModalContainer, HeaderLine, TextBodyLine, CustomBodyLine } from '../../template/Modal'
import { SelecionadorProduto } from '../../localizadores/Selecionador'

export class ModalProdutoComposto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 0
        }
        this.description = [
            'Selecione os produtos abaixo e avance para preencher as informações',
            'Preencha as informações sobre o produto abaixo e confirme para criar'
        ]

        this.handleClick = this.handleClick.bind(this);
        this.handleClickVoltar = this.handleClickVoltar.bind(this);
    }

    handleClickVoltar(){
        this.setState({step: 0});
    }

    handleClick(){
        if(this.state.step == 0) this.setState({step: 1});
        if(this.state.step == 1) this.props.closeModal();
    }

    renderStep0(){
        return (
            <ModalContent removeMargin>
                <SelecionadorProduto size="12" />
            </ModalContent>
        );
    }
    
    renderStep1(){
        return (
            <ModalContent>
                <ModalContainer size="4">
                    <HeaderLine icon="fa fa-pencil" description="Código:" />
                    <HeaderLine icon="fa fa-pencil" description="Descrição:" />
                    <HeaderLine icon="fa fa-money" description="Desconto no preço:" />
                    <hr />
                    <HeaderLine icon="fa fa-money" description="Preço do produto:" />
                    <HeaderLine icon="fa fa-money" description="Preço do produto com desconto:" />
                    <hr />
                    <HeaderLine icon="fa fa-money" description="Lucro do produto:" />
                    <HeaderLine icon="fa fa-money" description="Lucro do produto com desconto:" />           
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

    render() {
        return (
            <Modal bsSize="lg" show={this.props.opened} onHide={() => this.props.closeModal()} className={this.state.step==0 ? "largeModal" : ""}>
                <Modal.Header closeButton>
                    <ModalHeader icon="fa fa-clone" title="Criar produto composto" description={this.description[this.state.step]} />
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