import React from "react";
import Link from "next/link";
import styles from "./../styles/Navbar.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
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
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
