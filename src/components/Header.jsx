import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingOutlined } from '@ant-design/icons';
import { Badge } from "antd";
import { HistoryOutlined } from '@ant-design/icons';
import { CartContext } from '../context/CartContext'; 
import { Avatar } from '@mui/material';
import { auth } from '../Firebase'; 
import { onAuthStateChanged } from 'firebase/auth'; 
import { logOut } from "../Firebase"; 
import Button from './Button';
import landingPageData from '../Webdata/webdata';


function Header() {
  const { getItemCount, clearCart } = useContext(CartContext);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [user, setUser] = useState(null); 
  const { header } = landingPageData;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });
    

    return () => unsubscribe(); 
  }, []);

  
  useEffect(() => {
    setCartItemCount(getItemCount());
  }, [getItemCount]);

  
  const handleLogout = () => {
    logOut()
      .then(() => {
        clearCart(); 
        console.log('User signed out and cart cleared locally');
      })
      .catch((error) => {
        console.error('Error signing out:', error);
      });
  };
  const scrollToPricing = () => {
    const section = document.getElementById('pricing-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src={header.logo} className="h-30 w-20" alt="logo" />
          <span className="ml-3 text-xl">{header.title}</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/" className="mr-5 hover:text-gray-900">HOME</Link>
          {location.pathname === '/' && (
            <button onClick={scrollToPricing} className="mr-5 hover:text-gray-900">PLANS</button>
          )}
          <Link to="/productPage" className="mr-5 hover:text-gray-900">PRODUCT</Link>
          <Link to="/aboutUs" className="mr-5 hover:text-gray-900">ABOUT US</Link>
          <Link to="/ContactUs" className="mr-5 hover:text-gray-900">CONTACT US</Link>

          {user ? (
            <>
              <span className="mr-1 text-gray-700">Hi, {user.displayName || user.email}</span>
              <Avatar className="mr-5" alt={user.displayName} src={user.photoURL} />
              <span className="mr-5">
                <Button onClick={handleLogout} label={"Logout"} className="text-gray-900 hover:text-purple-900"/>
              </span>
            </>
          ) : (
            <Link to="/auth"><Button label={"logIn"}/></Link>
          )}

          <Link to="/cart">
            <Badge count={cartItemCount} showZero>
              <ShoppingOutlined style={{ fontSize: 35 }} className="text-gray-700 hover:text-purple-900" />
            </Badge>
          </Link>
          {user ? ( 
            <>
          <Link to={"/OrderHistory"}style={{ fontSize: 30 }} className=" m-5 text-gray-700 hover:text-purple-900">
          <HistoryOutlined />
          </Link>
          </>
          ):(
            <> </>
          )
}
        </nav>
      </div>
    </header>
  );
}

export default Header;