import styled from 'styled-components';

const Row = styled.div`
  grid-column-start: ${(props) => (props.s ? props.s : '2')};
  grid-column-end: span ${(props) => (props.e ? props.e : '12')};

  @media ${(props) => props.theme.breakpoints.down.md} {
    grid-column-start: ${(props) => (props.sm ? props.sm : '2')};
    grid-column-end: span ${(props) => (props.em ? props.em : '6')};
  }

  @media ${(props) => props.theme.breakpoints.down.sm} {
    grid-column-start: ${(props) => (props.ss ? props.ss : '2')};
    grid-column-end: span ${(props) => (props.es ? props.es : '6')};
  }
`;

export default Row;
