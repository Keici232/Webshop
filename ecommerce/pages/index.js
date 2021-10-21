import React from "react";
import Link from "next/link";
import styles from "../styles/Products.module.css";
import Image from "next/image";

export default function products({ product }) {
  console.log(product);
  return (
    <div>
      <div className={styles.container}>
        {product.map((p) => (
          <ul>
            <Image
              width={200}
              height={200}
              key={p.id}
              src={p.image}
              alt={p.title}
            />
          </ul>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  return { props: { product: data } };
}
