import React, { useState } from "react";
import { FOOD_LOGO } from "../utils/constants";
import { Link } from "react-router-dom";

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
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About us</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li><Link to='/about'>Cart</Link></li>
                    <button className="button" onClick={loginLogoutClick}>{btnType}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;