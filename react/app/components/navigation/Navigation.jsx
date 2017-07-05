import React from 'react'
import { LinkNav } from './LinkNav'

export const Navigation = (props) => (
    <nav className="navbar navbar-inverse">
        <div className="container-fluid">
            <div className="navbar-header">
                <a className="navbar-brand logo" href="#"><img src={require('../../assets/img/taba.jpg')} /></a>
            </div>
            <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav">
                    <LinkNav to='/balanco' router={props.router}>Balanço</LinkNav>
                    <LinkNav to='/caixa' router={props.router}>Caixa</LinkNav>
                    <LinkNav to='/estoque' router={props.router}>Estoque</LinkNav>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                    <li><a href="#" onClick={() => props.exit()}><span className="glyphicon glyphicon-log-in"></span> Sair</a></li>
                </ul>
            </div>
        </div>
    </nav>
);
