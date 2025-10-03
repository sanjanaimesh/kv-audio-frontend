import React, { useState } from 'react'
import { loadCart } from '../../utils/cart';
import { BookingItem } from '../../components/bookingItem';

export const BookingPage = () => {
    const [cart, setcart] = useState(loadCart());
    console.log(cart)

    function reloadCart(){
        setcart(loadCart());
    }

    return (
        <div className='w-full h-full bg-red-300 flex flex-col items-center'>
            <h1>Create booking</h1>
            <div className='w-full flex flex-col items-center'>
                {
                    cart.orderedItems.map((item, index) => (
                        <BookingItem itemKey={item.key}  key={item.key} qty={item.qty}/>
                    ))
                }
            </div>
        </div>
    )
}
