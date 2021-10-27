import React from "react";
import Link from "next/link";
import styles from "./../styles/Navbar.module.css";
import { Icon, Menu } from "semantic-ui-react";
import { useContext } from "react";
import { CartContext } from "./context/CartProvider";

function Navbar() {
  const { state: items } = useContext(CartContext);

  const acc = items.length;


  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.logo}>HASHOP</div>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="contacts">
              <a>Contact</a>
            </Link>
          </li>
          <li>
            <Link href="orders">
              <a>Mina bestälningar</a>
            </Link>
          </li>
          <li>
            < Link href="/shoppingBag" >
              <Menu.Item>
                <Icon name="shopping cart" />
                {acc}
              </Menu.Item>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
