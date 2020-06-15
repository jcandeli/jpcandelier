import React, { useState } from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { PhotoGrid } from '../../components/photo-grid/PhotoGrid';
import { Header } from '../../components/header/Header';
import { Footer } from '../../components/footer/Footer';
import photos from '../../photoDB';
import { PhotoType } from '../../types';

// TODO: move to global types
type Category = 'travel' | 'life' | 'bands';

interface GalleryProps {
  category: Category,
  photos: PhotoType[],
}

export const Gallery: React.FC<GalleryProps> = ({ category, photos }) => {
  const title = `JP Candelier Photography - ${category} photos`;
  const [selectedCategory, setSelectedCategory] = useState<Category>(category);
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoType | undefined>();

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
      </Head>
      <Header selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <PhotoGrid photos={photos} onPhotoClick={setSelectedPhoto} />
      <Footer />
    </>
  );
};

export const getStaticPaths = async () => (
  { paths: ['/gallery/travel', '/gallery/life', '/gallery/bands'], fallback: false }
);

export const getStaticProps: GetStaticProps = async ({ params }) => ({
  props: {
    photos: photos.filter((photo) => photo.category === params?.category),
    category: params?.category,
  },
});

export default Gallery;