import React, {Component} from 'react'
import { Table, TableHeader, TableColHeader, TableBody, TableCol, TableLine, TableFooter } from '../template/Table'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import MarcasService from '../service/MarcasService'
import * as MarcasActions from '../actions/MarcasActions'

class LocalizadorMarcas extends Component {
    constructor(props) {
        super(props);
        this.onMarcaFilter = this.onMarcaFilter.bind(this);
    }

    async componentWillMount(){
        this.props.updateMarcas();
    }

    async onMarcaFilter(marca){
        this.props.updateMarcas(marca);
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
                                placeholder="Digite a marca ou bipe um produto"
                                onChange={(e) => this.onMarcaFilter(e.currentTarget.value)}
                                autoFocus
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <Table>
                            <TableHeader>
                                <TableColHeader width='20%'>Código</TableColHeader>
                                <TableColHeader width='52%'>Descrição</TableColHeader>
                                <TableColHeader width='15%'>Produtos</TableColHeader>
                                <TableColHeader width='15%'>Estoque</TableColHeader>
                            </TableHeader>
                            <TableBody>
                                { this.props.marcas.length > 0 ?
                                    this.props.marcas.map((marca, index) => (
                                        <TableLine key={marca.mar_codigo} selected={this.props.selectedIndex == index} onClick={() => this.props.selectMarca(index)}>
                                            <TableCol width='20%'>{marca.mar_codigo}</TableCol>
                                            <TableCol width='50%'>{marca.mar_descricao}</TableCol>
                                            <TableCol width='15%' align='center'>0</TableCol>
                                            <TableCol width='15%' align='center'>0</TableCol>
                                        </TableLine>
                                    ))
                                :
                                <TableLine>
                                    <TableCol colSpan={5}>Nenhuma marca encontrada</TableCol>
                                </TableLine>
                                }
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>
        );
    }
}

export class ListaMarcas extends Component {
    constructor(props){
        super(props);
        this.state = {
            marcas: []
        }
    }

    async componentWillMount(){
        let marcas = await MarcasService.getMarcas();
        this.setState({marcas: marcas});
    }

    render(){
        return (
            <select className="input col_100p" defaultValue={this.props.selectedIndex || 0}>
                {this.state.marcas.map(item => (<option key={item.mar_codigo} value={item.mar_codigo}>{item.mar_descricao}</option>))}
            </select>
        )
    }
}

function mapStateToProps(state){
    return {
        ...state.MarcasReducer
    }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(MarcasActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LocalizadorMarcas);