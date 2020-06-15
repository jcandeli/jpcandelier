import styled from '@emotion/styled';
import React from 'react';
import { Photo } from '../photo/Photo';
import { PhotoType } from '../../types';

interface PhotoGripProps {
  photos: PhotoType[];
  onPhotoClick?: (photo: PhotoType) => void;
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 0.7%;
`;

export const PhotoGrid: React.FC<PhotoGripProps> = ({ photos, onPhotoClick = () => {} }) => (
  <Container>
    {photos.map((photo) => (
      <Photo photo={photo} thumbnail key={photo.image} onPhotoClick={onPhotoClick} />
    ))}
  </Container>
);
