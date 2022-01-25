import React, { Fragment } from 'react';
import { Navbar, Container, Nav, NavDropdown, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo.png';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const NavBar = ({titulo}) => {
    return  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Link to={"/"}>
                        <Navbar.Brand>
                            <img alt="" src={logo} width="30" height="30" className="d-inline-block align-top"/>{' '}{titulo}
                        </Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        <Link to={"/category/Instrumentos"}><Nav className="nav-link">Instrumentos</Nav></Link>
                        <Nav.Link href="#drums">Accesorios</Nav.Link>
                        <Nav.Link href="#recording">Grabación</Nav.Link>
                        {/*<NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>*/}
                        </Nav>
                        <Nav>
                        <Badge pill bg="success">
                            <FontAwesomeIcon icon={faUser} /> Login
                        </Badge>{' '}
                        <Badge pill bg="secondary">
                            <CartWidget />
                        </Badge>
                        {/*<Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>*/}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
}

export default NavBar;