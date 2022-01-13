import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ItemCount from './ItemCount';

const ItemListContainer = ({greeting}) => {
    const customStyle = {
        background: "#212529",
        color: "white"
    }
    return <Container style={customStyle} fluid>
    <Row>
      <h1>{greeting}</h1>
    </Row>
    <Row>
        <Col>Imagen</Col>
        <Col>Descripción</Col>
        <Col>Precio</Col>
        <Col><ItemCount stock={5} initial={1}></ItemCount></Col>
    </Row>
  </Container>
}

export default ItemListContainer;