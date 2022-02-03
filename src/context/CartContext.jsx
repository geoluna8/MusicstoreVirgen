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

    const getTotalCart = () => {
        let total = 0
        for(let i of items) total = total + (i.price * i.qty);
        return total
    }

    const addItemQty = (producto, qty) => {
        let index = items.findIndex( item => item.id === producto.id )
        if (index > -1) {
        let newitem = items[index]
            newitem.qty = newitem.qty + qty
            console.log(newitem)
        }
    }

    return(
        <CartContext.Provider value={{ items, cartItems, addItem, deleteItem, deleteAll, isInCart, cartFlag, getTotalCart, addItemQty }}>
            {children}
        </CartContext.Provider>
    )
}