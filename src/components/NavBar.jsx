import React, { Fragment, useState } from 'react';
import { Navbar, Container, Nav, NavDropdown, Badge, Form, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo.png';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const NavBar = ({titulo}) => {

    const [onSearch, setOnSearch] = useState(false);
    const [query, setOnQuery] = useState("");
    const onSearchChange = (event) => {
        event.preventDefault();
        console.log(event.target.value)
        if(/^(?:[A-Za-z]+|\d+)$/.test(event.target.value)){
            console.log("letras")
            setOnQuery(event.target.value)
            setOnSearch(true)
        } else {
            setOnSearch(false)
        }
    }

    return  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Link to={"/"} style={ { color: "inherit" } }>
                        <Navbar.Brand>
                            <img alt="" src={logo} width="30" height="30" className="d-inline-block align-top"/>{' '}{titulo}
                        </Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        <Link style={ { color: "inherit" } } to={"/category/guitarras/MLM194141"}><Nav className="nav-link">Guitarras</Nav></Link>
                        <Link style={ { color: "inherit" } } to={"/category/baterias/MLM3004"}><Nav className="nav-link">Baterias y percusiones</Nav></Link>
                        <Link style={ { color: "inherit" } } to={"/category/accesorios/MLM434786"}><Nav className="nav-link">Pedales y accesorios</Nav></Link>
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
                        </Nav.Link>
                        </Nav>
                        <Form style={ {position: "relative"} } className="d-flex">
                            <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            onChange={onSearchChange}
                            />
                            { onSearch ?
                                <div style={ { position: "absolute", top:36, left: 0, width: 250, height: 300, background: "white", color: "black" } }>
                                    <li onClick={ () => setOnSearch(false) }>resultado</li>
                                    <li onClick={ () => setOnSearch(false) }>resultado</li>
                                    <li onClick={ () => setOnSearch(false) }>resultado</li>
                                    <li onClick={ () => setOnSearch(false) }>resultado</li>
                                    <li onClick={ () => setOnSearch(false) }>resultado</li>
                                    <li onClick={ () => setOnSearch(false) }>resultado</li>
                                </div>
                                : null
                            }
                        </Form> */} </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
}

export default NavBar;