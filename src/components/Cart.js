import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from "./Card";
import { clearCart } from '../utils/cartSlice';

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <div className='w-6/12 m-auto p-2'>
            <div className='text-center'>
                <button className="px-4 my-4 py-2.5 border-none rounded text-white text-sm font-medium bg-rose-500 hover:bg-rose-600 cursor-pointer duration-500" onClick={handleClearCart}>Clear Cart</button>
                {cartItems.length === 0 && <h5> Your cart is empty! Add items to your cart </h5>}
            </div>
            <Card items={cartItems} />
        </div>
    );
}

export default Cart;
