import React, { useContext } from "react";
import styled from "styled-components";
import CartContext from "../context/CartContext";
import Button from "./Button";
import deleteIcon from "../assets/images/icon-delete.svg";
import IconButton from "./IconButton";

const Container = styled.div`
  font-weight: 400;
  width: 100%;
`;

const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.625rem;

  & img {
    border-radius: 4px;
  }
`;

const TextContainer = styled.div`
  font-size: 1rem;
  line-height: 1.625rem;
  margin: 0 auto 0 1rem;

  & span {
    color: var(--clr-headers);
    font-weight: 700;
  }
`;

const CartItem = ({ index, item }) => {
  const { total, deleteToCart } = useContext(CartContext);
  
  const product = item.product;
  const totalPrice = parseFloat(product.price) * total;

  return (
    <Container>
      <ProductContainer>
        <img src={product.images[0].thumbnail} height="50" width="50" />
        <TextContainer>
          <p>{product.title}</p>
          <p>
            {`$${product.price} x ${total}  `}
            <span>${totalPrice}</span>
          </p>
        </TextContainer>
        <IconButton icon={deleteIcon} handleClick={() => deleteToCart(index)} />
      </ProductContainer>
      <Button title="Checkout" />
    </Container>
  );
};

export default CartItem;
