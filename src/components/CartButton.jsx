import React from "react";

const CartButton = ({ icon, handleClick }) => {
  return (
    <button onClick={handleClick}>
      <img src={icon} />
    </button>
  );
};

export default CartButton;
