import React from 'react';
import { Col, Image, Row, Figure } from 'react-bootstrap';
import ItemCount from './ItemCount';

const ItemDetail = ({ id, item, picture }) => {

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
                    <ItemCount stock={5} initial={1}></ItemCount>
                </div>
            </Row> 
        </Col>
        </>
    )
}

export default ItemDetail;