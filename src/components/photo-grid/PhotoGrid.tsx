import styled from '@emotion/styled';
import React from 'react';
import { PhotoType } from 'redux/photos/types';
import { Photo } from '../photo/Photo';

interface PhotoGripProps {
  photos: PhotoType[];
}

const Container = styled.div`
  width: 100%;
  column-count: 5;
  column-gap: 0;
`;

export const PhotoGrid: React.FC<PhotoGripProps> = ({ photos }) => (
  <Container>
    {photos.map((photo) => (
      <Photo photo={photo} thumbnail key={photo.image} />
    ))}
  </Container>
);
