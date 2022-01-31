import React from 'react';
import { Col, Image, Row, Figure } from 'react-bootstrap';
import ItemCount from './ItemCount';
import Radio from './Radio';

const ItemDetail = ({ id, item, picture }) => {

    const options = ["eren", "mika", "elrich", "neku"];
    const onSelect = (option) => {
        alert(option)
    }

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
        {/*<Radio options={ options } onSelect={ onSelect }></Radio>*/}
        </>
    )
}

export default ItemDetail;