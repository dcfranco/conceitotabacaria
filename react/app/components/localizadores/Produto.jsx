import React, {Component} from 'react'
import { Table, TableHeader, TableColHeader, TableBody, TableCol, TableLine, TableFooter } from '../template/Table'

export class LocalizadorProduto extends Component {
    constructor(props){
        super(props);
    }

    renderSmall(){
        return (
            <Table>
                <TableHeader>
                    <TableColHeader width='20%'>Código</TableColHeader>
                    <TableColHeader width='60%'>Descrição</TableColHeader>
                    <TableColHeader width='20%'>Preço</TableColHeader>
                </TableHeader>
                <TableBody>
                    <TableLine selected={true}>
                        <TableCol width='20%'>180121651561</TableCol>
                        <TableCol width='60%'>Mazzaia Menta</TableCol>
                        <TableCol width='20%'>R$15,00</TableCol>
                    </TableLine>
                    <TableLine>
                        <TableCol width='20%'>180121651561</TableCol>
                        <TableCol width='60%'>Mazzaia Menta</TableCol>
                        <TableCol width='20%'>R$15,00</TableCol>
                    </TableLine>
                </TableBody>
            </Table>
        )
    }

    renderFull(){
        return (
            <Table>
                <TableHeader>
                    <TableColHeader width='20%'>Código</TableColHeader>
                    <TableColHeader width='60%'>Descrição</TableColHeader>
                    <TableColHeader width='15%'>Estoque</TableColHeader>
                    <TableColHeader width='15%'>Preço</TableColHeader>
                </TableHeader>
                <TableBody>
                    <TableLine selected={true}>
                        <TableCol width='20%'>180121651561</TableCol>
                        <TableCol width='60%'>Mazzaia Menta</TableCol>
                        <TableCol width='15%' align='center'>15</TableCol>
                        <TableCol width='15%'>R$15,00</TableCol>
                    </TableLine>
                    <TableLine>
                        <TableCol width='20%'>180121651561</TableCol>
                        <TableCol width='60%'>Mazzaia Menta</TableCol>
                        <TableCol width='15%' align='center'>15</TableCol>
                        <TableCol width='15%'>R$15,00</TableCol>
                    </TableLine>
                    <TableLine>
                        <TableCol width='20%'>180121651561</TableCol>
                        <TableCol width='60%'>Mazzaia Menta</TableCol>
                        <TableCol width='15%' align='center'>15</TableCol>
                        <TableCol width='15%'>R$15,00</TableCol>
                    </TableLine>
                </TableBody>
            </Table>
        )
    }

    render(){
        return (
            <div className={`col-sm-${this.props.size}`} style={this.props.style}>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="input-group">
                            <span className="input-group-addon"><i className="glyphicon glyphicon-barcode"></i></span>
                            <input id="barras" type="text" className="form-control" name="barras" placeholder="Digite o nome ou bipe um produto" autoFocus />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        {this.props.mode == 'full' && this.renderFull()}
                        {this.props.mode == 'small' && this.renderSmall()}
                    </div>
                </div>
            </div>
        );
    }
}