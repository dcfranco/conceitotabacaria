import React, {Component} from 'react'
import { Table, TableHeader, TableColHeader, TableBody, TableCol, TableLine, TableFooter } from '../template/Table'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ProdutosService from '../service/ProdutosService'
import * as ProdutosActions from '../actions/ProdutosActions'

export class LocalizadorProdutos extends Component {
    constructor(props){
        super(props);
    }

    async componentWillMount(){
        this.props.updateProdutos();
    }

    async onProdutoFilter(produto){
        this.props.updateProdutos(produto);
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
                    { this.props.produtos.length > 0 ?
                        this.props.produtos.map((produto, index) => (
                            <TableLine key={produto.pro_codigo} selected={this.props.selected == produto.pro_codigo} onClick={() => this.props.selectProduto(produto.pro_codigo)}>
                                <TableCol width='20%'>{produto.pro_codigo}</TableCol>
                                <TableCol width='60%'>{produto.pro_descricao}</TableCol>
                                <TableCol width='20%'>{`R$${produto.pro_preco.toFixed(2)}`}</TableCol>
                            </TableLine>
                        ))
                    :
                        <TableLine>
                            <TableCol colSpan={3}>Nenhum produto encontrado</TableCol>
                        </TableLine>
                    }
                </TableBody>
            </Table>
        )
    }

    renderFull(){
        let estoqueLen = this.props.estoque;
        let estoque = this.props.estoque.sort((item1, item2) => item1.est_data_cadastro < item2.est_data_cadastro)[0];

        return (
            <Table>
                <TableHeader>
                    <TableColHeader width='20%'>Código</TableColHeader>
                    <TableColHeader width='60%'>Descrição</TableColHeader>
                    <TableColHeader width='15%'>Estoque</TableColHeader>
                    <TableColHeader width='15%'>Preço</TableColHeader>
                </TableHeader>
                <TableBody>
                    { this.props.produtos.length > 0 ?
                        this.props.produtos.map((produto, index) => (
                            <TableLine key={produto.pro_codigo} selected={this.props.selected == produto.pro_codigo} onClick={() => this.props.selectProduto(produto.pro_codigo)}>
                                <TableCol width='20%'>{produto.pro_codigo}</TableCol>
                                <TableCol width='60%'>{produto.pro_descricao}</TableCol>
                                <TableCol width='22%' align='center'>{produto.pro_qntd_estoque}</TableCol>
                                <TableCol width='15%'>{`R$${(estoque ? estoque.est_preco_venda : 0).toFixed(2)}`}</TableCol>
                            </TableLine>
                        ))
                    :
                        <TableLine>
                            <TableCol colSpan={4}>Nenhum produto encontrado</TableCol>
                        </TableLine>
                    }
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
                            <input
                                id="barras"
                                type="text"
                                className="form-control"
                                name="barras"
                                placeholder="Digite o nome ou bipe um produto"
                                onChange={(e) => this.onProdutoFilter(e.currentTarget.value)}
                                autoFocus 
                            />
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

export class ListaProdutos extends Component {
    constructor(props){
        super(props);
        this.state = {
            list: [
                {value: 0, caption: 'Adalia Mango Tango Ice 50g'},
                {value: 1, caption: 'Adalia Mango Tango Ice 50g'},
                {value: 2, caption: 'Adalia Mango Tango Ice 50g'},
                {value: 3, caption: 'Adalia Mango Tango Ice 50g'}
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

function mapStateToProps(state){
    return {
        ...state.ProdutosReducer
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ProdutosActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LocalizadorProdutos);