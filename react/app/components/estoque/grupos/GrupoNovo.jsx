import React, { Component } from 'react'
import { Modal } from 'react-bootstrap';
import { ModalHeader, ModalContent, ModalContainer, HeaderLine, TextBodyLine, CustomBodyLine } from '../../template/Modal'

export class ModalGrupoNovo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gru_descricao: ''
        }
        this.handleClick = this.handleClick.bind(this);
    }

    async handleClick(){
        this.props.addGrupo(this.state);
        this.close();
    }

    close(){
        this.setState({ gru_descricao: '' },
            () => this.props.closeModal());
    }

    render(){
        return (
            <Modal bsSize="lg" show={this.props.opened} onHide={() => this.close()}>
                <Modal.Header closeButton>
                    <ModalHeader icon="fa fa-object-group" title="Criar novo grupo" description="Preencha as informações e salve para criar uma novo grupo" />
                </Modal.Header>
                <Modal.Body>
                    <ModalContent>
                        <ModalContainer size="5">
                            <HeaderLine icon="fa fa-pencil" description="Descrição:" />
                        </ModalContainer>
                        <ModalContainer size="7" className="input-type">
                            <CustomBodyLine><input type="text" className="input col_100p" onChange={({target}) => this.setState({gru_descricao: target.value})} value={this.state.gru_descricao} autoFocus /></CustomBodyLine>
                        </ModalContainer>
                    </ModalContent>
                </Modal.Body>
                <Modal.Footer>
                    <ModalContainer size="12" align="right">
                        <button type="button" className="btn btn-danger" onClick={() => this.handleClick()}>Salvar</button>
                    </ModalContainer>
                </Modal.Footer>
            </Modal>
        );
    }
}