import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ItemList  from './ItemList';
import ItemCount from './ItemCount';

const ItemListContainer = ({greeting}) => {

    const customStyle = {
        background: "#212529",
        color: "white"
    }
    const mockData = [{id:"123", title:"Les Paul Epiphone", description:"Les Paul standart guitar with humbucker pickups, perfect for studio and live perfomances.", price:8000, pictureUrl:"https://media.istockphoto.com/photos/the-paul-guitar-picture-id509755213?s=612x612", stock:10},
    {id:"246", title:"Tama Superstar", description:"Tama drums professional, includes snare, toms and iron cobra pedal. The professionals choice.", price:12000, pictureUrl:"https://w7.pngwing.com/pngs/997/510/png-transparent-tama-drums-tom-toms-floor-tom-bass-drums-drum-color-drum-cymbal.png", stock:5}]

    //se ejecuta la promesa al montar el componente
    const [itemsData, setItemsData] = useState([]);
    useEffect(() => {
        const task = new Promise((resolve, reject) => {
            setTimeout(() => {
                let apiResponse = true
                if (apiResponse){
                    resolve(mockData)
                } else {
                    reject("error al traer la data")
                }
            }, 2000) 
        });

        task.then((value) => { setItemsData(value) })
        .catch((reason) => console.log("error", reason))
        .finally((info) => console.log("Finalizo todo"));

      }, []);

    return <Container style={customStyle} fluid>
    <Row>
      <h1>{greeting}</h1>
    </Row>
    <Row><ItemList items={ itemsData }></ItemList></Row>
    {/*<Row>
        <Col>Imagen</Col>
        <Col>Descripción</Col>
        <Col>Precio</Col>
        <Col><ItemCount stock={5} initial={1}></ItemCount></Col>
    </Row>*/}
  </Container>
}

export default ItemListContainer;