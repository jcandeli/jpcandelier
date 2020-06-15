import React from 'react';
import { PhotoGrid } from './PhotoGrid';
import photos from '../../photoDB';

export default {
  title: 'Photo Grid',
};

export const PhotoGridStory = () => <PhotoGrid photos={photos} />;
