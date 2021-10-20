import React from "react";
import Link from "next/link";
import styles from "../../styles/Products.module.css";

function getAllProducts({ product }) {
  return (
    <div>
      <h1>Choose a product</h1>

      <div className={styles.container}>
          {product.map((p) => (
            <ul>
              <li>{p.id}</li>
            </ul>
          ))}
      </div>
    </div>
  );
}

export default getAllProducts;

export async function getStaticProps() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  return { props: { product: data } };
}
