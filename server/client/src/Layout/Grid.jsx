import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr repeat(12, minmax(auto, 4.2rem)) 1fr;
  grid-template-rows: max-content;

  gap: ${(props) => (props.gapDefault ? props.gapDefault : '2rem 2rem')};
  margin: ${(props) => (props.marginDefault ? props.marginDefault : 0)};

  @media ${(props) => props.theme.breakpoints.down.md} {
    grid-template-columns: 2rem repeat(6, 1fr) 2rem;
    gap: ${(props) => (props.gapMedium ? props.gapMedium : '1rem 1rem')};
    margin: ${(props) => (props.marginMedium ? props.marginMedium : 0)};
  }

  @media ${(props) => props.theme.breakpoints.down.sm} {
    grid-template-columns: 1rem repeat(6, 1fr) 1rem;
    gap: ${(props) => (props.gapSmall ? props.gapSmall : '1rem 1rem')};
    margin: ${(props) => (props.marginSmall ? props.marginSmall : 0)};
  }
`;

export default Grid;

/*

  *to customize :

  !grid-template-rows:  
     - vh : for row with "repensive Height" . 
     - min-content (auto) : making the row grow to fit the content .
        ⚠ : the height is controled by Media queries 
     - vw : for row with "repensive width" .

  
  !grid-template-columns: 
    - fix 12 columns : 1440 / 12 : 120 ~ 12rem
    - fix 12 columns : 1440 / 8 : 142.5 ~ 14rem
    - minmax(6rem, 1fr) : centerWidth section will always be centred - with minnimum of 6 rem .
    
*/
