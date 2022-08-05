import React from 'react';
import { GallaryListItem } from './ImageGalleryItem.styled';

export default function ImageGalleryItem({item, getLargeImg}) {
    const { webformatURL, largeImageURL } = item
    const getImgUrl = () =>{
      getLargeImg(largeImageURL)
    }
  return (
    <GallaryListItem >
      <img src= {largeImageURL} alt= {webformatURL} onClick={getImgUrl}  width="340" height="230"/>
    </GallaryListItem>
  );
}


