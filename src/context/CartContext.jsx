import { createContext, useState, useEffect } from "react";
import { db, auth } from "../Firebase"; 
import { doc, setDoc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from 'firebase/auth'; 

export const CartContext = createContext();

function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(null); 


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        fetchCartFromFirestore(currentUser.uid);
      } else {
        setUser(null);
        setCartItems([]); 
      }
    });

    return () => unsubscribe(); 
  }, []);


  const fetchCartFromFirestore = async (uid) => {
    const cartRef = doc(db, "carts", uid);
    const cartSnap = await getDoc(cartRef);

    if (cartSnap.exists()) {
      setCartItems(cartSnap.data().items || []);
    } else {
      setCartItems([]);
    }
  };

 
  useEffect(() => {
    if (user && cartItems.length > 0) { 
      const saveCartToFirestore = async () => {
        const cartRef = doc(db, "carts", user.uid);
        await setDoc(cartRef, { items: cartItems });
      };

      saveCartToFirestore();
    }
  }, [cartItems, user]);


  function addItemToCart(item) {
    const itemIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id);

    if (itemIndex === -1) {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    } else {
      const updatedCart = cartItems.map((cartItem, index) =>
        index === itemIndex ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      );
      setCartItems(updatedCart);
    }
  }


  function removeItem(id) {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  }

 
  function isItemAdded(id) {
    return cartItems.some((item) => item.id === id);
  }

 
  function getItemCount() {
    return cartItems.length;
  }

  
  function clearCart() {
    setCartItems([]); 
  }

  return (
    <CartContext.Provider value={{ cartItems, addItemToCart, removeItem, isItemAdded, getItemCount, clearCart, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
