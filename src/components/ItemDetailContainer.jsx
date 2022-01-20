import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ItemDetail from './ItemDetail' ;

const ItemDetailContainer = () => {

    const customStyle = {
        background: "rgb(60 72 74)",
        color: "white",
        height: "85vh"
    }
    const mockItem = {id:"123", title:"Guitarra Eléctrica Lec1000Vb LTD Ec-1000 Vint Blk Emg", model:"LEC1000VB", manufacturer:"Epiphone", manufacturerLogo:"https://scontent.ftpq2-1.fna.fbcdn.net/v/t1.6435-9/183482843_317127196450450_287295515534342543_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=xtBq9dFALCIAX8Kpy65&_nc_ht=scontent.ftpq2-1.fna&oh=00_AT_UbhPb4RcUJfK6INdzXGHUzoD-GMhw4EQOi7g2wh5Qww&oe=620EC880", description:"Guitarra modelo Les Paul estandar equipada con pastillas EMG para mayor fidelidad y potencia, perfecta para grabar en estudio y presentaciones en vivo.", price:8000, pictureUrl:"https://media.istockphoto.com/photos/the-paul-guitar-picture-id509755213?s=612x612", stock:10}

    //se ejecuta la promesa al montar el componente
    const [itemData, setItemData] = useState({});
    useEffect(() => {
        const task = new Promise((resolve, reject) => {
            setTimeout(() => {
                    resolve(mockItem)
            }, 2000) 
        });

        task.then((value) => { setItemData(value) })
        .catch((reason) => console.log("error", reason))
        .finally((info) => console.log("Finalizo todo"));

      }, []);

    return <Container style={customStyle} fluid>
    <Row xs={2} md={2} lg={2} style={ {paddingTop: "30px"} }>
        <ItemDetail item={ itemData }></ItemDetail>
    </Row>
  </Container>
}

export default ItemDetailContainer;