import React, { useEffect, useState, useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams, useOutletContext } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { getProductDetail, getProductDescription } from '../services/Products';
import ItemDetail from './ItemDetail' ;
import { collection , getDocs, query, where , doc, getDoc} from 'firebase/firestore';
import { db } from '../firebase';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const { isInCart } = useContext(CartContext);
    const { cartFlag } = useContext(CartContext); 

    const customStyle = {
        background: "rgb(60 72 74)",
        color: "white",
        minHeight: "85vh"
    }
    const mockItem = {id:"123", title:"Guitarra Eléctrica Lec1000Vb LTD Ec-1000 Vint Blk Emg", model:"LEC1000VB", manufacturer:"Epiphone", manufacturerLogo:"https://scontent.ftpq2-1.fna.fbcdn.net/v/t1.6435-9/183482843_317127196450450_287295515534342543_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=xtBq9dFALCIAX8Kpy65&_nc_ht=scontent.ftpq2-1.fna&oh=00_AT_UbhPb4RcUJfK6INdzXGHUzoD-GMhw4EQOi7g2wh5Qww&oe=620EC880", description:"Guitarra modelo Les Paul estandar equipada con pastillas EMG para mayor fidelidad y potencia, perfecta para grabar en estudio y presentaciones en vivo.", price:8000, pictureUrl:"https://kuhnrikon.com/media/catalog/product/cache/87d9b2a522eea6bb4be38af47d79c618/imp/ort/31555_31556_31557_31558_31559_ps.jpg", stock:10}

    //se ejecuta la promesa al montar el componente
    const [itemData, setItemData] = useState([]);
    const [picture, setPicture] = useState(mockItem.pictureUrl)
    const [loading, setLoading] = useOutletContext();
/*     useEffect(() => {
        let mounted = true;
        setLoading(true);
        //const task = new Promise((resolve, reject) => {
        //    setTimeout(() => {
        //            resolve(mockItem);
        //            setLoading(false)
        //    }, 2000) 
        //});

        Promise.all([getProductDetail(id), getProductDescription(id)])
        .then(results => {
            console.log(results);
            let item = results[0]
            item.description = results[1].plain_text;
            if (mounted) {
                setItemData(item)
                setPicture(results[0].pictures.length > 0 ? results[0].pictures[0].secure_url: mockItem.pictureUrl)
                isInCart(item.id)
                setTimeout(() => {
                  setLoading(false)
                }, 2000)
            }
        });

        return () => mounted = false
      }, [id]); */

      useEffect(() => {
        let mounted = true;
        setLoading(true);

        const getFromFirebase = async () => {
            const docRef = doc(db, "items", id)
            const docSnapshot = await getDoc(docRef)
            //console.log(docSnapshot.data(), docSnapshot.id)
            let item = docSnapshot.data()
            item.id = docSnapshot.id;
            if (mounted) {
                setPicture(item.thumbnail ? item.thumbnail : mockItem.pictureUrl)
                setItemData(item)
                isInCart(item.id)
                setTimeout(() => {
                  setLoading(false)
                }, 2000)
            }
        }
  
        getFromFirebase();
        return () => mounted = false
      }, [id]);

    return <Container style={customStyle} fluid>
    <Row xs={2} md={2} lg={2} style={ {paddingTop: "30px"} }>
        <ItemDetail id={ id } item={ itemData } picture={ picture } inCart={ cartFlag }></ItemDetail>
    </Row>
  </Container>
}

export default ItemDetailContainer;