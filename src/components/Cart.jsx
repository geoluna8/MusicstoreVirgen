import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { Button, Container, Table, Image, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faTimesCircle, faCheckCircle, faShoppingBag, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const Cart = () => {

    const customStyle = {
        background: "#212529",
        color: "white",
        minHeight: "85vh"
    }

    const { items } = useContext(CartContext);
    const { deleteItem } = useContext(CartContext);
    const { deleteAll } = useContext(CartContext);
    const { getTotalCart } = useContext(CartContext);

    return (<>
    {items.length > 0 ?   
        <Container style={customStyle} fluid>
            <h1>Tú carrito de compras</h1>
            <Table striped bordered hover size="sm" variant="dark">
                <thead>
                    <tr>
                    <th>Imagen</th>
                    <th>Cantidad</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>...</th>
                    </tr>
                </thead>
                <tbody>
                    { items.map(item => {
                        return <tr key={item.id}>
                            <td><Image style={ { width:"20%" } } thumbnail="true" fluid="true" src={ item.thumbnail } /></td>
                            <td>{ item.qty }{ item.qty > 1 ? " piezas" : " pieza"}</td>
                            <td>{ item.title }</td>
                            <td>${ item.price * item.qty }</td>
                            <td><Button variant="danger" onClick={ () => deleteItem(item.id) }><FontAwesomeIcon icon={ faTimesCircle } /></Button></td>
                            </tr> 
                        })
                    }
                </tbody>
            </Table>
            <Row>
                <Col><Button variant="danger" onClick={ () => deleteAll() }>Quitar todos los productos <FontAwesomeIcon icon={ faTrash } /></Button></Col>
                <Col>
                    <Row><Col><span>Total a pagar: <b>${ getTotalCart() }</b></span></Col></Row>
                    <Row><Col><Button variant="success" as={Link} to="/cart/checkout"><FontAwesomeIcon icon={ faShoppingBag } /> Checkout</Button></Col></Row>
                </Col>
            </Row>
        </Container>
    :   <Container style={customStyle} fluid>
            <Row style={ { paddingTop: "20px" } }>
                <Col><h1>No hay articulos en el carrito :(</h1></Col>    
            </Row>
            <Row>
                <Col><Link to="/" className="btn btn-success">Click aqui para ver productos</Link></Col>
            </Row>
        </Container>
    }
    </>)
}

export default Cart;