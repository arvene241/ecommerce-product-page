import React from "react";
import styled from "styled-components";

const ButtonStyle = styled.button`
  background-color: var(--primary-color);
  border-radius: 10px;
  font-weight: 700;
  height: 3.5rem;
  width: 100%;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 20px 50px -20px var(--primary-color);
  transition: background-color 0.3s ease 0s;

  p {
    font-size: 1rem;
    color: #fff;
    font-weight: 700;
  }

  :hover {
    opacity: 0.9;
  }

  svg {
    width: 22px;
    height: 20px;
    color: #fff;
  }
`;

const Button = ({ icon, title, addToCart }) => {
  return (
    <ButtonStyle onClick={addToCart}>
      {icon}
      <p>{title}</p>
    </ButtonStyle>
  );
};

export default Button;
