import React, { Component } from 'react';
import {
    createBrowserRouter,
} from "react-router";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/Error/ErrorPage';
import Home from '../Pages/Home/Home';

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                path: '/',
                loader: () => fetch('booksData.json'),
                Component: Home
            },
            {
                path: 'about',
                Component: About
            }
        ]
    },
]);

