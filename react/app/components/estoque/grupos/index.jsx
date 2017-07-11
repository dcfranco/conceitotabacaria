import React, {Component} from 'react'
import LocalizadorGrupos from '../../localizadores/Grupos'
import { Page, PageHeader, PageContent, PageContainer, LucroPercent } from '../../template/Page'
import { Panel, PanelContainer, HeaderLine, TextBodyLine, CustomBodyLine, PanelFooter, PanelContent } from '../../template/Panel'
import { ModalGrupoNovo } from './GrupoNovo'

export class Grupos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalNovoGrupo: false
        }
        this.openModalNovoGrupo = this.openModalNovoGrupo.bind(this);
        this.closeModalNovoGrupo = this.closeModalNovoGrupo.bind(this);
    }

    openModalNovoGrupo(){
        this.setState({modalNovoGrupo: true});
    }
    closeModalNovoGrupo(){
        this.setState({modalNovoGrupo: false});
    }

    render(){
        return (
            <Page size="11">
                <PageHeader icon="fa fa-object-group" title="Estoque - Grupos" description="Área para criar, alterar ou remover grupos" />
                <PageContent>
                    <LocalizadorGrupos size="6" />
                    <PageContainer size="6">
                        <Panel icon="fa fa-object-group" title="Alterar grupo">
                            <PanelContent>
                                <PanelContainer size="5">
                                    <HeaderLine icon="fa fa-pencil" description="Descrição:" />
                                    <hr />
                                    <HeaderLine icon="fa fa-calendar" description="Data de cadastro:" />
                                </PanelContainer>
                                <PanelContainer size="7" className="input-type">
                                    <CustomBodyLine><input type="text" className="input col_100p" value="" /></CustomBodyLine>
                                    <hr />
                                    <CustomBodyLine><input type="text" className="input col_10" value="" disabled /></CustomBodyLine>
                                </PanelContainer>
                            </PanelContent>
                            <PanelFooter>
                                <PanelContainer size="6" align="left">
                                    <button type="button" className="btn btn-link" style={{ width: '200px' }} onClick={() => this.openModalNovoGrupo()}>Criar novo grupo</button>
                                </PanelContainer>
                                <PanelContainer size="6" align="right">
                                    <button type="button" className="btn btn-danger" style={{ width: '200px' }} onClick={() => this.handleClick()}>Salvar</button>
                                </PanelContainer>
                            </PanelFooter>
                        </Panel>
                    </PageContainer>
                </PageContent>
                <ModalGrupoNovo opened={this.state.modalNovoGrupo} closeModal={this.closeModalNovoGrupo} />
            </Page>
        );
    }
}