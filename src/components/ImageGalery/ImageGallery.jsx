import React from 'react';
import ImageGalleryItem from 'components/ImageGaleryItem/ImageGalleryItem';
import { ImgGallaryList, ContainerList } from './ImageGallery.styled';

export default function ImageGallery({ items,  getLargeImg }) {
  return (
    <ContainerList>
    <ImgGallaryList>
      {items.map(item => (
        <ImageGalleryItem item={item} key={item.id} getLargeImg = {getLargeImg} />
      ))}
    </ImgGallaryList>
    </ContainerList>
  );
}
