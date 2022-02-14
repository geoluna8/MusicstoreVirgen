import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams, useOutletContext } from 'react-router-dom';
import { getProductsFromCategory } from '../services/Products';
import ItemList  from './ItemList';
import ItemCount from './ItemCount';
import { collection , getDocs, query, where , doc, getDoc} from 'firebase/firestore';
import { db } from '../firebase';

const ItemListContainer = ({greeting}) => {
    const { name, id } = useParams();

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
        let mounted = true
        const task = new Promise((resolve, reject) => {
            setLoading(true);
            //setTimeout(() => {
            //    let apiResponse = true
            //    if (apiResponse){
            //        resolve(mockData)
            //        setLoading(false)
            //    } else {
            //        reject("error al traer la data")
            //    }
           //}, 2000)

           getProductsFromCategory("MLM", id == null ? "MLM194141" : id ).then(items => {
            if(mounted) {
              console.log(items.results)
              setTimeout(() => {
                resolve(items.results)
                setLoading(false)
              }, 2000)
            }
          });

        });

        task.then((value) => { /* setItemsData(value) */ })
        .catch((reason) => console.log("error", reason))
        .finally((info) => console.log("Finalizo todo"));
        return () => mounted = false;
      }, [id]);

      useEffect(() => {
        const getFromFirebase = async () => {
            let firebaseResponse = [];
            //traer todos los datos
            //const consulta = collection(db, "items");
            const consulta = query(collection(db, "items"), where("categoryId", "==", name == null ? "guitarras" : name ));
            const snapshot = await getDocs(consulta);
            firebaseResponse = snapshot.docs.map(p => ({id: p.id, ...p.data() }));
            setItemsData(firebaseResponse)
        }
  
        getFromFirebase();
        return () => {}
      }, [id]);

    return <Container style={customStyle} fluid>
    <Row>
      <h1>{greeting}</h1>
      <h1 style={ { textTransform: "capitalize" } }>{name}</h1>
    </Row>
    <Row><ItemList items={ itemsData }></ItemList></Row>
  </Container>
}

export default ItemListContainer;