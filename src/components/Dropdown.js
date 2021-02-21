import React from 'react';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';

const Dropdown = ({ isOpen, toggle }) => {
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

  return (
    <DropdownContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>{/* <CloseIcon /> */}</Icon>
      <DropdownWrapper>
        <DropdownMenu>
          <div onClick={scrollBackToTop} className='dropDownLink'>
            Home
          </div>
          <div onClick={scrollToAbout} className='dropDownLink'>
            About
          </div>
          <div onClick={scrollToSkills} className='dropDownLink'>
            Skills
          </div>
          <div onClick={scrollToProjects} className='dropDownLink'>
            Projects
          </div>
        </DropdownMenu>
        <BtnWrap>
          <div
            primary='true'
            round='true'
            className='signUp'
            onClick={scrollToContact}
          >
            Contact Me
          </div>
        </BtnWrap>
      </DropdownWrapper>
    </DropdownContainer>
  );
};

export default Dropdown;

const DropdownContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

const DropdownWrapper = styled.div`
  color: #fff;
`;
const DropdownMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  text-align: center;
  margin-bottom: 4rem;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(4, 60px);
  }
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;
