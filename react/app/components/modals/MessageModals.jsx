import React, { Component } from 'react'
import { Modal } from 'react-bootstrap';
import { ModalHeader, ModalContent, ModalContainer, TextBodyLine, MODAL_TYPE } from '../template/Modal'

const MODAL_TITLE = [
    { icon: 'fa fa-question-circle', title: 'Questão' },
    { icon: 'fa fa-check-circle-o', title: 'Sucesso' },
    { icon: 'fa fa-exclamation-triangle', title: 'Alerta' },
    { icon: 'fa fa-ban', title: 'Erro' }
]

const MessageModals = (Children) => class extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalOpened: false,
            modalType: MODAL_TYPE.QUESTION,
            modalMessage: ''
        }

        this.onYes = null;
        this.onNo = null;
        this.onOk = null;
        
        this.handleYes = this.handleYes.bind(this);
        this.handleNo = this.handleNo.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    handleYes(){
        this.closeModal();
        this.onYes && this.onYes();
    }

    handleNo(){
        this.closeModal();
        this.onNo && this.onNo();        
    }

    handleOk(){
        this.closeModal();
        this.onOk && this.onOk();        
    }

    closeModal(){
        this.setState({ modalOpened: false });
    }

    openModal({message, type, onYes, onNo, onOk}){
        this.onNo = onNo;
        this.onYes = onYes;
        this.onOk = onOk;

        this.setState({ 
            modalOpened: true, 
            modalType: type,
            modalMessage: message
        });
    }

    render(){
        return (
            <div>
            <Children {...this.props} openModal={this.openModal} closeModal={this.closeModal} />
            <Modal bsSize="sm" show={this.state.modalOpened} onHide={() => this.closeModal()}>
                <Modal.Header closeButton>
                    <ModalHeader icon={MODAL_TITLE[this.state.modalType].icon} title={MODAL_TITLE[this.state.modalType].title} description="" />
                </Modal.Header>
                <Modal.Body>
                    <ModalContent>
                        <ModalContainer size="12">
                            <TextBodyLine description={this.state.modalMessage} />
                        </ModalContainer>
                    </ModalContent>
                </Modal.Body>
                { this.state.modalType == MODAL_TYPE.QUESTION ?
                    <Modal.Footer>                    
                        <ModalContainer size="6" align="left">
                            <button type="button" className="btn btn-link" onClick={() => this.handleNo()}>Não</button>
                        </ModalContainer>
                        <ModalContainer size="6" align="right">
                            <button type="button" className="btn btn-danger" onClick={() => this.handleYes()}>Sim</button>
                        </ModalContainer>
                    </Modal.Footer>
                :
                    <Modal.Footer>
                        <ModalContainer size="12" align="center">
                            <button type="button" className="btn btn-danger" onClick={() => this.handleOk()}>Ok</button>
                        </ModalContainer>
                    </Modal.Footer>
                }
                
            </Modal>
            </div>
        );
    }
}

export default MessageModals;