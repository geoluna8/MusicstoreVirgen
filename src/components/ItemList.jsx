import React, { useState, useEffect } from 'react';
import { Col } from 'react-bootstrap';
import Item from './Item';

const ItemList = ({ items }) => {

const [allItems, setItems] = useState([])
//detectamos cuando el prop items cambie su valor
    useEffect(()=> {
        setItems(items)
    }, [items]);

    return (
        <>
        
            { allItems.map(item => {
                return <Col key={ item.id }><Item id={ item.id } title={ item.title } price={ item.price } pictureUrl={ item.thumbnail } stock= { item.available_quantity } /></Col> }) 
            }
     
        </>
    )

}

export default ItemList;