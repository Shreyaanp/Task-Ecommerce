import {useState, createContext} from 'react';
import {useNavigate} from 'react-router-dom';

const CartContext = createContext();

export function CartProvider({children}) {
    const [items, setItem] = useState([]);
    const [quantity, setQuantity] = useState([]);
    const [cartitem, setCartitem] = useState([]);
    const navigate = useNavigate();

    const addToCart = (new_item) => {
        new_item.cart+= 1;
        setItem([...items, new_item]);
    }
    const checkout = (total, totalItems) => {
        setCartitem([...cartitem,total,totalItems]);
        navigate('/checkoutpage');
    }
    return (
        <CartContext.Provider value={{items, addToCart, checkout}}>{children}</CartContext.Provider>
    )
}

export default CartContext;