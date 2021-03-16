import styled, { css } from 'styled-components';
// import { Overlay } from '../../styles/utilies.styles';

//-HeroSlider : the wrapper isolate the slide from the Grid system
export const Slider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
`;

export const Slide = styled.div`
  min-width: 100%;
  height: 100%;
  transition: 0.5s;
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

export const wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  text-align: center;
  background-color: '#000';

  h1 {
    font-family: ${({ theme }) => theme.typography.primary};
    font-weight: 600;
    line-height: 6.5rem;
    font-size: 6rem;
    color: ${({ theme }) => theme.colors.white};
  }

  p {
    font-family: ${({ theme }) => theme.typography.secondary};
    color: ${({ theme }) => theme.colors.whiteGrey};
    font-weight: 400;
    font-size: 2rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;

//-Slider btn :

const SliderBtnBase = css`
  z-index: 10;
  font-size: 3rem;
  line-height: 1rem;
  outline: none;

  /* display: inline-block; */

  position: absolute;
  top: auto;
  right: 0;
  bottom: 0;
  left: auto;

  width: 65px;
  height: 84px;

  color: #000;
  border: none;
  background-color: #fff;

  &:hover {
    color: #fff;
    background-color: gold;
  }
`;

export const ButtonRight = styled.button`
  ${SliderBtnBase}
`;
export const ButtonLeft = styled.button`
  ${SliderBtnBase}
  right: 6rem;
`;
