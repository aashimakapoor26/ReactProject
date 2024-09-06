import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe('Header test cases', () => {
    test('Should load header component with login button', () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        ) // it doesn't understand redux part -> hence we need to provide store and Router to the header

        const loginButton = screen.getByRole('button', { name: "Login" });
        // const loginButton = screen.getByText('Login'); // alternate way
        expect(loginButton).toBeInTheDocument();
    });

    test('Should render header component with o items in cart', () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        ) // it doesn't understand redux part -> hence we need to provide store and Router to the header

        const cartItems = screen.getByText('Cart (0)');
        // const loginButton = screen.getByText('Login'); // alternate way
        expect(cartItems).toBeInTheDocument();
    });

    test('Should render header component with a cart item', () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        ) // it doesn't understand redux part -> hence we need to provide store and Router to the header

        const cartItems = screen.getByText(/Cart/); //can use regex
        // const loginButton = screen.getByText('Login'); // alternate way
        expect(cartItems).toBeInTheDocument();
    });

    test('Should change login button to logour on click', () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        ) // it doesn't understand redux part -> hence we need to provide store and Router to the header

        const loginButton = screen.getByRole('button', { name: "Login" });
        fireEvent.click(loginButton);
        const logoutButton = screen.getByRole('button', { name: "Logout" });
        expect(logoutButton).toBeInTheDocument();
    });
});
