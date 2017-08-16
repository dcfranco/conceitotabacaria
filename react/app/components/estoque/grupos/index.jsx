import React, {Component} from 'react'
import LocalizadorGrupos from '../../localizadores/Grupos'
import { MODAL_TYPE } from '../../template/Modal'
import { Page, PageHeader, PageContent, PageContainer, PageHeaderIcons, HeaderIcon, LucroPercent } from '../../template/Page'
import { Panel, PanelContainer, HeaderLine, TextBodyLine, CustomBodyLine, PanelFooter, PanelContent } from '../../template/Panel'
import { ModalGrupoNovo } from './GrupoNovo'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as GruposActions from '../../actions/GruposActions'
import * as SystemActions from '../../actions/SystemActions'

class Grupos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            grupo: {
                gru_codigo: 0,
                gru_descricao: '',
                gru_data_cadastro: null,
                gru_data_alteracao: null,
                gru_qntd_marcas: 0
            },
            modalNovoGrupo: false
        }
        this.addGrupo = this.addGrupo.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.removerGrupo = this.removerGrupo.bind(this);
        this.openModalNovoGrupo = this.openModalNovoGrupo.bind(this);
        this.closeModalNovoGrupo = this.closeModalNovoGrupo.bind(this);
    }

    componentWillReceiveProps(nextProps){
        let grupo = nextProps.grupos.filter((grupo) => grupo.gru_codigo == nextProps.selected)[0];
        this.setState({grupo});
    }

    openModalNovoGrupo(){
        this.setState({modalNovoGrupo: true});
    }
    closeModalNovoGrupo(){
        this.setState({modalNovoGrupo: false});
    }
    async handleClick(){
        this.props.blockUi();
        await this.props.saveGrupo(this.state.grupo);
        this.props.unblockUi();
    }
    async addGrupo(grupo){
        this.props.blockUi();
        await this.props.addGrupo(grupo);
        this.props.unblockUi();
    }
    async removerGrupo(){
        if(this.state.grupo.gru_qntd_marcas > 0){
            this.props.openModal({
                message: "Não é possível excluir o grupo pois o mesmo contém marcas cadastradas",
                type: MODAL_TYPE.ERROR
            });
        } else {
            this.props.blockUi();
            await this.props.removeGrupo(this.state.grupo);
            this.props.unblockUi();
        }
    }

    render(){
        let date = this.state.grupo ? new Date(this.state.grupo.gru_data_cadastro) : "";
        return (
            <Page size="11">
                <PageHeader icon="fa fa-object-group" title="Estoque - Grupos" description="Área para criar, alterar ou remover grupos" />
                <PageHeaderIcons>
                    <HeaderIcon icon="glyphicon glyphicon-plus" hint="Criar novo grupo" onClick={() => this.openModalNovoGrupo()} />
                </PageHeaderIcons>
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
                                    <CustomBodyLine><input
                                        type="text"
                                        className="input col_100p"
                                        disabled={!this.state.grupo}
                                        value={this.state.grupo ? this.state.grupo.gru_descricao : ""}
                                        onChange={(e) => this.setState({ grupo: { ...this.state.grupo, gru_descricao: e.currentTarget.value }})} /></CustomBodyLine>
                                    <hr />
                                    <CustomBodyLine><input type="text" className="input col_10" value={date.toLocaleString()} disabled /> </CustomBodyLine>
                                </PanelContainer>
                            </PanelContent>
                            <PanelFooter>
                                <PanelContainer size="6" align="left">
                                    <button type="button" className="btn btn-link" disabled={!this.state.grupo} style={{ width: '200px' }} onClick={() => this.props.openModal({
                                        message: "Confirma a exclusão do grupo?",
                                        type: MODAL_TYPE.QUESTION,
                                        onYes: () => this.removerGrupo()
                                    })}>Excluir grupo</button>
                                </PanelContainer>
                                <PanelContainer size="6" align="right">
                                    <button type="button" className="btn btn-danger" disabled={!this.state.grupo} style={{ width: '200px' }} onClick={() => this.handleClick()}>Salvar</button>
                                </PanelContainer>
                            </PanelFooter>
                        </Panel>
                    </PageContainer>
                </PageContent>
                <ModalGrupoNovo
                    opened={this.state.modalNovoGrupo}
                    closeModal={this.closeModalNovoGrupo}
                    addGrupo={this.addGrupo}
                    openMessageModal={this.props.openModal}
                    closeMessageModal={this.props.closeModal}
                />
            </Page>
        );
    }
}

function mapStateToProps(state){
    return {
        ...state.GruposReducer
    }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({...GruposActions, ...SystemActions}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Grupos);