import { useState } from "react";
import Header from "./components/Header";
import ProductDetails from "./components/ProductDetails";
import ProductImages from "./components/ProductImages";
import ProductPage from "./components/ProductPage";
import products from "./data/productData";
import GlobalStyle from "./GlobalStyle";

function App() {
  const product = products[0];

  return (
    <>
      <GlobalStyle />
      <Header />
      <ProductPage>
        <ProductImages images={product.images} />
        <ProductDetails
          company={product.company}
          title={product.name}
          desc={product.description}
          discount={product.discount}
          price={product.price}
          orig_price={product.orig_price}
        />
      </ProductPage>
    </>
  );
}

export default App;
