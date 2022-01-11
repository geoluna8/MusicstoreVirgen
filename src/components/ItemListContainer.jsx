import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const ItemListContainer = ({greeting}) => {
    const customStyle = {
        background: "cadetblue"
    }
    return <Container fluid>
    <Row style={customStyle}>
      <h1>{greeting}</h1>
    </Row>
  </Container>
}

export default ItemListContainer;