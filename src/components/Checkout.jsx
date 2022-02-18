import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { Button, Container, Row, Col, Form, InputGroup} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faCheckCircle, faPhoneAlt, faShoppingBag, faShoppingCart, faTruck, faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { collection , getDocs, query, where , doc, getDoc, addDoc} from 'firebase/firestore';
import { db } from '../firebase';


const Checkout = () => {

    const customStyle = {
        background: "#212529",
        color: "white",
        minHeight: "85vh"
    }

    const { items } = useContext(CartContext);
    const { deleteAll } = useContext(CartContext);
    const { getTotalCart } = useContext(CartContext);

    const [ success, setSuccess ] = useState(false);
    const [ orderId, setOrderId ] = useState("");

    const doCheckout = (event) => {
        event.preventDefault();  
        const buyer = {
            name: event.target.elements.name.value,
            phone: event.target.elements.email.value,
            email: event.target.elements.phone.value
        }

        if(buyer.name !== "" && buyer.phone !== "" && buyer.email !== "" ) {
             
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
        })  } else {
            alert("Debes completar todos los campos.")
        }

    }

    return (<>
    {items.length > 0 ?   
        <Container style={customStyle} fluid>
            <h1>Checkout</h1>
            <Row>
                <Col xs={6}md={6}>
                    <h1 style={ {marginTop: "15%" } }>Por favor ingresa tus datos personales para terminar la compra</h1>
                </Col>
                <Col xs={6}md={6}>
                    <Form onSubmit={ doCheckout } >
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Nombre Completo:</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={ faUserEdit } /></InputGroup.Text>
                            <Form.Control defaultValue={""} type="text" placeholder="..." />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Correo Electronico:</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={ faAt } /></InputGroup.Text>
                            <Form.Control defaultValue={""} type="text" placeholder="..." />
                        </InputGroup>
                    </Form.Group>            
                    <Form.Group className="mb-3" controlId="phone">
                        <Form.Label>Número telefonico: </Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={ faPhoneAlt } /></InputGroup.Text>
                            <Form.Control defaultValue={""} type="text" placeholder="..." />
                        </InputGroup>
                    </Form.Group>         
                    <Button variant="success" type="submit">
                        <FontAwesomeIcon icon={ faTruck } /> Enviar Orden
                    </Button>
                    </Form>
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

export default Checkout;