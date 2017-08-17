import React, { Component } from 'react'
import LocalizadorProduto from './Produto'
import { Table, TableHeader, TableColHeader, TableBody, TableCol, TableLine, TableFooter } from '../template/Table'

export class SelecionadorProduto extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={`col-sm-${this.props.size}`}>
                <LocalizadorProduto size="5" mode="small" style={{borderRight: 'solid 1px #e5e5e5'}} />
                <div className="col-sm-1" style={{ marginTop: '175px', textAlign: 'center' }}>
                    <div className="row">
                        <span className="direct-arrow"><i className="glyphicon glyphicon-circle-arrow-right"></i></span>
                    </div>
                    <div className="row">
                        <span className="direct-arrow"><i className="glyphicon glyphicon-circle-arrow-left"></i></span>
                    </div>
                </div>
                <div className="col-sm-6" style={{borderLeft: 'solid 1px #e5e5e5', height: '488px'}}>
                    <Table>
                        <TableHeader>
                            <TableColHeader width='20%'>Código</TableColHeader>
                            <TableColHeader width='45%'>Descrição</TableColHeader>
                            <TableColHeader width='18%'>Desconto</TableColHeader>
                        </TableHeader>
                        <TableBody>
                            <TableLine selected={true}>
                                <TableCol width='20%'>180121651561</TableCol>
                                <TableCol width='45%'>Adalia Mango Tango Ice 50g</TableCol>
                                <TableCol width='20%' align='center'><input type="text" className="input tcenter" value="R$0,00" /></TableCol>
                                <TableCol width='20%' align='center'>R$15,00</TableCol>
                            </TableLine>
                            <TableLine>
                                <TableCol width='20%'>180121651561</TableCol>
                                <TableCol width='45%'>Adalia Mango Tango Ice 50g</TableCol>
                                <TableCol width='20%' align='center'><input type="text" className="input tcenter" value="R$0,00" /></TableCol>
                                <TableCol width='20%' align='center'>R$15,00</TableCol>
                            </TableLine>
                        </TableBody>
                       <TableFooter>
                            <TableCol width='33%' align='left'><span style={{fontSize: '15px', marginRight: '3px'}}>Quantidade:</span> <span style={{fontSize: '15px', fontWeight: 'bold'}}>15 itens</span></TableCol>
                            <TableCol width='33%' align='center'><span style={{fontSize: '15px', marginRight: '3px'}}>Total de desconto:</span> <span style={{fontSize: '15px', fontWeight: 'bold'}}>R$0,00</span></TableCol>
                            <TableCol width='33%' align='right'><span style={{fontSize: '15px', marginright: '3px'}}>Total do produto:</span><span style={{fontSize: '15px', fontWeight: 'bold'}}>R$45,00</span></TableCol>
                        </TableFooter>
                    </Table>
                </div>
            </div>
        );
    }
}