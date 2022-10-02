import React from 'react'
import styled from "styled-components";
import ThumbnailContainer from './ThumbnailContainer';

const Container = styled.div`
  width: 445px;
`;

const Image = styled.img`
  border-radius: 15px;
  cursor: pointer;
`;

const ProductImagesDesktop = ({ images, active, activeImage, selectImage }) => {
  return (
    <Container>
      <Image src={activeImage} alt={images.alt} height="445" width="445" />
      <ThumbnailContainer images={images} active={active} selectImage={(id) => selectImage(id)} />
    </Container>
  )
}

export default ProductImagesDesktop