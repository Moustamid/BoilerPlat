import styled from 'styled-components';

export const AnchorTag = styled.a`
  &,
  &:link,
  &:visited {
    outline: none;
    display: inline-block;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    padding: 0.7rem 4rem;
    border-radius: 10rem;
    position: relative;
    overflow: hidden;
    font-size: ${({ theme }) => theme.typography.Poppins};
    border: 2px solid #fff;
    cursor: pointer;
    color: #fff;
  }
`;

/*

display: inline-block;
  text-decoration: none;
  padding: 15px 30px;
  color: ${({ color }) => color};
  font-size: 18px;
  letter-spacing: 3px;
  border: 2px solid ${({ color }) => color};
  text-transform: uppercase;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  
  */
