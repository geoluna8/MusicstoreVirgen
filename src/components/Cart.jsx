import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { Button, Container, Table, Image, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faTimesCircle, faCheckCircle, faShoppingBag, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { collection , getDocs, query, where , doc, getDoc, addDoc} from 'firebase/firestore';
import { db } from '../firebase';


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

    const [ success, setSuccess ] = useState(false);
    const [ orderId, setOrderId ] = useState("");

    const checkout = () => {
        console.log(items)
        if (items.length === 0 ) {
            alert("no tienes itemes en el carrito")
            return
        }
        const itemsToBuy = items.map(item => {
            return {
                id: item.id,
                title: item.title,
                price: item.price,
                qty: item.qty
            }
        })

        const buyer = {
            name: "Geovanny",
            phone: "1234567890",
            email: "geoluna@coderhouse.com"
        }

        const order = { buyer: buyer, items: itemsToBuy, date: new Date(), total: getTotalCart()}

        console.log(order);

        addDoc( collection(db, "orders"), order)
        .then(doc => {
            setOrderId(doc.id)
            setSuccess(true)
            console.log("esto es muy sencillo, el id de mi orden creada es", doc.id)
            deleteAll()
        })
        .catch(err => {
            console.log("algo muy malo paso", err)
        })

    }

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
                    <Row><Col><Button variant="success" onClick={ () => checkout() }><FontAwesomeIcon icon={ faShoppingBag } /> Pagar</Button></Col></Row>
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

{success ? 
            <div style={{ 
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100v%",
                background: "rgb(76 175 80)",
                textAlign: "center",
                color: "white",
                paddingTop: "10%",
                paddingBottom: "10%"
            }}>
                <FontAwesomeIcon style={ {fontSize: "70px"} } icon={ faCheckCircle } />
                <h1>¡Tu compra se ha realizado exitosamente!</h1>
                <p>Tu orden ha sido registrada con el folio - <b>{orderId}</b></p>
                <Button as={Link} to="/">Seguir comprando <FontAwesomeIcon icon={ faShoppingCart } /></Button>
            </div>
        :
            null
        }

    </>)
}

export default Cart;