import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Button, Container, Table, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faTimesCircle} from '@fortawesome/free-solid-svg-icons';

const Cart = () => {

    const customStyle = {
        background: "#212529",
        color: "white",
        minHeight: "85vh"
    }

    const { items } = useContext(CartContext);
    const { deleteItem } = useContext(CartContext);
    const { deleteAll } = useContext(CartContext);

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
                            <td><Image thumbnail="true" fluid="true" src={ item.thumbnail } /></td>
                            <td>{ item.qty }{ item.qty > 1 ? " piezas" : " pieza"}</td>
                            <td>{ item.title }</td>
                            <td>${ item.price * item.qty }</td>
                            <td><Button variant="danger" onClick={ () => deleteItem(item.id) }><FontAwesomeIcon icon={ faTimesCircle } /></Button></td>
                            </tr> 
                        })
                    }
                </tbody>
            </Table>
            <Button variant="danger" onClick={ () => deleteAll() }>Quitar todos <FontAwesomeIcon icon={ faTrash } /></Button>
        </Container>
    :   <Container style={customStyle} fluid><h1>No hay articulos en el carrito :(</h1></Container>
    }
    </>)
}

export default Cart;