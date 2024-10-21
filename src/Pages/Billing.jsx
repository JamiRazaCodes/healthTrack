import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../components/Button';
import { collection, addDoc } from 'firebase/firestore';
import { db, auth } from '../Firebase'; 
import Swal from 'sweetalert2';
import { onAuthStateChanged } from 'firebase/auth'; 

function Billing({ pricing }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    card: ''
  });
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null); 
  const navigate = useNavigate();
  const { planId } = useParams();
  const plan = pricing.find((p) => p.plan.toLowerCase() === planId);
  const goBack = () => navigate('/');



  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        navigate('/auth'); 
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  if (!plan) {
    return <h2>Plan not found</h2>;
  }


  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!/^\d{16}$/.test(formData.card.replace(/\s/g, ''))) {
      Swal.fire({
        title: 'Error',
        text: 'Please enter a valid 16-digit credit card number.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
      return;
    }
  
    if (user) {
      setLoading(true);
      try {
        await addDoc(collection(db, 'billingDetails'), {
          ...formData,
          plan: plan.plan,
          price: plan.price,
          userId: user.uid,
          timestamp: new Date(),
        });

        
        Swal.fire({
          title: 'Purchase Complete',
          text: 'Your billing details have been saved successfully.',
          icon: 'success',
          confirmButtonText: 'OK',
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/bio-form'); 
          }
        });
        
        setFormData({
          name: '',
          email: '',
          card: ''
        });

      } catch (error) {
        console.error('Error saving billing details: ', error);
        Swal.fire({
          title: 'Error',
          text: 'There was an issue completing your purchase. Please try again.',
          icon: 'error',
          confirmButtonText: 'OK',
        });
      } finally {
        setLoading(false);
      }
    }
  };


  return (
    <div className="container mx-auto py-24 flex justify-center">
      <div className="w-1/2 p-4">
        <h1 className="text-4xl font-bold mb-4">Billing for {plan.plan} Plan</h1>
        <div className="border p-4 rounded mb-4">
          <h2 className="text-3xl mb-2">{plan.plan}</h2>
          <p className="text-xl mb-2">Price: {plan.price}/mo</p>
          <h3 className="text-2xl mb-2">Features:</h3>
          <ul>
            {plan.features.map((feature, index) => (
              <li key={index} className="text-lg">
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-1/2 p-4">
        <h2 className="text-4xl font-bold mb-4">Billing Information</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="card">
              Credit Card
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="card"
              type="text"
              placeholder="Card Number"
              value={formData.card}
              onChange={handleInputChange}
              required
            />
          </div>
          <Button label={loading ? "Processing..." : "Complete Purchase"} type="submit" disabled={loading} />
          <button onClick={goBack} className="mt-4 ml-1.5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl focus:outline-none focus:shadow-outline">
            Go Back
          </button>
        </form>
      </div>
    </div>
  );
}

export default Billing;
