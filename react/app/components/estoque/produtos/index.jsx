import React, {Component} from 'react'
import { Panel, PanelContainer, HeaderLine, TextBodyLine, CustomBodyLine, PanelFooter, PanelContent } from '../../template/Panel'
import { Page, PageHeader, PageContent, PageContainer, PageHeaderIcons, HeaderIcon, LucroPercent } from '../../template/Page'
import { LocalizadorProduto } from '../../localizadores/Produto'
import { ModalProdutoComposto } from './ProdutoComposto'
import { ModalProdutoLote } from './ProdutoLote'

export class Produtos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalProdutoComposto: false,
            modalProdutoLote: false
        }

        this.openModalProdutoComposto = this.openModalProdutoComposto.bind(this);
        this.closeModalProdutoComposto = this.closeModalProdutoComposto.bind(this);
        this.openModalProdutoLote = this.openModalProdutoLote.bind(this);
        this.closeModalProdutoLote = this.closeModalProdutoLote.bind(this);
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

    render() {
        return (
            <Page size="11">
                <PageHeader icon="fa fa-shopping-basket" title="Estoque - Produtos" description="Área para criar, alterar ou remover produtos" />
                <PageHeaderIcons>
                    <HeaderIcon icon="fa fa-clone" hint="Criar produto composto" onClick={() => this.openModalProdutoComposto()} />
                    <HeaderIcon icon="fa fa-database" hint="Adicionar lote do produto ao estoque" onClick={() => this.openModalProdutoLote()}/>
                    <HeaderIcon icon="glyphicon glyphicon-plus" hint="Criar novo produto" />
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
                                    <hr />
                                    <CustomBodyLine smallDescription="unidades"><input type="text" className="input col_7" value="10" disabled /></CustomBodyLine>
                                    <CustomBodyLine><input type="text" className="input col_10" value="" disabled /></CustomBodyLine>
                                </PanelContainer>
                            </PanelContent>
                            <PanelFooter>
                                <PanelContainer size="6" align="left">
                                    <button type="button" className="btn btn-link" style={{ width: '200px' }}>Adicionar produto ao estoque</button>
                                </PanelContainer>
                                <PanelContainer size="6" align="right">
                                    <button type="button" className="btn btn-danger" style={{ width: '200px' }}>Salvar</button>
                                </PanelContainer>
                            </PanelFooter>
                        </Panel>
                    </PageContainer>
                </PageContent>
                <ModalProdutoComposto opened={this.state.modalProdutoComposto} closeModal={this.closeModalProdutoComposto} />
                <ModalProdutoLote opened={this.state.modalProdutoLote} closeModal={this.closeModalProdutoLote} />
            </Page>
        )
    }
}