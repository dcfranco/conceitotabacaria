import React, { Component } from 'react'
import { Modal } from 'react-bootstrap';
import { ModalHeader, ModalContent, ModalContainer, TextBodyLine } from '../template/Modal'

export class QuestionModal extends Component {
    constructor(props) {
        super(props);

        this.handleYes = this.handleYes.bind(this);
        this.handleNo = this.handleNo.bind(this);
        this.close = this.close.bind(this);
    }

    handleYes(){
        this.props.questionModal.onYes();
        this.close();
    }

    handleNo(){
        this.props.questionModal.onNo();
        this.close();
    }

    close(){
        this.props.closeQuestionModal();
    }

    render(){
        return (
            <Modal bsSize="sm" show={this.props.questionModal.opened} onHide={() => this.close()}>
                <Modal.Header closeButton>
                    <ModalHeader icon="fa fa-question-circle" title="Questão" description="" />
                </Modal.Header>
                <Modal.Body>
                    <ModalContent>
                        <ModalContainer size="12">
                            <TextBodyLine description={this.props.questionModal.question} />
                        </ModalContainer>
                    </ModalContent>
                </Modal.Body>
                <Modal.Footer>
                    <ModalContainer size="6" align="left">
                        <button type="button" className="btn btn-link" onClick={() => this.handleNo()}>Não</button>
                    </ModalContainer>
                    <ModalContainer size="6" align="right">
                        <button type="button" className="btn btn-danger" onClick={() => this.handleYes()}>Sim</button>
                    </ModalContainer>
                </Modal.Footer>
            </Modal>
        );
    }
}