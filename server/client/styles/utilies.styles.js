import styled, { css, keyframes } from 'styled-components';

//-Overlay :

export const Overlay = css`
  &::before {
    z-index: 2;
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.1) 0%,
      rgba(0, 0, 0, 0.1) 50%,
      rgba(0, 0, 0, 0.1) 100%
    );
  }
`;

//- Absodute Center

export const Center = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

//- Animations :

export const Pulseanimation = keyframes`

0% {
  transform: scale(0.8);
  opacity: 0;
}

50% {
  transform: scale(1);
  opacity: 1;
}

100% {
  transform: scale(1.2);
  opacity: 0;
}

`;
