
import React from 'react';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';



const Admin = () => {
    return (
        <div>
            <h1>Admin Panel</h1>
            <ul>
                <li>
                    <Link to="/admin/dashboard">Dashboard</Link>
                </li>
                <li>
                    <Link to="/admin/users">Users</Link>
                </li>
            </ul>
            {/* <BrowserRouter>
                <Routes>
                   
                </Routes>
            </BrowserRouter> */}
        </div>
    );
};

export default Admin;
