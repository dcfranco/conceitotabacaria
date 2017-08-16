import React, { Component } from 'react'
import { Modal } from 'react-bootstrap';
import { ListaGrupos } from '../../localizadores/Grupos'
import { ModalHeader, ModalContent, ModalContainer, HeaderLine, TextBodyLine, CustomBodyLine } from '../../template/Modal'

export class ModalMarcaNova extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mar_descricao: "",
            mar_grupo: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.validateFields().then(() => {
            this.props.addMarca(this.state);
            this.close();
        });
    }

    close(){
        this.setState({ mar_descricao: '', mar_grupo: 0 },
            () => this.props.closeModal());
    }

    validateFields(){
        return new Promise((resolve, reject) => {
            let fields = ["mar_descricao", "mar_grupo"].filter((field) => !this.state.produto[field]);
            if(fields.length > 0)
                this.props.openMessageModal({
                    message: "Favor preencher todos os campos!",
                    type: MODAL_TYPE.ERROR,
                    onOk: reject
                });
            else resolve();
        });
    }

    render(){
        return (
            <Modal bsSize="lg" show={this.props.opened} onHide={() => this.close()}>
                <Modal.Header closeButton>
                    <ModalHeader icon="fa fa-industry" title="Criar nova marca" description="Preencha as informações e salve para criar uma nova marca" />
                </Modal.Header>
                <Modal.Body>
                    <ModalContent>
                        <ModalContainer size="5">
                            <HeaderLine icon="fa fa-pencil" description="Descrição:" />
                            <HeaderLine icon="fa fa-object-group" description="Grupo:" />
                        </ModalContainer>
                        <ModalContainer size="7" className="input-type">
                            <CustomBodyLine><input type="text" className="input col_100p" value={this.state.mar_descricao} onChange={(e) => this.setState({ mar_descricao: e.currentTarget.value })} /></CustomBodyLine>
                            <CustomBodyLine><ListaGrupos selected={this.state.mar_grupo} onChange={(value) => this.setState({mar_grupo: parseInt(value)})} /></CustomBodyLine>
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