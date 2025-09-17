import React from 'react';
import Navbar from '../shared/Navbar';
import { Outlet } from 'react-router';
import Footer from '../shared/Footer';
import Toast from '../shared/Toast';

const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
             <Footer></Footer>
             <Toast></Toast>
        </div>
    );
};

export default Layout;