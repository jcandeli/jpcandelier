import React from 'react';
import { PhotoType } from 'redux/photos/types';
import { Photo } from '../photo/Photo';

interface PhotoGripProps {
  photos: PhotoType[];
}

export const PhotoGrid: React.FC<PhotoGripProps> = ({ photos }) => (
  <>
    {photos.map((photo) => (
      <Photo photo={photo} thumbnail key={photo.image} />
    ))}
  </>
);
