import React, { useState, useContext } from "react";
import styled from "styled-components";
import minus from "../assets/images/icon-minus.svg";
import plus from "../assets/images/icon-plus.svg";
import { BsCart3 } from "react-icons/bs";
import IconButton from "./IconButton";
import Button from "./Button";
import CartContext from "../context/CartContext";

const Details = styled.div`
  padding: 1.5rem;

  .company {
    letter-spacing: 1.8px;
    text-transform: uppercase;
    color: var(--primary-color);
  }

  .title {
    margin: 10px 0;
    color: var(--clr-headers);
    font-size: 1.75rem;
    line-height: 2rem;

    @media (min-width: 768px) {
      font-size: 2.75rem;
      line-height: 3rem;
    }
  }
`;

const Price = styled.div`
  margin-top: 1.5rem;
  display: flex;
  align-items: center;

  @media (min-width: 1024px) {
    width: 11rem;
    flex-wrap: wrap;
    row-gap: 10px;
  }

  .orig_price {
    flex: 1;
    text-align: end;
    text-decoration: line-through;
    font-weight: 700;
    color: var(--clr-price);

    @media (min-width: 1024px) {
      flex: none;
    }
  }

  .discount {
    background-color: var(--secondary-color);
    border-radius: 6px;
    color: var(--primary-color);
    display: inline-block;
    font-weight: 700;
    line-height: 1.25rem;
    margin: 0px auto 0px 1rem;
    padding: 3.5px 8px;
  }
`;

const Cart = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const CartCount = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--clr-input-bg);
  border-radius: 10px;
  height: 3.5rem;
  width: 100%;

  @media (min-width: 1024px) {
    width: 15rem;
  }

  button {
    padding: 1rem 1.5rem;

    img {
      vertical-align: middle;
    }

    :hover {
      opacity: 0.7;
    }
  }

  p {
    font-weight: 700;
    color: #000;
  }
`;

const ProductDetails = ({ product }) => {
  const [count, setCount] = useState(0);
  const { addToCart } = useContext(CartContext);

  const handleMinus = () => {
    if (count == 0) {
      setCount(0);
    } else {
      setCount((prev) => prev - 1);
    }
  };

  const handlePlus = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <Details>
      <h2 className="company">{product.company}</h2>
      <h1 className="title">{product.title}</h1>
      <p>{product.desc}</p>
      <Price>
        <h1 className="price">{product.price}</h1>
        <p className="discount">{product.discount}</p>
        <p className="orig_price">{product.orig_price}</p>
      </Price>
      <Cart>
        <CartCount>
          <IconButton icon={minus} handleClick={handleMinus} />
          <p>{count}</p>
          <IconButton icon={plus} handleClick={handlePlus} />
        </CartCount>
        <Button
          icon={<BsCart3 />}
          title="Add to cart"
          addToCart={() => addToCart(product, count)}
        />
      </Cart>
    </Details>
  );
};

export default ProductDetails;
