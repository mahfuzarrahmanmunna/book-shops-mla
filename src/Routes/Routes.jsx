import React from 'react';
import {
    createBrowserRouter,
} from "react-router";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/Error/ErrorPage';

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <ErrorPage />
    },
]);

