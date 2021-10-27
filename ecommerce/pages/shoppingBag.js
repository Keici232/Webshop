import React from "react";
import { useContext } from "react";
import CartItem from "../components/CartItem";
import { CartContext } from "../components/context/CartProvider";

const shoppingBag = ({ id, title, image, price }) => {
  const { state: items } = useContext(CartContext);
  console.log(items);

  if (!items) {
    return <div>bbbb</div>;
  } else {
    return (
      <div className="container">
        <CartItem key={items} id={items} />
      </div>
    );
  }
};

export default shoppingBag;
