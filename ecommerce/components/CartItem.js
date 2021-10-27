import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import Product from "./Product";
import { CartContext, CART_ITEM } from "./context/CartProvider";
import styles from "./../styles/Navbar.module.css";
import { Button, Icon } from "semantic-ui-react";
import Link from "next/link";

const CartItem = ({ id }) => {
    const cart = useContext(CartContext);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const acc = id.reduce((acc, prod) => (acc = acc + prod.price), 0);
        setTotalPrice(acc);

    }, [cart])

    if (totalPrice != 0) {
        return (
            <div>
                {id.map((prod) => (
                    <div className={styles.container}>
                        <ul key={prod.id}>
                            <li>
                                <Image src={prod.image} width="100" height="100" />
                            </li>
                            <li>
                                <h4> {prod.title} </h4>
                            </li>

                            <li>
                                <h4> {prod.price} </h4>
                            </li>
                            <li>
                                <Button icon color="red" inverted
                                    onClick={() => cart.dispatch({ type: CART_ITEM.REMOVE_ITEM, payload: { id: prod.id } })}>
                                    <Icon name="trash" />
                                </Button>
                            </li>
                        </ul>
                    </div>
                ))}
                <div className={styles.container}>
                    {" "}
                    <ul style={{ marginTop: "30px" }}>
                        <li>
                            {" "}
                            <h1>Total: {totalPrice} $ </h1>
                        </li>{" "}
                        <li>
                            <Link href="/">
                                <Button icon color="green" inverted>
                                    <Icon> OK</Icon>
                                </Button>
                            </Link>
                        </li>{" "}
                    </ul>{" "}
                </div>
            </div>
        );
    } else {
        return (
            <div className="container">
                <h1>Du har inte köpt något</h1>
            </div>
        );
    }
};

export default CartItem;
