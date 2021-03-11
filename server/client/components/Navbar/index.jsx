import React, { useEffect, useState } from 'react';
import Link from 'next/link';
//- styled components :
import {
  Nav,
  Container,
  LogoBox,
  Logo,
  NavMenu,
  NavItem,
  Ancker,
  PopupButton,
} from './navbar.styles';
//-Links Data :
import { navLinks } from '../../data/NavLinks';

const Navbar = () => {
  // -Hooks :
  const [active, setActive] = useState(false);

  useEffect(() => {
    console.log(active);
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
          <Link href="/">
            <Logo src="/next.svg" alt="logo" />
          </Link>
        </LogoBox>
        {/* Links */}
        <NavMenu>
          {navLinks.map((link, index) => (
            <NavItem key={index}>
              <Link href={link.path}>
                <Ancker active={active}>{link.title}</Ancker>
              </Link>
            </NavItem>
          ))}
        </NavMenu>
        {/* Humburger Menu  */}
        {/* Popup Button */}
        <PopupButton active={active}>
          <a href="#popup">Order Now</a>
        </PopupButton>
      </Container>
    </Nav>
  );
};

export default Navbar;
