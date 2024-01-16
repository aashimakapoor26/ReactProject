import React, { useState, useContext } from "react";
import { FOOD_LOGO } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    const [btnType, setBtnType] = useState('Login');
    const loginLogoutClick = () => {
        btnType === 'Login'
            ? setBtnType('Logout')
            : setBtnType('Login');
    }

    const onlineStatus = useOnlineStatus();
    const emoji = onlineStatus ? <span>✅</span> : <span>🔴</span>;

    const data = useContext(UserContext);

    // Subscribing store through selector
    const cartItems = useSelector((store) => store.cart.items )


    return (
        <div className='flex justify-between mb-2 shadow'>
            <div className='self-center'>
                <img src={FOOD_LOGO} alt='logo' className='w-16 ml-4' />
            </div>
            <div>
                <ul className="flex mb-0 p-4 items-center">
                    {/* <li >Online Status: {emoji}</li> */}
                    <li className="px-2"><Link className="no-underline text-slate-500 hover:text-slate-900" to='/'>Home</Link></li>
                    <li className="px-2"><Link className="no-underline text-slate-500 hover:text-slate-900" to='/about'>About us</Link></li>
                    <li className="px-2"><Link className="no-underline text-slate-500 hover:text-slate-900" to='/contact'>Contact</Link></li>
                    <li className="px-2"><Link className="no-underline text-slate-500 hover:text-slate-900" to='/grocery'>Grocery</Link></li>
                    <li className="px-2"><Link className="no-underline text-slate-500 hover:text-slate-900" to='/cart'>Cart ({cartItems.length})</Link></li>
                    <button className="px-4 py-2.5 border-none rounded text-white text-sm font-medium bg-rose-500 hover:bg-rose-600 cursor-pointer duration-500" onClick={loginLogoutClick}>{btnType}</button>
                    {/* <li className="px-2">{data.loggedInUser}</li> */}
                </ul>
            </div>
        </div>
    )
}

export default Header;