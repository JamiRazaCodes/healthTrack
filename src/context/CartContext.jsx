import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

function CartcontextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]); 

  function addItemToCart(item) {
    const itemIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id);
  
    if (itemIndex === -1) {
      // Add new item to the cart with quantity 1
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    } else {
      // Update quantity immutably
      const updatedCart = cartItems.map((cartItem, index) =>
        index === itemIndex
          ? { ...cartItem, quantity: cartItem.quantity += 1 }
          : cartItem
      );
      setCartItems(updatedCart); 
      
    }
  
    console.log("item added");
  }
  
  function removeItem(id) {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  }

  function isItemAdded(id) {
    return cartItems.some((item) => item.id === id);
  }

  return (
    <CartContext.Provider value={{ cartItems, addItemToCart, removeItem, isItemAdded }}>
      {children}
    </CartContext.Provider>
  );
 
}

export default CartcontextProvider;
