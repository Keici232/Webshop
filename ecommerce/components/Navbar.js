import React from "react";
import Link from "next/link";
import styles from "./../styles/Navbar.module.css";

function Navbar() {
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
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
