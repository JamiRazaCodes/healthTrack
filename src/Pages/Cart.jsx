import React, { useState } from 'react';
import { Button, InputNumber, Table } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import landingPageData from '../Webdata/webdata';

function CartPage() {
  const [cartItems, setCartItems] = useState([  

  ]);


  const handleQuantityChange = (value, record) => {
    const updatedCart = cartItems.map(item =>
      item.key === record.key ? { ...item, quantity: value } : item
    );
    setCartItems(updatedCart);
  };

  const removeItem = (record) => {
    const updatedCart = cartItems.filter(item => item.key !== record.key);
    setCartItems(updatedCart);
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const columns = [
    {
      title: 'Product',
      dataIndex: 'title',
      key: 'title',
      render: (text, record) => (
        <div className="flex items-center">
          <img src={record.img} alt={record.title} className="w-20 h-20 object-cover mr-4" />
          <span>{text}</span>
        </div>
      ),
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (price) => <span>${price.toFixed(2)}</span>,
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
      render: (quantity, record) => (
        <InputNumber
          min={1}
          max={100}
          defaultValue={quantity}
          onChange={(value) => handleQuantityChange(value, record)}
        />
      ),
    },
    {
      title: 'Total',
      key: 'total',
      render: (_, record) => <span>${(record.price * record.quantity).toFixed(2)}</span>,
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Button
          type="primary"
          danger
          icon={<CloseOutlined />}
          onClick={() => removeItem(record)}
        />
      ),
    },
  ];

  return (
    <div className="container mx-auto py-12">
      {/* Cart Title */}
      <h1 className="text-4xl font-bold text-center mb-8">Your Shopping Cart</h1>

      {/* Cart Table */}
      <Table
        columns={columns}
        dataSource={cartItems}
        pagination={false} // Disable pagination for cart
        footer={() => (
          <div className="flex justify-end text-lg">
            <strong>Total: ${calculateTotalPrice()}</strong>
          </div>
        )}
      />

      {/* Cart Summary */}
      <div className="mt-12">
        <div className="flex justify-between items-center border-t pt-4">
          <div>
            <Button type="primary" className="mr-4">
              Continue Shopping
            </Button>
          </div>
          <div className="flex flex-col items-end">
            <h2 className="text-xl font-bold">Cart Summary</h2>
            <div className="text-right">
              <p>Total Items: {cartItems.length}</p>
              <p>Total Price: <strong>${calculateTotalPrice()}</strong></p>
              <Button type="primary" size="large" className="mt-4">
                Proceed to Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
