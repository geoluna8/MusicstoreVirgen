import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../context/CartContext';

const CartWidget = () => {

    const { items } = useContext(CartContext);

    return( <>
            <FontAwesomeIcon icon={faShoppingCart} />{ items.length > 0 ?<span> { items.length }</span> : null }
            </>
    )
}

export default CartWidget;