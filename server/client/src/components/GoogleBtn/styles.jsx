import styled from 'styled-components';

export const Btn = styled.div`
  position: relative;
  width: 184px;
  height: 42px;
  background-color: #4285f4;
  border-radius: 2px;
  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.25);
`;

export const Wrapper = styled.div`
  position: absolute;
  width: 40px;
  height: 42px;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const GoogleIcon = styled.img`
  position: absolute;
  margin-top: 11px;
  margin-left: 11px;
  width: 18px;
  height: 18px;
`;

export const BtnText = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  letter-spacing: 0.2px;
  font-family: 'Roboto';
  position: absolute;
  width: 100%;
  top: 50%;
  left: 78%;
  transform: translate(-50%, -50%);
`;
