import React, { useState, useEffect } from 'react';
import { Col } from 'react-bootstrap';
import Item from './Item';

const ItemList = ({ items }) => {

const [allItems, setItems] = useState([])
//detectamos cuando el prop items cambie su valor
    useEffect(()=> {
        updatedata();
    }, [items]);

const updatedata = () => {
    setItems(items)
}

    return (
        <>
        
            { allItems.map(item => {
                return <Col key={ item.id } xs><Item id={ item.id } title={ item.title } description={ item.description } price={ item.price } pictureUrl={ item.pictureUrl } stock= { item.stock } /></Col> }) 
            }
     
        </>
    )

}

export default ItemList;