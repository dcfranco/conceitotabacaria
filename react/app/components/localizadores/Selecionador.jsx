import React, { Component } from 'react'
import { LocalizadorProduto } from './Produto'

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
                    <div>
                        <table className="table" style={{marginBottom: '-1px'}}>
                            <thead>
                                <tr>
                                    <th style={{width:'20%'}}>Código</th>
                                    <th style={{width:'45%'}}>Descrição</th>
                                    <th style={{width:'18%'}}>Desconto</th>
                                    <th style={{width:'15%'}}>Preço Final</th>
                                </tr>
                            </thead>
                        </table>
                        <div className="scroll2">
                            <table className="table table-products">
                                <tbody>
                                    <tr className="selected">
                                        <td style={{width:'20%'}}>180121651561</td>
                                        <td style={{width:'45%'}}>Adalia Mango Tango Ice 50g</td>
                                        <td style={{width:'20%', textAlign: 'center'}}><input type="text" className="input tcenter" value="R$0,00" /></td>
                                        <td style={{width:'15%', textAlign: 'center'}}>R$15,00</td>
                                    </tr>
                                    <tr>
                                        <td style={{width:'20%'}}>180121651561</td>
                                        <td style={{width:'45%'}}>Adalia Mango Tango Ice 50g</td>
                                        <td style={{width:'20%', textAlign: 'center'}}><input type="text" className="input tcenter" value="R$0,00" /></td>
                                        <td style={{width:'15%', textAlign: 'center'}}>R$15,00</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <table className="table" style={{marginTop: '-4px', marginBottom: '-5px'}}>
                            <tfoot>
                                <tr style={{background: '#f6f5f5'}}>
                                    <td style={{width:'33%', textAlign: 'left'}}><span style={{fontSize: '15px', marginRight: '3px'}}>Quantidade:</span> <span style={{fontSize: '15px', fontWeight: 'bold'}}>15 itens</span></td>
                                    <td style={{width:'33%', textAlign: 'center'}}><span style={{fontSize: '15px', marginRight: '3px'}}>Total de desconto:</span> <span style={{fontSize: '15px', fontWeight: 'bold'}}>R$0,00</span></td>
                                    <td style={{width:'33%', textAlign: 'right'}}><span style={{fontSize: '15px', marginright: '3px'}}>Total do produto:</span><span style={{fontSize: '15px', fontWeight: 'bold'}}>R$45,00</span></td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}