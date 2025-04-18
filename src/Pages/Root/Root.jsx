import React from 'react';
import { Outlet } from 'react-router';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

const Root = () => {
    return (
        <div>
            <Header />
            <div className='lg:max-w-7xl lg:mx-auto max-w-full'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;