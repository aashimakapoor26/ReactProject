import React, { Component } from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Body from './components/Body';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Error from './pages/Error';
import RestaurantMenu from './components/RestaurantMenu';

const AppLayout = () => {
    return (
        <div className='app'>
            <Header />
            <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            }
        ],
        errorElement: <Error />
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);