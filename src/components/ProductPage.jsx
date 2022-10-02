import React from "react";
import styled from "styled-components";

const Main = styled.main`
  margin: 0px auto;
  max-width: 550px;
  min-height: calc(100vh - 4rem);

  @media screen and (min-width: 1024px) {
    max-width: unset;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 0 clamp(3rem, 12%, 13rem);
  }

  @media screen and (min-width: 1440px) {
    gap: 125px;
  }
`;

const ProductPage = ({ children }) => {
  return <Main>{children}</Main>;
};

export default ProductPage;
