import React from "react";

const IconButton = ({ icon, handleClick }) => {
  return (
    <button onClick={handleClick}>
      <img src={icon} />
    </button>
  );
};

export default IconButton;
