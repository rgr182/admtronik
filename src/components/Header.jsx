import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import logo from '../assets/Logo1.jpeg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <Navbar className="header" expand="lg">
                <Container className="nav-container">
                    <Navbar.Brand as={Link} to="/">
                        <img
                            src={logo}
                            height="50"
                            className="d-inline-block align-top"
                            alt="Logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                            <Nav.Link as={Link} to="/about">Nosotros</Nav.Link>
                            <Nav.Link as={Link} to="/services">Servicios</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contacto</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="header-subtitle">
                <Container>
                    AUTOMATIZACION DE EQUIPOS. REPARACION DE EQUIPOS. MAQUINADOS INDUSTRIALES. Y MAS
                </Container>
            </div>
        </>
    );
};

export default Header;
