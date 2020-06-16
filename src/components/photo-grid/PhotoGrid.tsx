import styled from '@emotion/styled';
import React from 'react';
import { useTrail, animated } from 'react-spring';
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

const AnimatePhoto = animated(Photo);

export const PhotoGrid: React.FC<PhotoGripProps> = ({ photos, onPhotoClick = () => {} }) => {
  const trail = useTrail(photos.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: 0,
    from: { opacity: 0 },
  });

  return (
    <Container>
      {trail.map((styles, index) => (
        <AnimatePhoto photo={photos[index]} thumbnail key={index} style={styles} onPhotoClick={onPhotoClick} />
      ))}
    </Container>
  );
}
