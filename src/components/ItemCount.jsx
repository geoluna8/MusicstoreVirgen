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
    //const [itemsQty, setItemsQty] = useState(initial)
    const [itemsQty, setItemsQty] = useState(() => {return initial});
    const [totalItems, setTotalItems] = useState(0);
    useEffect(() => {
        console.log("Cambie el item de cantidad","ahora tengo", itemsQty);
        return () => {
          console.log("se desmonto el componente (considerado como cleanup")
        }
      },[itemsQty, totalItems]);

      const handleLessQty = () => {
        //setItemsQty(itemsQty - 1)
        if(itemsQty > initial){ setItemsQty( prevItemsQty => prevItemsQty - 1) }
      }

      const handlePlusQty = () => {
          //setItemsQty(itemsQty + 1)
        if(itemsQty < stock){ setItemsQty( prevItemsQty => prevItemsQty + 1) }
      }

      const handleAddToCart = () => {
        if(stock > 0){ setTotalItems(totalItems + itemsQty) }
      }

    return (
    <Container>
        <Row style={ rowStyle } xs={3}>
            <Col style={ {paddingLeft: 0} }><Button style={ {float: "left"} } variant="primary" onClick={ handleLessQty }>-</Button></Col>
            <Col style={ {marginTop: "6px"} }><span>{itemsQty}</span></Col>
            <Col style={ {paddingRight: 0} }><Button style={ {float: "right"} } variant="primary" onClick={ handlePlusQty }>+</Button></Col>
        </Row>
        <Row style={ {paddingTop: "15px", background: "#d3d3d326"} }>
            <Button variant="success" onClick={ handleAddToCart }><FontAwesomeIcon icon={faCartPlus} /></Button>
        </Row>
    </Container> 
    )
}

export default ItemCount;