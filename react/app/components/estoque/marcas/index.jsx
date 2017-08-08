import React, {Component} from 'react'
import LocalizadorMarcas from '../../localizadores/Marcas'
import { ListaGrupos } from '../../localizadores/Grupos'
import { Page, PageHeader, PageContent, PageContainer, LucroPercent } from '../../template/Page'
import { Panel, PanelContainer, HeaderLine, TextBodyLine, CustomBodyLine, PanelFooter, PanelContent } from '../../template/Panel'
import { ModalMarcaNova } from './MarcaNova'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as MarcasActions from '../../actions/MarcasActions'
import * as SystemActions from '../../actions/SystemActions'

class Marcas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalNovaMarca: false
        }
        this.addMarca = this.addMarca.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.openModalNovaMarca = this.openModalNovaMarca.bind(this);
        this.closeModalNovaMarca = this.closeModalNovaMarca.bind(this);
    }

    openModalNovaMarca(){
        this.setState({modalNovaMarca: true});
    }
    closeModalNovaMarca(){
        this.setState({modalNovaMarca: false});
    }

    async handleClick(){

    }
    async addMarca(marca){
        this.props.blockUi();
        await this.props.addMarca(marca);
        this.props.unblockUi();
    }

    render(){
        return (
            <Page size="11">
                <PageHeader icon="fa fa-industry" title="Estoque - Marcas" description="Área para criar, alterar ou remover marcas" />
                <PageContent>
                    <LocalizadorMarcas size="6" />
                    <PageContainer size="6">
                        <Panel icon="fa fa-industry" title="Alterar marca">
                            <PanelContent>
                                <PanelContainer size="5">
                                    <HeaderLine icon="fa fa-pencil" description="Descrição:" />
                                    <HeaderLine icon="fa fa-object-group" description="Grupo:" />
                                    <hr />
                                    <HeaderLine icon="fa fa-calendar" description="Data de cadastro:" />
                                </PanelContainer>
                                <PanelContainer size="7" className="input-type">
                                    <CustomBodyLine><input type="text" className="input col_100p" value="" /></CustomBodyLine>
                                    <CustomBodyLine><ListaGrupos /></CustomBodyLine>
                                    <hr />
                                    <CustomBodyLine><input type="text" className="input col_10" value="" disabled /></CustomBodyLine>
                                </PanelContainer>
                            </PanelContent>
                            <PanelFooter>
                                <PanelContainer size="6" align="left">
                                    <button type="button" className="btn btn-link" style={{ width: '200px' }} onClick={() => this.openModalNovaMarca()}>Criar nova marca</button>
                                </PanelContainer>
                                <PanelContainer size="6" align="right">
                                    <button type="button" className="btn btn-danger" style={{ width: '200px' }} onClick={() => this.handleClick()}>Salvar</button>
                                </PanelContainer>
                            </PanelFooter>
                        </Panel>
                    </PageContainer>
                </PageContent>
                <ModalMarcaNova opened={this.state.modalNovaMarca} closeModal={this.closeModalNovaMarca} addMarca={this.addMarca}/>
            </Page>
        );
    }
}

function mapStateToProps(state){
    return {
        ...state.MarcasReducer
    }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({...MarcasActions, ...SystemActions}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Marcas);