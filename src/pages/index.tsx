import styled from '@emotion/styled';
import React from 'react';
import Link from 'next/link';
import photos from '../photoDB';
import { PhotoType } from '../types';
import { Photo } from '../components/photo/Photo';
import { Footer } from '../components/footer/Footer';

interface HomeProps {
  photos: PhotoType[];
}

const Panel = styled.div`
  left: calc(50% - 345px);
  top: 8%;
  position: absolute;
  text-align: center;
  background-color: #fbfbfb;
  padding: 140px 55px;
`;

const Name = styled.div`
  position: relative;
  margin: 100px 0;
  top: -30px;
  h1 {
    letter-spacing: 3px;
    margin: 0 0 15px 0;
    font-size: 56px;
    line-height: 24px;
    font-family: 'Bebas-Neue-Light';
  }

  h2 {
    letter-spacing: 1px;
    font-size: 56px;
    line-height: 24px;
    margin: 0;
  }
`;

const Links = styled.div`
  z-index: 99;
  position: relative;
`;

const StyledLink = styled.a`
  text-decoration: none;
  margin: 0 30px;
  letter-spacing: 15px;
  font-size: 36px;
  font-family: 'Bebas-Neue-Light';
`;

const Logo = styled.img`
  left: calc(50% - 225px);
  top: calc(50% - 225px);
  height: 450px;
  opacity: 0.07;
  z-index: 1;
  position: absolute;
`;

const Home: React.FC<HomeProps> = ({ photos }) => (
  <>
    <Panel>
      <Name>
        <h1>JP Candelier</h1>
        <h2>Photography</h2>
      </Name>

      <Links>
        <Link href="/gallery/travel" passHref>
          <StyledLink>Travel</StyledLink>
        </Link>{' '}
        &bull;{' '}
        <Link href="/gallery/bands" passHref>
          <StyledLink>Bands</StyledLink>
        </Link>{' '}
        &bull;{' '}
        <Link href="/gallery/life" passHref>
          <StyledLink>Life</StyledLink>
        </Link>
      </Links>

      <Logo src="/img/logo.svg" alt="logo" />
    </Panel>

    <div className="thumbs">
      {photos.map((photo) => (
        <Photo photo={photo} key={photo.image} thumbnail />
      ))}
    </div>

    <Footer />
  </>
);

export const getStaticProps = async () => ({
  props: {
    photos: photos.filter(photo => photo.home),
  },
});

export default Home;
