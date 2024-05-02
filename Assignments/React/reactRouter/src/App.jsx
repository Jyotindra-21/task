// src/App.js
import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const Admin = lazy(() => import('./Admin'));

const App = () => {
  const Dashboard = () => <div>Dashboard</div>;
  const Users = () => <div>Users</div>;
  return (
    <BrowserRouter>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/admin" element={<Admin />} />
            <Route path="/" element={<div>Home <Link to="/admin">Admin</Link></div>} />
            <Route path="/admin/dashboard" element={Dashboard} />
            <Route path="/admin/users" element={Users} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

export default App;

