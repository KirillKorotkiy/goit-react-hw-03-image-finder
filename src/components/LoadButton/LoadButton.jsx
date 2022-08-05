import React from 'react';
import { LoadMore } from 'components/LoadButton/LoadButton.styled';

const LoadButton = ({onClick}) => {
  return (
      <LoadMore type='button' onClick={onClick}>Load more</LoadMore>
  );
};

export default LoadButton;


         
