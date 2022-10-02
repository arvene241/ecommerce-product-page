import { useState } from "react";
import Header from "./components/Header";
import ProductDetails from "./components/ProductDetails";
import ProductImages from "./components/ProductImages";
import ProductPage from "./components/ProductPage";
import products from "./data/productData";
import GlobalStyle from "./GlobalStyle";
import useBreakpoints from "./hooks/useBreakpoints";

function App() {
  const product = products[0];

  const { isDesktop } = useBreakpoints();

  return (
    <>
      <GlobalStyle />
      <Header />
      <ProductPage>
        <ProductImages images={product.images} />
        <ProductDetails
          company={product.company}
          title={product.title}
          desc={product.desc}
          discount={product.discount}
          price={product.price}
          orig_price={product.orig_price}
        />
      </ProductPage>
    </>
  );
}

export default App;
