import React from 'react';
import { Button } from 'react-bootstrap';

const Item = ({id, title, description, price, pictureUrl, stock}) => {

    const cardStyle = {
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
        transition: "0.3s",
        width: "50%",
        background: "#d3d3d312",
        fontSize: "12px",
        marginLeft: "auto",
        marginRight: "auto"
      }
            
    const cardContainer = {
        padding: "2px 16px",
        background: "#d3d3d32e"
      }

    const picHolder = {
        width: "245px",
        minHeight: "120px",
        maxHeight: "auto",
        float: "left",
        margin: "3px",
        padding: "3px"
    }


    return (
        <>
        <div style={ cardStyle }>
            <div style={ picHolder }>
                <img src={ pictureUrl } alt="Avatar" style={ { maxWidth:"100%", minHeight:"185px", maxHeight:"185px" } } />
            </div>
            <div style={ cardContainer }>
                <p style={ { fontSize: "16px" } }><b>{ title } - ${ price }</b></p> 
                <p>{ description }</p>
                <p>Stock: { stock } pzas</p> 
                <p><Button variant="secondary">Ver detalles</Button></p>
            </div>
        </div>
        </>

    )

}

export default Item;