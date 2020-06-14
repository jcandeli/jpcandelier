import styled from '@emotion/styled';
import React from 'react';

const Email = styled.div`
  display: inline-block;
  padding: 15px;
`;

const Github = styled.div`
  float: right;
  padding: 15px;
`;

const Icon = styled.img`
  vertical-align: middle;
  width: 30px;
  opacity: 0.75;
  &:hover {
    opacity: 1;
  }
`;

export const Footer = () => (
  <footer>
    <Email>
      <a href="mailto:jpcandelier@gmail.com">
        <Icon src="/img/email.svg" alt="JP Candelier email" />
      </a>
      <span className="inline-block padded-sm-left">jpcandelier&#64;gmail.com</span>
    </Email>

    <Github>
      <a
        href="https://github.com/jcandeli/jpcandelier"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>source code</span>
        <Icon src="/img/github-logo.svg" alt="JP Candelier Github" />
      </a>
    </Github>
  </footer>
);
