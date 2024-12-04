import React from 'react';
import SteakBg from '../../images/steak_bg.jpg';
import CcArmy from '../../images/cc-army.jpg';
import TempuraUdon from '../../images/tempura-udon.jpeg';
import { PhotosContainer } from './PhotosElements';

const Photos = () => {
  const photoList = [
    { src: SteakBg, alt: 'Hibachi Steak' },
    { src: CcArmy, alt: 'CC and Army Roll'},
    { src: TempuraUdon, alt: 'Shrimp Tempura Udon Soup'},
  ];

  return (
    <PhotosContainer>
      {photoList.map((photo, index) => (
        <img key={index} src={photo.src} alt={photo.alt} />
      ))}
    </PhotosContainer>
  );
};

export default Photos;
