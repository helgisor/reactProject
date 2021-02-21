import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';

const Navbar = styled.nav`
  height: 60px;
  padding: 0rem calc((100vw - 1300px) / 2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  backdrop-filter: blur(1px);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9999;
`;

const Logo = styled(Link)`
  color: #fff;
  padding-left: 1rem;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  font-style: italic;
`;

const NavItems = styled.div``;

const NavbarLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 1rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: -0.6rem;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursoer: pointer;
  }
  @media screen and (max-width: 600px) {
    top: -0.1rem;
    right: 0;
  }
  @media (max-width: 400px) {
    color: #55bcc9 !important;
  }
`;

const Header = ({ toggle }) => {
  const scrollBackToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  function scrollToProjects() {
    let scrollToElement = document.querySelector('.wrapper');
    scrollToElement.scrollIntoView();
  }

  function scrollToAbout() {
    let scrollToElement = document.querySelector('.about');
    scrollToElement.scrollIntoView();
  }

  function scrollToSkills() {
    let scrollToElement = document.querySelector('.skills');
    scrollToElement.scrollIntoView();
  }

  function scrollToContact() {
    let scrollToElement = document.querySelector('.contactMe');
    scrollToElement.scrollIntoView();
  }

  useEffect(() => {
    window.onscroll = function () {
      scrollFunction();
    };

    function scrollFunction() {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        document.querySelector('.navBar').classList.add('pop_out');
        document.querySelector('.navBar').classList.remove('pop_in');

        document.querySelector('.logo').classList.remove('navColorUp');
        document.querySelector('.logo').classList.add('navColorDown');
      } else if (window.top) {
        document.querySelector('.navBar').classList.remove('pop_out');
        document.querySelector('.navBar').classList.add('pop_in');

        document.querySelector('.logo').classList.add('navColorUp');
        document.querySelector('.logo').classList.remove('navColorDown');
      }
    }
  }, []);

  return (
    <Navbar className='navBar'>
      <Logo onClick={scrollBackToTop} className='logo'>
        OlegK
      </Logo>
      <NavItems>
        <NavbarLink className='hvr-underline-reveal' onClick={scrollToAbout}>
          About
        </NavbarLink>
        <NavbarLink className='hvr-underline-reveal' onClick={scrollToSkills}>
          Skills
        </NavbarLink>
        <NavbarLink className='hvr-underline-reveal' onClick={scrollToProjects}>
          Projects
        </NavbarLink>
        <NavbarLink className='hvr-underline-reveal' onClick={scrollToContact}>
          Contact
        </NavbarLink>
        <Bars onClick={toggle} />
      </NavItems>
    </Navbar>
  );
};

export default Header;
