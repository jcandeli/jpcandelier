import styled from '@emotion/styled';
import React from 'react';
import Link from 'next/link';

const Nav = styled.nav`
  padding: 10px;
`;

const Name = styled.div`
  font-size: 32px;
  display: inline-block;
  vertical-align: middle;
`;

const NavLinks = styled.nav`
  float: right;
  font-size: 36px;
`;

const Logo = styled.img`
  display: inline-block;
  vertical-align: middle;
  max-height: 40px;
  cursor: pointer;
`;

const StyledLink = styled.a`
  margin: 0 10px;
  display: inline-block;
  font-family: 'Bebas-Neue-Light';
  text-decoration: none;
`;

const LightText = styled.span`
  font-family: 'Bebas-Neue-Light';
  margin-left: 6px;
`;
const BoldText = styled.span`
  font-family: 'Bebas-Neue';
  margin-left: 6px;
`;

type Category = 'travel' | 'bands' | 'life';

interface HeaderProps {
  selectedCategory: Category,
  setSelectedCategory: (category: Category) => void;
}

export const Header: React.FC<HeaderProps> = ({ selectedCategory, setSelectedCategory }) => (
  <Nav>
    <Link href="/">
      <Logo src="/img/logo.svg" alt="logo" />
    </Link>

    <Name>
      <LightText>Candelier</LightText>
      <BoldText>Photography</BoldText>
    </Name>

    <NavLinks>
      <Link href="/gallery/travel" passHref>
        <StyledLink onClick={() => setSelectedCategory('travel')}>Travel</StyledLink>
      </Link>
      <Link href="/gallery/bands" passHref>
        <StyledLink onClick={() => setSelectedCategory('bands')}>Bands</StyledLink>
      </Link>
      <Link href="/gallery/life" passHref>
        <StyledLink onClick={() => setSelectedCategory('life')}>Life</StyledLink>
      </Link>
    </NavLinks>
  </Nav>
);

