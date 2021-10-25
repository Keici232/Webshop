import React from 'react'
import Image from "next/image";

const CartItem = ({ id }) => {

    return (
        <div>
            <Image src={id[0][2]} width="100" height="100" />
        </div>
    )
}

export default CartItem
