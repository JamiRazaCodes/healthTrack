// src/AdminPanel/AdminAuthCheck.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';

function AdminAuthCheck({ children }) {
  const [isAdmin, setIsAdmin] = useState(null);
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    const checkAdminStatus = async () => {
      const user = auth.currentUser;
      if (user) {
        // Replace this with your actual admin verification logic
        const token = await user.getIdTokenResult();
        if (token.claims.admin) {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
          navigate('/not-authorized');
        }
      } else {
        navigate('/auth'); 
      }
    };

    checkAdminStatus();
  }, [auth, navigate]);

  if (isAdmin === null) return <div>Loading...</div>;
  return isAdmin ? children : <div>Unauthorized Access</div>;
}

export default AdminAuthCheck;
