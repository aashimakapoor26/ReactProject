import React, { useState } from "react";
import { FOOD_LOGO } from "../utils/constants";

const Header = () => {
    const [btnType, setBtnType] = useState('Login');
    const loginLogoutClick = () => {
        btnType === 'Login'
            ? setBtnType('Logout')
            : setBtnType('Login');
    }

    return (
        <div className='header'>
            <div className='logo-container'>
                <img src={FOOD_LOGO} alt='logo' className='logo' />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    <button className="button" onClick={loginLogoutClick}>{btnType}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;