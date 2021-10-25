import "../styles/globals.css";
import Layout from "../components/Layout";
import CartProvider from "../components/context/CartProvider";
import 'semantic-ui-css/semantic.min.css'

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </CartProvider>
  );
}

export default MyApp;
