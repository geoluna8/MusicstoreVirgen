import { createContext, useState } from "react"

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [items, setItems] = useState([])
    const [cartFlag, setCartFlag] = useState(false)
    const cartItems = () => {
        return items.length
    }

    const addItem = (producto, qty) => {
        //Usamos un spread operator,  ... para hacer una copia del array y agregar un nuevo item
        producto.qty = qty
        console.log(producto)
        setItems([...items, producto])
        console.log(items)
    }

    const deleteItem = (id) => {
        let index = items.findIndex( item => item.id === id )
        if (index > -1) {
          items.splice(index, 1);
          setItems([...items]);
        }
    }

    const deleteAll = () => {
        setItems([]);
    }

    const isInCart = (id) => {
        let index = items.findIndex( item => item.id === id )
        if (index > -1) {
            setCartFlag(true);
        } else {
            setCartFlag(false);
        }
    }

    return(
        <CartContext.Provider value={{ items, cartItems, addItem, deleteItem, deleteAll, isInCart, cartFlag }}>
            {children}
        </CartContext.Provider>
    )
}