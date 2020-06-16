import React from 'react';
import { PhotoGrid } from '../photo-grid/PhotoGrid';
import { Modal } from './Modal';
import photos from '../../photoDB';

export default {
  title: 'Modal',
};

export const ModalStory = () => (
  <>
    <PhotoGrid photos={photos} />
    <Modal onNextClick={() => {}} onPreviousClick={() => {}} onCloseClick={() => {}} />
  </>
);
