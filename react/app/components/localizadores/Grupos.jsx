import React, {Component} from 'react'
import { Table, TableHeader, TableColHeader, TableBody, TableCol, TableLine, TableFooter } from '../template/Table'

export class LocalizadorGrupos extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={`col-sm-${this.props.size}`} style={this.props.style}>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="input-group">
                            <span className="input-group-addon"><i className="glyphicon glyphicon-barcode"></i></span>
                            <input id="barras" type="text" className="form-control" name="barras" placeholder="Digite o grupo ou bipe um produto" autoFocus />
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
                                <TableLine selected={true}>
                                    <TableCol width='20%'>1</TableCol>
                                    <TableCol width='40%'>Adalia</TableCol>
                                    <TableCol width='12%' align='center'>15</TableCol>
                                    <TableCol width='15%' align='center'>15</TableCol>
                                    <TableCol width='15%' align='center'>15</TableCol>
                                </TableLine>
                                <TableLine>
                                    <TableCol width='20%'>1</TableCol>
                                    <TableCol width='40%'>Adalia</TableCol>
                                    <TableCol width='12%' align='center'>15</TableCol>
                                    <TableCol width='15%' align='center'>15</TableCol>
                                    <TableCol width='15%' align='center'>15</TableCol>
                                </TableLine>
                                <TableLine>
                                    <TableCol width='20%'>1</TableCol>
                                    <TableCol width='40%'>Adalia</TableCol>
                                    <TableCol width='12%' align='center'>15</TableCol>
                                    <TableCol width='15%' align='center'>15</TableCol>
                                    <TableCol width='15%' align='center'>15</TableCol>
                                </TableLine>
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
            list: [
                {value: 0, caption: 'Carvão'},
                {value: 1, caption: 'Essência'},
                {value: 2, caption: 'Mangueira'},
                {value: 3, caption: 'Vaso'}
            ]
        }
    }

    render(){
        return (
            <select className="input col_100p" defaultValue={this.props.selectedIndex || 0}>
                {this.state.list.map(item => (<option key={item.value} value={item.value}>{item.caption}</option>))}
            </select>
        )
    }
}