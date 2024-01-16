import React, { lazy, Suspense, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Error from './pages/Error';
import RestaurantMenu from './components/RestaurantMenu';
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Cart from './components/Cart';
// import Grocery from './components/Grocery/Grocery';

// lazy loading
const Grocery = lazy(() => import('./components/Grocery/Grocery'));
const AppLayout = () => {

    // authentication code
    const [userName, setUserName] = useState('');

    useEffect(() => {
        const data = {
            name: "Aashi"
        }
        setUserName(data.name)
    }, []);

    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{ loggedInUser: userName }}>
                <div className='app'>
                    <Header />
                    <Outlet />
                </div>
            </UserContext.Provider>
        </Provider>
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
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h2>Loading...</h2>}><Grocery /></Suspense>
            },
            {
                path: "/cart",
                element: <Cart />
            },
        ],
        errorElement: <Error />
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);