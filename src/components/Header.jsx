import React, { useState, useContext } from "react";
import styled from "styled-components";
import logo from "../assets/images/logo.svg";
import menu from "../assets/images/icon-menu.svg";
import close from "../assets/images/icon-close.svg";
import cart from "../assets/images/icon-cart.svg";
import profile from "../assets/images/image-avatar.png";
import CartContext from "../context/CartContext";
import Cart from "./Cart";

const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  margin: 0 3rem;
  padding: 1.5rem 0;
  gap: 20px;

  @media screen and (min-width: 1024px) {
    border-bottom: 1px solid rgba(0, 0, 0, 10%);
    gap: 50px;
    margin: 0 10.5rem;
    padding: 2rem 0;
  }
`;

const Nav = styled.nav`
  background-color: var(--clr-background);
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.625rem;
  height: 100%;
  width: 65%;
  padding: 3rem 0 0 3rem;
  transform: translateX(-100%);
  transition: transform 0.3s ease 0s;
  position: absolute;
  top: 0px;
  left: 0px;

  &.open {
    display: block;
    transform: translateX(0px);
    z-index: 4;
  }

  ul {
    padding-top: 3rem;
    list-style: none;
    text-transform: capitalize;
  }

  li {
    padding-bottom: 20px;
    position: relative;
  }

  @media screen and (min-width: 1024px) {
    transform: unset;
    position: unset;
    padding: 0px;
    font-weight: 400;
    font-size: 1rem;

    ul {
      padding: 0px;
      display: flex;
      gap: 20px;
    }

    li {
      padding-bottom: 0;

      :hover a::after {
        width: 100%;
      }

      a::after {
        content: "";
        position: absolute;
        left: 0px;
        top: 4.2rem;
        height: 4px;
        width: 0px;
        background-color: var(--primary-color);
        transition: all 0.3s ease 0s;
      }
    }
  }
`;

const MenuIcon = styled.div`
  z-index: 5;
  cursor: pointer;

  img {
    vertical-align: bottom;
  }

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 20px;

  #profile {
    height: 2rem;
    width: 2rem;
    border-radius: 100%;
    cursor: pointer;

    :hover,
    :focus {
      outline: 2px solid var(--primary-color);
    }
  }

  @media screen and (min-width: 1024px) {
    gap: 50px;

    #profile {
      height: 3.2rem;
      width: 3.2rem;
    }
  }
`;

const Background = styled.div`
  display: none;
  background-color: var(--clr-lightbox);
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0px;
  left: 0px;
  z-index: 3;

  &.open {
    display: block;
  }

  @media screen and (min-width: 1024px) {
    &.open {
      display: none;
    }
  }
`;

const CartBubble = styled.div`
  display: flex;
  position: relative;
  cursor: pointer;
`;

const Count = styled.div`
  position: absolute;
  background-color: var(--primary-color);
  border-radius: 6.5px;
  color: var(--clr-background);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.625rem;
  font-weight: 700;
  height: 0.8125rem;
  line-height: 1;
  top: -2px;
  right: -6px;
  width: 1.1875rem;

  &.empty {
    display: none;
  }
`;

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const { openCart, total } = useContext(CartContext);

  return (
    <HeaderStyle>
      <Background className={toggle ? "open" : ""} />
      <MenuIcon onClick={() => setToggle(!toggle)}>
        <img src={toggle ? close : menu} />
      </MenuIcon>
      <img src={logo} />
      <Nav className={toggle ? "open" : ""}>
        <ul>
          {["collections", "men", "women", "about", "contact"].map((item) => (
            <li toggle={toggle} key={item}>
              <a href={`#${item}`} onClick={() => setToggle(!toggle)}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </Nav>
      <Right>
        <CartBubble
          onClick={() => {
            openCart();
          }}
        >
          <Count className={total == 0 && "empty"}>{total}</Count>
          <img id="cart" src={cart} />
        </CartBubble>
        <img id="profile" src={profile} />
      </Right>
      <Cart />
    </HeaderStyle>
  );
};

export default Header;
