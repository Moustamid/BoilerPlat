import React, { useEffect, useState } from 'react';

//- styled components :
import {
  Nav,
  Container,
  LogoBox,
  NavMenu,
  NavItem,
  Ancker,
  Logo,
} from './navbar.styles';
//-Links Data :
import { navLinks } from '../../data/NavLinks';
//-Compoenents :
import GoogleBtn from '../GoogleBtn';

const Navbar = () => {
  // -Hooks :
  const [active, setActive] = useState(false);

  useEffect(() => {
    //    effect
    window.addEventListener('scroll', handleScroll);

    return () => {
      //    cleanup
      window.addEventListener('scroll', handleScroll);
    };
  }, []);

  // -helpers :
  const handleScroll = () => {
    const customScrollHeight = 600;

    if (window.scrollY >= customScrollHeight) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  return (
    <Nav as="nav" active={active} gapDefault={'0rem 6rem'}>
      <Container s={2} e={12}>
        {/* Menu logo */}
        <LogoBox>
          <Ancker to="/">
            <Logo src="/logo.png" alt="logo" />
          </Ancker>
        </LogoBox>
        {/* Links */}
        <NavMenu>
          {navLinks.map((link, index) => (
            <NavItem key={index} active={active}>
              <Ancker to={link.path}>{link.title}</Ancker>
            </NavItem>
          ))}
        </NavMenu>
        {/* Humburger Menu  */}
        {/* Popup Button */}
        {/* <PopupButton active={active}>
          <a href="/">Order Now</a>
        </PopupButton> */}
        {/* Google Btn */}
        <GoogleBtn />
      </Container>
    </Nav>
  );
};

export default Navbar;
