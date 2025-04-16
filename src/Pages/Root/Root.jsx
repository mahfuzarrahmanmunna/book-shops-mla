import React from 'react';
import { Outlet } from 'react-router';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

const Root = () => {
    return (
        <div>
            <div className='max-w-7xl mx-auto'>
                <Header />
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;