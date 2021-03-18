import React, { useEffect, useState } from 'react';
//.Redux:
import { connect } from 'react-redux';
//- styled components :
import {
  Nav,
  Container,
  LogoBox,
  NavMenu,
  NavItem,
  Ancker,
  Logo,
  PopupButton,
} from './styles.jsx';
//-Links Data :
import { navLinks } from '../../data/NavLinks';
//-Compoenents :
import GoogleBtn from '../GoogleBtn';
import Button from '../Button';

const Navbar = ({ auth }) => {
  //. SECTION: Hooks :
  const [active, setActive] = useState(false);

  useEffect(() => {
    //    effect
    window.addEventListener('scroll', handleScroll);

    return () => {
      //    cleanup
      window.addEventListener('scroll', handleScroll);
    };
  }, []);

  //. SECTION: Helpers:

  const renderContent = () => {
    switch (auth) {
      case null:
        return 'Still loading';
      case false:
        return <GoogleBtn />;

      default:
        return (
          <PopupButton active={active}>
            <a href="/api/logout">Logout</a>
          </PopupButton>
        );
    }
  };

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
          <Ancker to={auth ? '/survey' : '/'}>
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

        {/* Google Btn */}
        {/* */}
        {renderContent()}
      </Container>
    </Nav>
  );
};

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(Navbar);
