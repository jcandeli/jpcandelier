import React from 'react';
import { PhotoType } from 'redux/photos/types';
import { Photo } from './Photo';
import photos from '../../photoDB';

export default {
  title: 'Photo',
};

// dummy data
const photo: PhotoType = photos[0];

export const Thumbnail = () => <Photo photo={photo} thumbnail />;
export const ScaledImage = () => <Photo photo={photo} />;
