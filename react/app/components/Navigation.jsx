import React from 'react'
import { Navbar, Nav, NavItem, NavbarHeader } from 'react-bootstrap'

export const Navigation = (props) => (
    <Navbar inverse fluid>
        <Navbar.Header>
            <Navbar.Brand>
                <a href="#"><img src="https://image.ibb.co/dgErt5/taba.jpg"/></a>
            </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav>
                <NavItem eventKey={1} href="#">Balanço</NavItem>
                <NavItem eventKey={2} href="#">Caixa</NavItem>
                <NavItem eventKey={3} href="#">Estoque</NavItem>
            </Nav>
            <Nav pullRight>
                <NavItem eventKey={3} href="#"><span className="glyphicon glyphicon-log-in"></span> Sair</NavItem>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);