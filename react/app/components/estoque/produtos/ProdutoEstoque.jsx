import React, { Component } from 'react'
import { Modal } from 'react-bootstrap';
import SimpleCurrencyInput from 'react-simple-currency'
import { ListaProdutos } from '../../localizadores/Produto'
import { LucroPercent } from '../../template/Page'
import { ModalHeader, ModalContent, ModalContainer, HeaderLine, TextBodyLine, CustomBodyLine, MODAL_TYPE } from '../../template/Modal'

export class ModalProdutoEstoque extends Component {
    constructor(props) {
        super(props);
        this.state = {
            estoque: {
                est_cod_barras: "",
                est_preco_compra: 0,
                est_preco_venda: 0,
                est_produto: 0
            },
            produto: {
                pro_codigo: 0,
                pro_descricao: "",
                pro_peso: 0,
                pro_medida: 1,
                pro_marca: 0,
                pro_data_alteracao: null,
                pro_data_cadastro: null,
                pro_qntd_estoque: 0
            }
        }
        
        this.handleClick = this.handleClick.bind(this);
        this.handleClickAdicionar = this.handleClickAdicionar.bind(this);
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.produto && this.props.produto.pro_codigo != nextProps.produto.pro_codigo)
            this.setState({
                estoque: {
                    ...this.state.estoque,
                    est_produto: nextProps.produto.pro_codigo
                },
                produto: nextProps.produto
            });
    }

    validateFields(){
        return new Promise((resolve, reject) => {
            let fields = ["est_cod_barras", "est_preco_compra", "est_preco_venda"].filter((field) => !this.state.estoque[field]);
            if(fields.length > 0)
                this.props.openMessageModal({
                    message: "Favor preencher todos os campos!",
                    type: MODAL_TYPE.ERROR,
                    onOk: reject
                });
            else resolve();
        });
    }

    handleClickAdicionar(){
        this.handleClick().then(
            () => this.setState({
                estoque: {
                    est_cod_barras: "",
                    est_preco_compra: 0,
                    est_preco_venda: 0
                }
            }, () => document.getElementById("est_cod_barras").focus())
        );
    }

    handleClick(){
        return new Promise((resolve, reject) => {
            this.validateFields().then(() => {
                this.props.addEstoque(this.state.estoque);
                this.close();
                resolve();
            }, reject);
        });
    }

    close(){
        this.setState({
            estoque: {
                est_cod_barras: "",
                est_preco_compra: 0,
                est_preco_venda: 0,
                est_produto: 0
            }
        }, () => this.props.closeModal());
    }

    render(){
        let {est_preco_venda: preco_venda, est_preco_compra: preco_compra} = this.state.estoque;

        let lucro = preco_venda && preco_compra ? (this.state.estoque.est_preco_venda - this.state.estoque.est_preco_compra) : 0;
        let lucroPercent = (lucro ? (lucro / this.state.estoque.est_preco_compra) * 100 : 0).toFixed(1);

        return (
            <Modal bsSize="lg" show={this.props.opened} onHide={() => this.close()}>
                 <Modal.Header closeButton>
                    <ModalHeader icon="fa fa-shopping-basket" title="Adicionar produto ao estoque" description="Preencha as informações e salve para criar um novo produto" />
                </Modal.Header>
                <Modal.Body>
                    <ModalContent>
                        <ModalContainer size="4">
                            <HeaderLine icon="fa fa-pencil" description="Código de barras:" />
                            <hr />
                            <HeaderLine icon="fa fa-shopping-basket" description="Produto:" />
                            <hr />
                            <HeaderLine icon="fa fa-money" description="Preço de compra:" />
                            <HeaderLine icon="fa fa-money" description="Preço de venda:" />
                            <HeaderLine icon="fa fa-money" description="Lucro:" />
                        </ModalContainer>
                        <ModalContainer size="7" className="input-type">
                            <CustomBodyLine><input
                                autoFocus
                                type="text"
                                className="input col_12"
                                name="est_cod_barras"
                                value={this.state.estoque.est_cod_barras}
                                onChange={({currentTarget: target}) => (parseInt(target.value) || target.value == "") && this.setState({
                                    estoque: {
                                        ...this.state.estoque,
                                        est_cod_barras: target.value
                                    }
                                })}/></CustomBodyLine>
                            <hr />
                            <CustomBodyLine><ListaProdutos 
                                marCodigo={this.state.produto.pro_marca}
                                selected={this.state.produto.pro_codigo}
                                disabled={true}
                            /></CustomBodyLine>
                            <hr />
                            <CustomBodyLine><SimpleCurrencyInput
                                className="input col_7"
                                value={this.state.estoque.est_preco_compra}
                                precision={2}
                                separator=','
                                delimiter='.'
                                unit='R$'
                                onInputChange={(value) => this.setState({
                                    estoque: {
                                        ...this.state.estoque,
                                        est_preco_compra: value
                                    }
                                })} 
                            /></CustomBodyLine>
                            <CustomBodyLine><SimpleCurrencyInput
                                className="input col_7"
                                value={this.state.estoque.est_preco_venda}
                                precision={2}
                                separator=','
                                delimiter='.'
                                unit='R$'
                                onInputChange={(value) => this.setState({
                                    estoque: {
                                        ...this.state.estoque,
                                        est_preco_venda: value
                                    }
                                })} 
                            /></CustomBodyLine>
                            <CustomBodyLine><SimpleCurrencyInput
                                className="input col_7"
                                value={lucro}
                                precision={2}
                                separator=','
                                delimiter='.'
                                unit='R$'
                                disabled={true}
                            /><LucroPercent value={lucroPercent} /></CustomBodyLine>
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