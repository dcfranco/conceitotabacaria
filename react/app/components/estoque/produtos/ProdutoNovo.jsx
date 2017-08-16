import React, { Component } from 'react'
import { Modal } from 'react-bootstrap';
import { MEDIDAS } from '../../localizadores/Medidas'
import { ListaGrupos } from '../../localizadores/Grupos'
import { ListaMarcas } from '../../localizadores/Marcas'
import { ModalHeader, ModalContent, ModalContainer, HeaderLine, TextBodyLine, CustomBodyLine, MODAL_TYPE } from '../../template/Modal'

export class ModalProdutoNovo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            produto: {
                pro_descricao: "",
                pro_peso: 0,
                pro_medida: 1,
                pro_marca: 0
            },
            pro_grupo: 0
        }
        this.handleClick = this.handleClick.bind(this);
        this.produtoChange = this.produtoChange.bind(this);
        this.handleClickAdicionar = this.handleClickAdicionar.bind(this);
    }

    validateFields(){
        return new Promise((resolve, reject) => {
            let fields = ["pro_descricao", "pro_peso", "pro_marca"].filter((field) => !this.state.produto[field]);
            if(fields.length > 0)
                this.props.openMessageModal({
                    message: "Favor preencher todos os campos!",
                    type: MODAL_TYPE.ERROR,
                    onOk: reject
                });
            else resolve();
        });
    }

    handleClick(){
        return new Promise((resolve, reject) => {
            this.validateFields().then(() => {
                this.props.addProduto(this.state.produto);
                this.close();
                resolve();
            }, reject);
        });
    }

    handleClickAdicionar(){
        this.handleClick().then(
            () => this.props.openModalProdutoEstoque());
    }

    close(){
        this.setState({
            pro_grupo: 0,
            produto: {
                pro_descricao: '',
                pro_peso: 0,
                pro_medida: 1,
                pro_marca: 0
            }
        }, () => this.props.closeModal());
    }

    produtoChange(event) {
        const name = event.target.name;
        const value = event.currentTarget.value;
        this.setState({
            produto: {
                ...this.state.produto,
                [name]: value
            }
        });
    }

    render(){
        let medida = MEDIDAS.filter(medida => medida.codigo == this.state.produto.pro_medida)[0].sigla;

        return (
            <Modal bsSize="lg" show={this.props.opened} onHide={() => this.close()}>
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
                            <CustomBodyLine><input name="pro_descricao" type="text" className="input col_100p" value={this.state.produto.pro_descricao} onChange={this.produtoChange} /></CustomBodyLine>
                            <CustomBodyLine smallDescription={medida}><input name="pro_peso" type="number" className="input col_7" value={this.state.produto.pro_peso} onChange={this.produtoChange} /></CustomBodyLine>
                            <CustomBodyLine><select name="pro_medida" className="input col_100p" onChange={this.produtoChange} value={this.state.produto.pro_medida}>
                                { MEDIDAS.map((medida) => (<option key={medida.codigo} value={medida.codigo}>{medida.descricao}</option>)) }
                            </select></CustomBodyLine>
                            <hr />
                            <CustomBodyLine><ListaGrupos
                                selected={this.state.pro_grupo}
                                onChange={(value) => this.setState({pro_grupo: parseInt(value), produto: { ...this.state.produto, pro_marca: 0}})}
                            /></CustomBodyLine>
                            <CustomBodyLine><ListaMarcas 
                                gruCodigo={this.state.pro_grupo}
                                selected={this.state.produto.pro_marca}
                                onChange={(value) => this.setState({produto: { ...this.state.produto, pro_marca: parseInt(value)}})}
                            /></CustomBodyLine>
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