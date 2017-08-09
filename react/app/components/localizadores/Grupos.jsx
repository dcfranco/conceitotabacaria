import React, {Component} from 'react'
import { Table, TableHeader, TableColHeader, TableBody, TableCol, TableLine, TableFooter } from '../template/Table'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import GruposService from '../service/GruposService'
import * as GruposActions from '../actions/GruposActions'

class LocalizadorGrupos extends Component {
    constructor(props) {
        super(props);
        this.onGrupoFilter = this.onGrupoFilter.bind(this);
    }

    async componentWillMount(){
        this.props.updateGrupos();
    }

    async onGrupoFilter(grupo){
        this.props.updateGrupos(grupo);
    }

    render() {
        return (
            <div className={`col-sm-${this.props.size}`} style={this.props.style}>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="input-group">
                            <span className="input-group-addon"><i className="glyphicon glyphicon-barcode"></i></span>
                            <input 
                                id="barras"
                                type="text"
                                className="form-control"
                                name="barras"
                                placeholder="Digite o grupo ou bipe um produto"
                                onChange={(e) => this.onGrupoFilter(e.currentTarget.value)}
                                autoFocus />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <Table>
                            <TableHeader>
                                <TableColHeader width='20%'>Código</TableColHeader>
                                <TableColHeader width='40%'>Descrição</TableColHeader>
                                <TableColHeader width='12%'>Marcas</TableColHeader>
                                <TableColHeader width='15%'>Produtos</TableColHeader>
                                <TableColHeader width='15%'>Estoque</TableColHeader>
                            </TableHeader>
                            <TableBody>
                                { this.props.grupos.length > 0 ?
                                    this.props.grupos.map((grupo, index) => (
                                        <TableLine key={grupo.gru_codigo} selected={this.props.selectedIndex == index} onClick={() => this.props.selectGrupo(index)}>
                                            <TableCol width='20%'>{grupo.gru_codigo}</TableCol>
                                            <TableCol width='40%'>{grupo.gru_descricao}</TableCol>
                                            <TableCol width='12%' align='center'>0</TableCol>
                                            <TableCol width='15%' align='center'>0</TableCol>
                                            <TableCol width='15%' align='center'>0</TableCol>
                                        </TableLine>
                                    ))
                                :
                                <TableLine>
                                    <TableCol colSpan={5}>Nenhum grupo encontrado</TableCol>
                                </TableLine> }
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>
        );
    }
}

export class ListaGrupos extends Component {
    constructor(props){
        super(props);
        this.state = {
            grupos: []
        }
        this.onChange = this.onChange.bind(this);
    }

    async componentWillMount(){
        let grupos = await GruposService.getGrupos();
        this.setState({grupos: grupos});
    }

    onChange(value){
        if(value >= 0)
            this.props.onChange(value);
    }

    render(){
        return (
            <select disabled={this.props.disabled} className="input col_100p" value={this.props.selectedIndex || ''} onChange={(e) => this.onChange(e.currentTarget.value)}>
                {!this.props.selectedIndex && <option value={-1}></option>}
                {this.state.grupos.map(item => (<option key={item.gru_codigo} value={item.gru_codigo}>{item.gru_descricao}</option>))}
            </select>
        )
    }
}

function mapStateToProps(state){
    return {
        ...state.GruposReducer
    }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(GruposActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LocalizadorGrupos);