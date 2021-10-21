import Product from "../../components/Product";
import Image from "next/image";
import styles from "./../../styles/singleProduct.module.css";

const singleProduct = ({ product }) => {
  const { title, id, image, price, description, category } = product;
  return (
    <div className="container">
      <div className={styles.product}>
        <div>
          {" "}
          <Image src={image} width="300" height="500" />
        </div>
        <div className={styles.info}>
          <h1>{title}</h1>
          <br />

          <p>{description}</p>
          <br />
          <h1>Price: ${price}</h1>
        </div>
      </div>
    </div>
  );
};

export default singleProduct;

export async function getStaticPaths() {
  const req = await fetch("https://fakestoreapi.com/products");
  const products = await req.json();
  const paths = products.map((Product) => {
    return {
      params: { id: Product.id.toString() },
    };
  });

  return { paths, fallback: false };
}

export async function getStaticProps(ids) {
  const id = ids.params.id;
  const req = await fetch("https://fakestoreapi.com/products/" + id);
  const product = await req.json();

  return { props: { product } };
}
