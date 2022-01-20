import React from 'react';
import { Button, Col, Image, Row, Figure } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const ItemDetail = ({ item }) => {

    return (
        <>
        <Col>
            <Image src={ item.pictureUrl } rounded="true" fluid="true"></Image>
        </Col>
        <Col>
            <Row><h1>{ item.title }</h1></Row>
            <Row>
            <Figure>
                <Figure.Caption>Fabricante</Figure.Caption>
                <Figure.Image
                    width={141}
                    height={150}
                    alt="171x180"
                    src={ item.manufacturerLogo }
                />
            </Figure>
            </Row>
            <Row><p>Modelo: <i>{ item.model }</i></p></Row>
            <Row><p>{ item.description }</p></Row>
            <Row><p style={ {marginBottom: "0"} }>Precio regular:</p><p style={ {fontWeight: "bold", color: "burlywood"} }>${ item.price }</p></Row>
            <Row>
                <div className="mb-2">
                    <Button variant="primary" size="lg">Agregar al carrito <FontAwesomeIcon icon={faShoppingCart} /></Button>
                </div>
            </Row> 
        </Col>
        </>
    )
}

export default ItemDetail;