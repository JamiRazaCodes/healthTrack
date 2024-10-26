import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../context/CartContext';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Button, Input, Form, message } from 'antd';

function CheckoutPage() {
  const { cartItems, setCartItems } = useContext(CartContext); 
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const db = getFirestore();
  const auth = getAuth();
  const navigate = useNavigate();

  // Set user data into form once authenticated
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
        // Automatically fill form fields with user data
        form.setFieldsValue({
          fullName: user.displayName || '', // Use displayName if available
          email: user.email || '',
        });
      } else {
        message.warning('Please log in to place an order.');
        navigate('/auth'); 
      }
    });
    return () => unsubscribe();
  }, [auth, form, navigate]);

  const handleSubmit = async (values) => {
    if (!isAuthenticated) {
      message.warning('Please log in to place an order.');
      return;
    }

    setLoading(true); 

    try {
      await addDoc(collection(db, 'orders'), {
        ...values, 
        cartItems, 
        createdAt: new Date(),
        userId: auth.currentUser.uid, 
      });

      message.success('Order placed successfully!');

      setCartItems([]); 
      form.resetFields(); 

    } catch (error) {
      console.error('Error placing order: ', error);
      message.error('Failed to place the order. Please try again.');
    } finally {
      setLoading(false); 
    }
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      const itemPrice = Number(item.price) || 0;
      return total + itemPrice * item.quantity;
    }, 0).toFixed(2);
  };

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Checkout</h1>

      <div className="flex justify-between">
        <div className="w-1/2 p-8 bg-gray-100 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

          {cartItems.length > 0 ? (
            <ul>
              {cartItems.map((item) => (
                <li key={item.id} className="flex justify-between mb-4">
                  <div>
                    <p className="text-lg font-semibold">{item.title}</p>
                    <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                  </div>
                  <p className="text-lg">${(item.price * item.quantity).toFixed(2)}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-lg text-gray-500">Your cart is empty</p>
          )}

          <div className="mt-8 border-t pt-4">
            <h3 className="text-xl font-semibold">Total Price: ${calculateTotalPrice()}</h3>
          </div>
        </div>

        <div className="w-1/2 p-8 bg-white rounded-lg shadow-md ml-8">
          <h2 className="text-2xl font-bold mb-4">Checkout Form</h2>
          <Form
            layout="vertical"
            form={form} 
            onFinish={handleSubmit}
          >
            <Form.Item
              label="Shipping Address"
              name="address"
              rules={[{ required: true, message: 'Please enter your shipping address' }]}
            >
              <Input placeholder="Enter your shipping address" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" loading={loading} className="w-full">
                Place Order
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
