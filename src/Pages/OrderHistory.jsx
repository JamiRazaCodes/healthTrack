import React, { useState, useEffect } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db, auth } from '../Firebase'; // Assuming Firebase is set up
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  CircularProgress,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

function OrderHistoryPage() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Track error state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          setIsAuthenticated(true);
          // Fetch orders where 'email' matches the current user's email
          const q = query(collection(db, 'orders'), where('email', '==', user.email));
          const querySnapshot = await getDocs(q);

          if (!querySnapshot.empty) {
            const orderData = querySnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }));

            setOrders(orderData);
          }
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error('Failed to fetch orders:', error);
        setError('Failed to fetch your order history. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="container mx-auto py-12">
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Your Order History
      </Typography>

      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <CircularProgress />
        </div>
      ) : error ? (
        <Typography variant="h6" component="p" align="center" color="error">
          {error}
        </Typography>
      ) : !isAuthenticated ? (
        <Typography variant="h6" component="p" align="center" color="textSecondary">
          Please log in to view your order history.
        </Typography>
      ) : orders.length === 0 ? (
        <Typography variant="h6" component="p" align="center">
          No previous orders found.
        </Typography>
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Order ID</TableCell>
                <TableCell>Items</TableCell>
                <TableCell>Total Price</TableCell>
                <TableCell>Order Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>{order.id}</TableCell>
                  <TableCell>
                    <ul>
                      {order.cartItems.map((item, index) => (
                        <li key={index}>
                          {`${item.title} (x${item.quantity}) - $${item.price}`}
                        </li>
                      ))}
                    </ul>
                  </TableCell>
                  <TableCell>
                    ${order.cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
                  </TableCell>
                  <TableCell>
                    {new Date(order.createdAt.seconds * 1000).toLocaleDateString()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
        <Button variant="contained" color="primary" onClick={() => navigate('/productPage')}>
          Back to Shopping
        </Button>
      </div>
    </div>
  );
}

export default OrderHistoryPage;
