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
import { useNavigate } from 'react-router-dom'; // For navigation

function OrderHistoryPage() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          const q = query(collection(db, 'orders'), where('userId', '==', user.uid));
          const querySnapshot = await getDocs(q);
          const orderData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
          setOrders(orderData);
        } else {
          navigate('/login');
        }
      } catch (error) {
        console.error('Failed to fetch orders:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [navigate]);

  return (
    <div className="container mx-auto py-12">
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Your Order History
      </Typography>

      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <CircularProgress />
        </div>
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
                      {order.items.map((item, index) => (
                        <li key={index}>
                          {`${item.title} (x${item.quantity}) - $${item.price}`}
                        </li>
                      ))}
                    </ul>
                  </TableCell>
                  <TableCell>${order.totalPrice.toFixed(2)}</TableCell>
                  <TableCell>
                    {new Date(order.orderDate.seconds * 1000).toLocaleDateString()}
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
