import { React, useState, useEffect  } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const ItemCount = ({stock, initial, onAdd, inCart}) => {
    const rowStyle = {
        border: "1px solid #0e6efd",
        borderRadius: "0.4rem"
    }

    const [itemsQty, setItemsQty] = useState(initial)
    const [totalItems, setTotalItems] = useState(0);
    useEffect(() => {
        console.log("Cambie el item de cantidad","ahora tengo", itemsQty);
        return () => {
          console.log("se desmonto el componente (considerado como cleanup")
        }
      },[itemsQty]);

      useEffect(() => {
        if(totalItems > 0){ onAdd(totalItems)}
        return () => {}
      },[totalItems]);

      const handleLessQty = () => {
        if(itemsQty > initial){ setItemsQty(itemsQty - 1) }
      }

      const handlePlusQty = () => {
        if(itemsQty < stock){ setItemsQty(itemsQty + 1) }
      }

      const handleAddToCart = () => {
        if(stock > 0){ 
            setTotalItems(totalItems + itemsQty)
        }
      }

    return (
    <Container>
        {inCart == true ? 
            <Row>
                <Button variant="danger">Articulo ya en carrito</Button>
            </Row>
            :
            <><Row style={ rowStyle } xs={3}>
                <Col style={ {paddingLeft: 0} }><Button style={ {float: "left"} } variant="primary" onClick={ handleLessQty }>-</Button></Col>
                <Col style={ {marginTop: "6px"} }><span>{itemsQty}</span></Col>
                <Col style={ {paddingRight: 0} }><Button style={ {float: "right"} } variant="primary" onClick={ handlePlusQty }>+</Button></Col>
            </Row>
            <Row style={ {paddingTop: "15px", background: "#d3d3d326"} }>
                <Button variant="success" onClick={ handleAddToCart }>Agregar al carrito <FontAwesomeIcon icon={faShoppingCart} /></Button>
            </Row></>
        }
    </Container> 
    )
}

export default ItemCount;