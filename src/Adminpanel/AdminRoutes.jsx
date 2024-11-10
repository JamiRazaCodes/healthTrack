// src/AdminPanel/AdminRoutes.js
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './Dashboard';
import Orders from './Orders';
import Users from './Users';
import Products from './Products';
import AdminAuthCheck from './AdminAuthCheck';

function AdminRoutes() {
  return (
    <AdminAuthCheck>
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="orders" element={<Orders />} />
        <Route path="users" element={<Users />} />
        <Route path="products" element={<Products />} />
        <Route path="*" element={<Navigate to="/admin/dashboard" />} />
      </Routes>
    </AdminAuthCheck>
  );
}

export default AdminRoutes;
