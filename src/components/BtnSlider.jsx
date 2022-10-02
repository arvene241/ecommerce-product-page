import React from "react";
import left from "../assets/images/icon-previous.svg";
import right from "../assets/images/icon-next.svg";

const ButtonSlider = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 100%;
  background: #f1f1f1;
  border: 1px solid rgba(34, 34, 34, 0.287);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  img {
    pointer-events: none;
  }

  &.prev {
    padding-right: 4px;
    top: 50%;
    left: 20px;
    transform: translateY(-60%);
  }

  &.next {
    padding-left: 4px;
    top: 50%;
    right: 20px;
    transform: translateY(-60%);
  }

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

const BtnSlider = ({ direction, moveSlide }) => {
  return (
    <ButtonSlider
      onClick={moveSlide}
      className={direction === "next" ? "next" : "prev"}
    >
      <img src={direction === "next" ? right : left} />
    </ButtonSlider>
  );
};

export default BtnSlider;
