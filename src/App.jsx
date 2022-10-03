import { useState } from "react";
import Header from "./components/Header";
import ProductDetails from "./components/ProductDetails";
import ProductImages from "./components/ProductImages";
import ProductPage from "./components/ProductPage";
import { CartProvider } from "./context/CartContext";
import products from "./data/productData";
import GlobalStyle from "./GlobalStyle";
import useBreakpoints from "./hooks/useBreakpoints";

function App() {
  const product = products[0];

  const { isDesktop } = useBreakpoints();

  return (
    <CartProvider>
      <GlobalStyle />
      <Header />
      <ProductPage>
        <ProductImages images={product.images} />
        <ProductDetails product={product} />
      </ProductPage>
    </CartProvider>
  );
}

export default App;
