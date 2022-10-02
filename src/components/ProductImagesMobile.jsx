import React from "react";
import styled from "styled-components";
import BtnSlider from "../../../ecommerce/src/components/BtnSlider";

const Container = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
  overflow: hidden;
`;

const Slide = styled.div`
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity ease-in-out 0.4s;
  position: absolute;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media screen and (min-width: 546px) {
      border-radius: 15px;
    }
  }

  &.active-anim {
    opacity: 1;
  }
`;

const ProductImagesMobile = ({ images, active, nextSlide, prevSlide }) => {
  return (
    <Container>
      {images.map((obj, index) => (
        <Slide
          key={index}
          className={active === index + 1 ? "active-anim" : ""}
        >
          <img src={`/src/assets/images/image-product-${index + 1}.jpg`} />
        </Slide>
      ))}

      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />
    </Container>
  );
};

export default ProductImagesMobile;
