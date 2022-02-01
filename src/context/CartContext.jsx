import { createContext, useState } from "react"

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [items, setItems] = useState([])
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

    return(
        <CartContext.Provider value={{ items, cartItems, addItem }}>
            {children}
        </CartContext.Provider>
    )
}