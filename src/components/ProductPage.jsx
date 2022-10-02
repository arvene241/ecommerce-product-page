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
    gap: 125px;
    padding: 0 15rem;
  }
`;

const ProductPage = ({ children }) => {
  return <Main>{children}</Main>;
};

export default ProductPage;
