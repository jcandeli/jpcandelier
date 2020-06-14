import styled from '@emotion/styled';
import React from 'react';
import { PhotoType } from '../../types';

const Thumbnail = styled.img`
  object-fit: cover;
  width: 250px;
  height: 250px;
`;

const Image = styled.img`
  object-fit: cover;
  max-width: 90vw;
  max-height: 90vh;
`;

interface PhotoProps {
  photo: PhotoType;
  thumbnail: boolean;
}

export const Photo: React.FC<PhotoProps> = ({ photo, thumbnail }) => {
  const { category, title, image, location } = photo;
  const thumbs = thumbnail ? '/thumbs' : '';
  const Component = thumbnail ? Thumbnail : Image;
  return <Component src={`/img/${category}${thumbs}/${image}`} alt={`${title} - ${location}`} />;
};
