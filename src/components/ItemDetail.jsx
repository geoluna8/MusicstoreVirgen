import React, { useContext, useState, useEffect } from 'react';
import { Col, Image, Row, Button } from 'react-bootstrap';
import ItemCount from './ItemCount';
import Radio from './Radio';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const ItemDetail = ({ id, item, picture, inCart }) => {

    //const options = ["eren", "mika", "elrich", "neku"];
    const { addItem } = useContext(CartContext);
    const { addItemQty } = useContext(CartContext);
    const [orderQty, setOrderItems] = useState(0);

    const AddToCart = (totalItems) => {
        setOrderItems(totalItems)
    }

    useEffect(() => {
        if(orderQty > 0 && inCart === false){ 
            addItem(item, orderQty) 
        } else {
            //console.log("aumentar carrito")
            addItemQty(item, orderQty)
        }
        return () => {}
      },[orderQty]);

    return (
        <>
        <Col sm="8" lg="7">
            <Image src={ picture } rounded="true" fluid="true"></Image>
        </Col>
        <Col sm="4" lg="5">
            <Row><h1>{ item.title }</h1></Row>
            <Row><p>{ item.description }</p></Row>
            <Row><p style={ {marginBottom: "0"} }>Precio regular:</p><p style={ {fontWeight: "bold", color: "burlywood"} }>${ item.price }</p></Row>
            <Row>
                <div className="mb-2">
                    { orderQty === 0 ? <ItemCount stock={item.available_quantity} initial={1} onAdd={ AddToCart } inCart={ inCart }></ItemCount> : <Link to="/cart" className="btn btn-success">Finalizar Compra</Link> }
                </div>
            </Row> 
        </Col>
        {/*<Radio options={ options } onSelect={ onSelect }></Radio>*/}
        </>
    )
}

export default ItemDetail;