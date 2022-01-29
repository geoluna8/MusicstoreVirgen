import React from 'react';
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Item = ({id, title, price, pictureUrl, stock}) => {

    const navigate = useNavigate()

    const goToProduct = () => {
        navigate(`/item/${id}`)
    }


    return (
        <>
        <Card className="mx-auto" style={{ width: '18rem', color: 'black', marginBottom: "15px", background: "#d4a500" }}>
            <Card.Img variant="bottom" style={ { maxWidth:"100%", minHeight:"185px", maxHeight:"185px" } }  src={ pictureUrl } />
            <Card.Body>
                <Card.Title title={ title } style={ { textOverflow:"ellipsis", whiteSpace: "nowrap", overflow: "hidden"} }>{ title } </Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem style={ { background: "#d4a500" } }>Precio: ${ price }</ListGroupItem>
                <ListGroupItem style={ { background: "#d4a500" } }>En stock: { stock }</ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Button variant="secondary" onClick={ goToProduct }>Ver detalles</Button>
            </Card.Body>
        </Card>
        </>

    )

}

export default Item;