import Button from "./Button";
import landingPageData from '../Webdata/webdata';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ShoppingOutlined } from '@ant-design/icons';
import { Badge } from "antd";
import React, { useEffect, useState } from 'react';
import { auth } from '../Firebase'; // Import Firebase auth
import { onAuthStateChanged } from 'firebase/auth';
import { Avatar } from '@mui/material';
import { logOut } from "../Firebase";


function Header() {
 
  const [user, setUser] = useState(null); // State to store user info
  const location = useLocation();
  const { header } = landingPageData;

  // Check for user auth state
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

 
  // Scroll to pricing section
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
          <img src={header.logo} className="h-20 w-20" alt="logo" />
          <span className="ml-3 text-xl">{header.title}</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/" className="mr-5 hover:text-gray-900">HOME</Link>
          {location.pathname === '/' && (
            <button onClick={scrollToPricing} className="mr-5 hover:text-gray-900">PLANS</button>
          )}
          <Link to="/productPage" className="mr-5 hover:text-gray-900">PRODUCT</Link>
          <Link to="/AboutUs" className="mr-5 hover:text-gray-900">ABOUT US</Link>
          <Link to="/ContactUs" className="mr-5 hover:text-gray-900">CONTACT US</Link>

          {/* Conditionally render based on user auth status */}
          {user ? (
            <>
              <span className="mr-1 text-gray-700">Hi, {user.displayName || user.email}</span>
              <Avatar className="mr-5" alt={user.displayName} src={user.photoURL} />
              <span className="mr-5">
                <Button 
  label="Logout" 
  onClick={() => {
    logOut()
      .then(() => {
        console.log('User signed out');
      })
      .catch((error) => {
        console.error('Error signing out:', error);
      });
  }} 
/>
              </span>
            </>
          ) : (
            <Link to="/auth" className="mr-5 hover:text-gray-900">
              <Button label="Login" /> {/* Login button for navigation */}
            </Link>
          )}

          <Link to="/Cart">
            <Badge showZero>
              <ShoppingOutlined style={{ fontSize: 35 }} className="text-gray-700 hover:text-purple-900" />
            </Badge>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
