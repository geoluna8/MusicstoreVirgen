import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {

    const { items } = useContext(CartContext);

    return( <>
            <Link to="/cart" style={ { color: "inherit" } }><FontAwesomeIcon icon={faShoppingCart} /></Link><span> { items.length }</span>
            </>
    )
}

export default CartWidget;