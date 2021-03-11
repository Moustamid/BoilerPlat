export default {
  //- Media Query :
  breakpoints: {
    down: {
      xx: 'only screen and (max-width: 1400px)',
      xl: 'only screen and (max-width: 1200px)',
      lg: 'only screen and (max-width: 992px)',
      md: 'only screen and (max-width: 768px)',
      sm: 'only screen and (max-width: 576px)',
      xxs: 'only screen and (max-width: 320px)',
    },
  },
  colors: {
    primary: '#09194F',
    secondary: '#F2C94C',
    tertiary: '#00818A',
    yellow: '#fbb72c',
    white: '#ececec',
    black: '#000',
    grey: '#2e3131',
    whiteGrey: '#bfbfbf',
  },
  typography: {
    primary: "'Dancing Script', cursive",
    secondary: "'Ledger', serif",
    Poppins: "'Poppins', sans-serif",
    Lato: "'Lato', sans-serif;",
    subText001: '',
    subText002: '',
    dfs: '1.6rem',
  },
};

/*

? Max-width: Descktop First :

* XX-Large devices (larger desktops, 1400px and up)
! $xx-down: "only screen and (max-width: 1400px)";

* X-Large devices (large tablets, 1200px and up)
! $xl-down: "only screen and (max-width: 1200px)";

* Large devices (landscape tablets , 992px and up)
! $lg-down: "only screen and (max-width: 992px)";

* Medium devices (tablets, 768px and up)
! $md-down: "only screen and (max-width: 768px)";

* Small devices (landscape phones, 576px and up)
! $sm-down: "only screen and (max-width: 576px)";

* X-Small devices (portrait phones, less than 576px)
! $xxs-down: "only screen and (max-width: 320px)";

*/

/* 
* $breakpoint arguement choices :

- phone : 600px
- tab-port : 900px
- 1024 ✔
- tab-land : 1200px
- big-desktop : 1800
- 1920 ✔


- 1400 ✔
- 1200 ✔
- 900 ✔
- 600 X
- 500
- 400


! ORDER: Base + typography > general layout + grid > page layout > components

* remember : 1em = 16px  

? "em is the best option for media Queries" : exmple : 600px / 16px = 37.5em
*/
