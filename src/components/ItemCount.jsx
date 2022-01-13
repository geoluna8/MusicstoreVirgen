import { React, useState, useEffect  } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const ItemCount = ({stock, initial}) => {
    const rowStyle = {
        border: "1px solid #0e6efd",
        borderRadius: "0.4rem",
        background: "#d3d3d326"
    }

    const [itemsQty, setItemsQty] = useState(initial);
    const [totalItems, addToCart] = useState(0);
        useEffect(() => {
        console.log("Cambie el item de cantidad","ahora tengo", itemsQty);
        return () => {
          console.log("se desmonto el componente")
        }
      },[itemsQty, totalItems]);

    return <Container>
        <Row style={ rowStyle } xs={3}>
            <Col style={ {paddingLeft: 0} }><Button style={ {float: "left"} } variant="primary" onClick={ () => { if(itemsQty > 0){ setItemsQty(itemsQty - 1)}} }>-</Button></Col>
            <Col style={ {marginTop: "6px"} }><span>{itemsQty}</span></Col>
            <Col style={ {paddingRight: 0} }><Button style={ {float: "right"} } variant="primary" onClick={ () => { if(itemsQty < stock){setItemsQty(itemsQty + 1)}} }>+</Button></Col>
        </Row>
        <Row style={ {paddingTop: "15px", background: "#d3d3d326"} }>
            <Button variant="success" onClick={ () => { if(stock > 0){addToCart(totalItems + itemsQty)} } }><FontAwesomeIcon icon={faCartPlus} /></Button>
        </Row>
    </Container> 
}

export default ItemCount;