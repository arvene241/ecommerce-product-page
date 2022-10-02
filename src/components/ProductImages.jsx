import React, { useState } from "react";
import useBreakpoints from "../hooks/useBreakpoints";
import ProductImagesDesktop from "./ProductImagesDesktop";
import ProductImagesMobile from "./ProductImagesMobile";

const ProductImages = ({ images }) => {
  const [active, setActive] = useState(1);
  const { isDesktop } = useBreakpoints();

  const selectImage = (id) => {
    setActive(id);
  };

  const nextSlide = () => {
    if (active !== images.length) {
      setActive(active + 1);
    } else if (active === images.length) {
      setActive(1);
    }
  };

  const prevSlide = () => {
    if (active !== 1) {
      setActive(active - 1);
    } else if (active === 1) {
      setActive(images.length);
    }
  };

  return (
    <div>
      {isDesktop ? (
        <ProductImagesDesktop
          images={images}
          active={active}
          activeImage={images[active - 1].prod}
          selectImage={(id) => selectImage(id)}
        />
      ) : (
        <ProductImagesMobile
          images={images}
          active={active}
          nextSlide={nextSlide}
          prevSlide={prevSlide}
        />
      )}
    </div>
  );
};

export default ProductImages;
