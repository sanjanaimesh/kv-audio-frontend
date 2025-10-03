import React, { useEffect, useState } from 'react'

export const BookingItem = (props) => {
    const {itemKey,qty}= props;
    const [item, setItem] =useState(null);

    useEffect(()=>{

    },[])


  return (
    <div>
        <span>{itemKey}</span>
        <span>X {qty}</span>
    </div>
  )
}

