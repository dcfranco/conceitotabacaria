import React, {Component} from 'react'

export class LocalizadorProduto extends Component {
    constructor(props){
        super(props);
    }

    renderMin(){
        return (
            <div>
                <table className="table" style={{marginBottom: '-1px'}}>
                    <thead>
                        <tr>
                            <th style={{width:'20%'}}>Código</th>
                            <th style={{width:'60%'}}>Descrição</th>
                            <th style={{width:'20%'}}>Preço</th>
                        </tr>
                    </thead>
                </table>
                <div className="scroll2">
                    <table className="table table-products">
                        <tbody>
                            <tr className="selected">
                                <td style={{width:'20%'}}>180121651561</td>
                                <td style={{width:'60%'}}>Mazzaia Menta</td>
                                <td style={{width:'20%'}}>R$15,00</td>
                            </tr>
                            <tr>
                                <td style={{width:'20%'}}>180121651561</td>
                                <td style={{width:'60%'}}>Mazzaia Menta</td>
                                <td style={{width:'20%'}}>R$15,00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

    renderFull(){
        return (
            <div>
                <table className="table" style={{ marginBottom: '-1px'}}>
                    <thead>
                        <tr>
                            <th style={{width:'20%'}}>Código</th>
                            <th style={{width:'60%'}}>Descrição</th>
                            <th style={{width:'15%'}}>Estoque</th>
                            <th style={{width:'15%'}}>Preço</th>
                        </tr>
                    </thead>
                </table>
                <div className="scroll2">
                    <table className="table table-products">
                        <tbody>
                            <tr className="selected">
                                <td style={{width:'20%'}}>180121651561</td>
                                <td style={{width:'60%'}}>Mazzaia Menta</td>
                                <td style={{width:'15%', textAlign: 'center'}}>15</td>
                                <td style={{width:'15%'}}>R$15,00</td>
                            </tr>
                            <tr>
                                <td style={{width:'20%'}}>180121651561</td>
                                <td style={{width:'60%'}}>Mazzaia Menta</td>
                                <td style={{width:'15%', textAlign: 'center'}}>15</td>
                                <td style={{width:'15%'}}>R$15,00</td>
                            </tr>
                            <tr>
                                <td style={{width:'20%'}}>180121651561</td>
                                <td style={{width:'60%'}}>Mazzaia Menta</td>
                                <td style={{width:'15%', textAlign: 'center'}}>15</td>
                                <td style={{width:'15%'}}>R$15,00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

    render(){
        return (
            <div className={`col-sm-${this.props.size}`}>
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
                        {this.props.mode == 'min' && this.renderMin()}
                    </div>
                </div>
            </div>
        );
    }
}