import Image from "next/image";
import styles from "../styles/Products.module.css";
import Link from "next/link";

const Product = ({ product }) => {
  const { title, price, image, id } = product;
  return (
    <div className={styles.product}>
      <div className="">
        <Image src={image} width="200" height="200" />
      </div>

      <ul>
        <br />
        <li>{title}</li>
        <br />
        <li>{price}$</li>
      </ul>

      <Link href={`/products/${id}`}>
        <a className="button">More Details</a>
      </Link>
    </div>
  );
};

export default Product;
