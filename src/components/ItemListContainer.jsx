import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams, useOutletContext } from 'react-router-dom';
import ItemList  from './ItemList';
import ItemCount from './ItemCount';

const ItemListContainer = ({greeting}) => {
    const { id } = useParams();

    const customStyle = {
        background: "#212529",
        color: "white",
        minHeight: "85vh"
    }
    const mockData = [{id:"AB123", title:"Les Paul Epiphone", description:"Les Paul standart guitar with humbucker pickups, perfect for studio and live perfomances.", price:8000, pictureUrl:"https://media.istockphoto.com/photos/the-paul-guitar-picture-id509755213?s=612x612", stock:10},
    {id:"CD456", title:"Tama Superstar", description:"Tama drums professional, includes snare, toms and iron cobra pedal. The professionals choice.", price:12000, pictureUrl:"https://w7.pngwing.com/pngs/997/510/png-transparent-tama-drums-tom-toms-floor-tom-bass-drums-drum-color-drum-cymbal.png", stock:5}]

    //se ejecuta la promesa al montar el componente
    const [itemsData, setItemsData] = useState([]);
    const [loading, setLoading] = useOutletContext();
    useEffect(() => {
        const task = new Promise((resolve, reject) => {
            setLoading(true);
            setTimeout(() => {
                let apiResponse = true
                if (apiResponse){
                    resolve(mockData)
                    setLoading(false)
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
      <h1>{id}</h1>
    </Row>
    <Row><ItemList items={ itemsData }></ItemList></Row>
  </Container>
}

export default ItemListContainer;