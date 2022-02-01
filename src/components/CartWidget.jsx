import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../context/CartContext';

const CartWidget = () => {

    const { items } = useContext(CartContext);

    return( <>
            <FontAwesomeIcon icon={faShoppingCart} /><span>{ items.length }</span>
            </>
    )
}

export default CartWidget;