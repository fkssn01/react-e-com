import { createContext, useState, useContext } from "react"
const CartContext = createContext(null)
import { getProductById } from "../data/products";


const CartProvider = ({children}) => {
const [CartItems, setCartItems] = useState([]);



function addToCart(productId) {
    const existing = CartItems.find((item) => item.id === productId)

    if (existing) {
        const currentQuantity = existing.quantity;
        const updatedCartItems = CartItems.map((item) => item.id === productId ? {id: productId, quantity: currentQuantity+1}: item )
        setCartItems(updatedCartItems)
    } else {
        setCartItems([...CartItems, {id: productId, quantity: 1}])
    }
}

function getCartItemsWithProducts() {
   return CartItems.map(item => ({
  ...item,
  product: getProductById(item.id)
})).filter(item => item.product);
}

function removeFromCart (productId) {
setCartItems(CartItems.filter((item) => item.id !== productId))
}

function updateQuantity  (productId, quantity) {
    if (quantity <= 0) {
removeFromCart(productId);
return;
    }
    setCartItems(CartItems.map((item) => item.id === productId ? {...item, quantity} : item))
}

function getCartTotal() {
    const total = CartItems.reduce((total, item) => {
        const product = getProductById(item.id);
        return total + (product ? product.price * product.quantity : 0)
    }, 0);
    return total
}

 return <CartContext.Provider value={{CartItems, addToCart, getCartItemsWithProducts, removeFromCart, updateQuantity, getCartTotal}}>{children}</CartContext.Provider>
}

export default CartProvider

 export function useCart() {
    const context = useContext(CartContext);
    return context;
}
