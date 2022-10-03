import React, { useContext } from "react";
import styled from "styled-components";
import CartContext from "../context/CartContext";

const Container = styled.div`
  border-radius: 10px;
  font-size: 1rem;
  margin: 0 0.5rem;
  width: calc(100% - 1rem);
  max-width: 22.5rem;
  position: absolute;
  top: 4.75rem;
  right: 0;
  background-color: var(--clr-background);
  box-shadow: 0px 20px 50px -20px hsla(220, 13%, 13%, 0.503143);
  z-index: 2;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;

  &.open {
    max-height: 100vh;
  }

  p {
    padding: 1.5rem 1.5rem 1.6875rem;
    font-weight: 700;
    line-height: 1.25rem;
    color: var(--clr-headers);
  }

  @media (min-width: 800px) {
    margin: 0 89px;
    top: 5.875rem;
  }
`;

const Contents = styled.div`
  border-top: 1px solid var(--clr-text);
  color: var(--clr-text);
  font-weight: 700;
  padding: 1.5rem 1.5rem 2rem;
  min-height: 11.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Cart = () => {
  const {cartOpen, items, openCart} = useContext(CartContext);

  return (
    <Container className={cartOpen ? "open" : ""}>
      <p>Cart</p>
      <Contents>
        {/* <CartItem></CartItem> */}
      </Contents>
    </Container>
  );
};

export default Cart;
