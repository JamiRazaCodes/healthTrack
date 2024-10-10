import { CartContext } from '../context/CartContext';
import Button from "./Button";
import landingPageData from '../Webdata/webdata';
import { Link } from "react-router-dom";
import { ShoppingOutlined } from '@ant-design/icons';
import { Badge } from "antd";
import React, { useContext,useEffect } from 'react';

function Header() {
  const { cartItems } = useContext(CartContext); 
  useEffect(() => {
    console.log('Cart items updated:', cartItems);
  }, [cartItems]);

  const { header } = landingPageData;

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
          <img src={header.logo} className='h-20 w-20' alt="logo" /> 
          <span className="ml-3 text-xl">{header.title}</span> 
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/" className="mr-5 hover:text-gray-900">HOME</Link>
          <button onClick={scrollToPricing} className="mr-5 hover:text-gray-900">PLANS</button>
          <Link to="/productPage" className="mr-5 hover:text-gray-900">PRODUCT</Link>
          <Link to="/AboutUs" className="mr-5 hover:text-gray-900">ABOUT US</Link>
          <Link to="/ContactUs" className="mr-5 hover:text-gray-900">CONTACT US</Link>
          <Link to="/auth" className="mr-5 hover:text-gray-900">
            <Button label="Login" />
          </Link>
          <Link to="/Cart">
            <Badge count={cartItems.length} showZero> 
              <ShoppingOutlined style={{ fontSize: 35 }}  className="text-gray-700 hover:text-purple-900" />
            </Badge>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
