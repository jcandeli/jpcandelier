import styled from '@emotion/styled';
import React from 'react';

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(250, 250, 250, 0.74);
`;

const ModalBody = styled.div`

`;

interface ModalProps {
    onNextClick: Function;
    onPreviousClick: Function;
    onCloseClick: Function;
}

export const Modal: React.FC<ModalProps> = ({ onNextClick, onPreviousClick, onCloseClick }) => (
    <Overlay>
        <ModalBody
            onNextClick={onNextClick}
            onPreviousClick={onPreviousClick}
            onCloseClick={onCloseClick}
        >test</ModalBody>
    </Overlay>
);
