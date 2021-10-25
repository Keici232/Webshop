import React from 'react';
import { useContext } from "react";
import CartItem from '../components/CartItem';
import { CartContext } from "../components/context/CartProvider";

const shoppingBag = ({ id, title, image, price }) => {
    const { state: items } = useContext(CartContext);
    console.log(items);
    return (
        <div>
            <CartItem key={items} id={items} />
        </div>
    )
}

export default shoppingBag
