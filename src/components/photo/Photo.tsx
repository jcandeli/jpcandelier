import styled from '@emotion/styled';
import React from 'react';
import { PhotoType } from '../../types';

interface ThumbnailProps {
  url: string;
}

const Thumbnail = styled.div<ThumbnailProps>`
  width: 16%;
  padding-bottom: 16%;
  margin: 0.375% 0;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${(props) => props.url});
`;

const Image = styled.img`
  object-fit: cover;
  max-width: 90vw;
  max-height: 90vh;
`;

interface PhotoProps {
  photo: PhotoType;
  thumbnail: boolean;
  onPhotoClick: (photo: PhotoType) => void;
}

export const Photo: React.FC<PhotoProps> = ({ photo, thumbnail, onPhotoClick }) => {
  const { category, title, image, location } = photo;

  return thumbnail ? (
    <Thumbnail
      url={`/img/${category}/thumbs/${image}`}
      onClick={() => onPhotoClick(photo)}
    />
  ) : (
    <Image src={`/img/${category}/${image}`} alt={`${title} - ${location}`} />
  );
};
