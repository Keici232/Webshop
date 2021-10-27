import React from "react";
import Link from "next/link";
import styles from "../styles/Products.module.css";
import Image from "next/image";
import Product from "../components/Product";

export default function index({ products }) {
  return (
    <main className="container">
      <div className="main">
        {products.map((apiProduct) => (
          <Product key={apiProduct.id} product={apiProduct} />
          
        ))}
      </div>
    </main>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  return { props: { products: data } };
}
