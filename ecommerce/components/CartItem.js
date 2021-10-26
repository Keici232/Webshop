import React from "react";
import Image from "next/image";
import Product from "./Product";

import styles from "./../styles/Navbar.module.css";
import { Button, Icon } from "semantic-ui-react";
import Link from "next/link";

const CartItem = ({ id }) => {
  console.log(id);

  const acc = id.reduce((acc, prod) => (acc = acc + prod[3]), 0);
  console.log(acc);

  if (acc != 0) {
    return (
      <div>
        {id.map((prod) => (
          <div className={styles.container}>
            <ul key={prod[0]}>
              <li>
                <Image src={prod[2]} width="100" height="100" />
              </li>
              <li>
                <h4> {prod[1]} </h4>
              </li>

              <li>
                <h4> {prod[3]} </h4>
              </li>
              <li>
                <Button icon color="red" inverted>
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
              <h1>Total: {acc} $ </h1>
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
