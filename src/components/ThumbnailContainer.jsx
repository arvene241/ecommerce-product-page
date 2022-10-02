import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 2rem;
  max-width: 445px;
`;

const ThumbnailImage = styled.div`
  cursor: pointer;
  position: relative;
`;

const Img = styled.img`
  border-radius: 10px;

  &.active {
    outline: 2px solid var(--primary-color);
  }
`;

const Overlay = styled.div`
  height: 88px;
  width: 88px;
  background-color: var(--clr-background);
  opacity: 0.75;
  border-radius: 10px;
  display: none;
  position: absolute;
  top: 0;
  transition: opacity 0.3s;

  ${ThumbnailImage}:hover & {
    display: block;
    opacity: 0.5;
  }

  &.active {
    display: block;
  }
`;

const ThumbnailContainer = ({ images, active, selectImage }) => {
  return (
    <Container>
      {images.map((image, index) => (
        <ThumbnailImage
          onClick={() => selectImage(image.id)}
          key={index}
        >
          <Img
            src={image.thumbnail}
            alt={image.alt}
            height="88"
            width="88"
            className={active === image.id ? "active" : ""}
          />
          <Overlay className={active === image.id ? "active" : ""} />
        </ThumbnailImage>
      ))}
    </Container>
  );
};

export default ThumbnailContainer;
