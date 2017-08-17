import React, {Component} from 'react'
import { Panel, PanelContainer, HeaderLine, TextBodyLine, CustomBodyLine, PanelFooter, PanelContent } from '../../template/Panel'
import { Page, PageHeader, PageContent, PageContainer, PageHeaderIcons, HeaderIcon, LucroPercent } from '../../template/Page'
import LocalizadorProduto from '../../localizadores/Produto'
import { ModalProdutoComposto } from './ProdutoComposto'
import { ModalProdutoLote } from './ProdutoLote'
import { ModalProdutoNovo } from './ProdutoNovo'
import { ModalProdutoEstoque } from './ProdutoEstoque'
import { ListaGrupos } from '../../localizadores/Grupos'
import { ListaMarcas } from '../../localizadores/Marcas'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ProdutosActions from '../../actions/ProdutosActions'
import * as SystemActions from '../../actions/SystemActions'

class Produtos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            produto: {
                pro_codigo: 0,
                pro_descricao: "",
                pro_peso: 0,
                pro_medida: 1,
                pro_marca: 0,
                pro_data_alteracao: null,
                pro_data_cadastro: null,
                pro_qntd_estoque: 0
            },

            modalProdutoComposto: false,
            modalProdutoLote: false,
            modalProdutoNovo: false,
            modalProdutoEstoque: false
        }

        this.addProduto = this.addProduto.bind(this);
        this.addEstoque = this.addEstoque.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.removerProduto = this.removerProduto.bind(this);
        this.openModalProdutoComposto = this.openModalProdutoComposto.bind(this);
        this.closeModalProdutoComposto = this.closeModalProdutoComposto.bind(this);
        this.openModalProdutoLote = this.openModalProdutoLote.bind(this);
        this.closeModalProdutoLote = this.closeModalProdutoLote.bind(this);
        this.openModalProdutoNovo = this.openModalProdutoNovo.bind(this);
        this.closeModalProdutoNovo = this.closeModalProdutoNovo.bind(this);
        this.openModalProdutoEstoque = this.openModalProdutoEstoque.bind(this);
        this.closeModalProdutoEstoque = this.closeModalProdutoEstoque.bind(this);
    }

    componentWillReceiveProps(nextProps){
        let produto = nextProps.produtos.filter((produto) => produto.pro_codigo == nextProps.selected)[0];
        this.setState({ produto });
    }

    openModalProdutoComposto(){
        this.setState({modalProdutoComposto: true});
    }
    closeModalProdutoComposto(){
        this.setState({modalProdutoComposto: false});
    }

    openModalProdutoLote(){
        this.setState({modalProdutoLote: true});
    }
    closeModalProdutoLote(){
        this.setState({modalProdutoLote: false});
    }

    openModalProdutoNovo(){
        this.setState({modalProdutoNovo: true});
    }
    closeModalProdutoNovo(){
        this.setState({modalProdutoNovo: false});
    }

    openModalProdutoEstoque(){
        this.setState({modalProdutoEstoque: true});
    }
    closeModalProdutoEstoque(){
        this.setState({modalProdutoEstoque: false});
    }

    async addProduto(produto){
        this.props.blockUi();
        await this.props.addProduto(produto);
        this.props.unblockUi();
    }
    async addEstoque(estoque){
        this.props.blockUi();
        await this.props.addEstoque(estoque);
        this.props.unblockUi();
    }
    async handleClick(){

    }
    async removerProduto(){

    }

    render() {
        return (
            <Page size="11">
                <PageHeader icon="fa fa-shopping-basket" title="Estoque - Produtos" description="Área para criar, alterar ou remover produtos" />
                <PageHeaderIcons>
                    <HeaderIcon icon="fa fa-clone" hint="Criar produto composto" onClick={() => this.openModalProdutoComposto()} />
                    <HeaderIcon icon="fa fa-database" hint="Adicionar lote do produto ao estoque" onClick={() => this.openModalProdutoLote()}/>
                    <HeaderIcon icon="glyphicon glyphicon-plus" hint="Criar novo produto" onClick={() => this.openModalProdutoNovo()} />
                </PageHeaderIcons>
                <PageContent>
                    <LocalizadorProduto size="6" mode="full" />
                    <PageContainer size="6">
                        <Panel icon="fa fa-archive" title="Estoque até o momento">
                            <PanelContent>
                                <PanelContainer size="5">
                                    <HeaderLine icon="fa fa-pencil" description="Descrição:" />
                                    <HeaderLine icon="fa fa-pencil" description="Peso:" />
                                    <HeaderLine icon="fa fa-pencil" description="Medida:" />
                                    <hr />
                                    <HeaderLine icon="fa fa-money" description="Média de preço de compra:" />
                                    <HeaderLine icon="fa fa-money" description="Média de preço de venda:" />
                                    <HeaderLine icon="fa fa-money" description="Média de lucro:" />
                                    <hr />
                                    <HeaderLine icon="fa fa-object-group" description="Grupo:" />
                                    <HeaderLine icon="fa fa-industry" description="Marca:" />
                                    <hr />
                                    <HeaderLine icon="fa fa-database" description="Em estoque:" />
                                    <HeaderLine icon="fa fa-calendar" description="Data de cadastro:" />
                                </PanelContainer>
                                <PanelContainer size="7" className="input-type">
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
                                    <CustomBodyLine><input type="text" className="input col_7" value="R$0,00" /></CustomBodyLine>
                                    <CustomBodyLine><input type="text" className="input col_7" value="R$0,00" /></CustomBodyLine>
                                    <CustomBodyLine><input type="text" className="input col_7" value="R$0,00" disabled /><LucroPercent value={0} /></CustomBodyLine>
                                    <hr />
                                    <CustomBodyLine><ListaGrupos /></CustomBodyLine>
                                    <CustomBodyLine><ListaMarcas /></CustomBodyLine>
                                    <hr />
                                    <CustomBodyLine smallDescription="unidades"><input type="text" className="input col_7" value="10" disabled /></CustomBodyLine>
                                    <CustomBodyLine><input type="text" className="input col_10" value="" disabled /></CustomBodyLine>
                                </PanelContainer>
                            </PanelContent>
                            <PanelFooter>
                                <PanelContainer size="6" align="left">
                                    <button type="button" className="btn btn-link" style={{ width: '200px' }} onClick={() => this.openModalProdutoEstoque()}>Adicionar produto ao estoque</button>
                                </PanelContainer>
                                <PanelContainer size="6" align="right">
                                    <button type="button" className="btn btn-danger" style={{ width: '200px' }} onClick={() => this.handleClick()}>Salvar</button>
                                </PanelContainer>
                            </PanelFooter>
                        </Panel>
                    </PageContainer>
                </PageContent>
                <ModalProdutoComposto
                    opened={this.state.modalProdutoComposto}
                    closeModal={this.closeModalProdutoComposto}
                    openMessageModal={this.props.openModal}
                    closeMessageModal={this.props.closeModal}
                />
                <ModalProdutoLote
                    opened={this.state.modalProdutoLote}
                    closeModal={this.closeModalProdutoLote}
                    openMessageModal={this.props.openModal}
                    closeMessageModal={this.props.closeModal}
                />
                <ModalProdutoNovo
                    opened={this.state.modalProdutoNovo}
                    closeModal={this.closeModalProdutoNovo}
                    openModalProdutoEstoque={this.openModalProdutoEstoque}
                    addProduto={this.addProduto}
                    openMessageModal={this.props.openModal}
                    closeMessageModal={this.props.closeModal}
                />
                <ModalProdutoEstoque
                    opened={this.state.modalProdutoEstoque}
                    closeModal={this.closeModalProdutoEstoque}
                    openMessageModal={this.props.openModal}
                    addEstoque={this.addEstoque}
                    closeMessageModal={this.props.closeModal}
                    produtoCodigo={this.state.produto && this.state.produto.pro_codigo}
                />
            </Page>
        )
    }
}

function mapStateToProps(state){
    return {
        ...state.ProdutosReducer
    }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({...ProdutosActions, ...SystemActions}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Produtos);