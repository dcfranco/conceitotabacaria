import React from 'react'

export const Navigation = (props) => (
    <nav className="navbar navbar-inverse">
        <div className="container-fluid">
            <div className="navbar-header">
                <a className="navbar-brand logo" href="#"><img src={require('../../assets/img/taba.jpg')} /></a>
            </div>
            <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav">
                    <li className="active"><a href="index.html">Balanço</a></li>
                    <li><a href="caixa.html">Caixa</a></li>
                    <li><a href="estoque.html">Estoque</a></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                    <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Sair</a></li>
                </ul>
            </div>
        </div>
    </nav>
);