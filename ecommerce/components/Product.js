import Image from "next/image";
import styles from "../styles/Products.module.css";
import Link from "next/link";
import { CartContext, CART_ITEM } from "./context/CartProvider";
import { useContext } from "react";
import { Button } from "semantic-ui-react";

const Product = ({ product }) => {
  const { title, price, image, id } = product;
  const cart = useContext(CartContext);
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

      <ul>
        <li>
          <Link href={`/products/${id}`}>
            <a className="button">More Details</a>
          </Link>
        </li>
        <li>
          <a className="button hover-item"
            onClick={() => cart.dispatch({ type: CART_ITEM.ADD_ITEM, payload: { id, title, image, price } })}>
            Add to cart
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Product;
