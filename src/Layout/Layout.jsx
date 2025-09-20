import React from 'react';
import Navbar from '../shared/Navbar';
import { Outlet } from 'react-router';
import Footer from '../shared/Footer';
import Toast from '../shared/Toast';

const Layout = () => {
    return (
        <div className='min-h-screen grid grid-rows-[auto_1fr_auto]'>
            <Navbar></Navbar>
            <div className='flex-grow'>
            <Outlet></Outlet>
            </div>
             <Footer></Footer>
             <Toast></Toast>
        </div>
    );
};

export default Layout;