import React, { useEffect, Link } from 'react';
import styled from 'styled-components';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Typewriter from 'typewriter-effect';
import { FaAngleDown } from 'react-icons/fa';
import { FaArrowAltCircleDown } from 'react-icons/fa';

const Section = styled.section`
  background: url(${({ image }) => image && image}) center;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-attachment: fixed;
`;

const Container = styled.div`
  color: #fff;
  padding: 1.6rem;
  width: 40rem;
  backdrop-filter: blur(5px);
  background-color: rgba(0, 0, 0, 0.4);
  margin-left: 6rem;
  border-radius: 50px;

  @media (max-width: 840px) {
    margin-left: 3rem;
    width: 34rem;
  }

  @media (max-width: 670px) {
    margin-left: 2rem;
    width: 30rem;
  }

  @media (max-width: 550px) {
    margin-left: 1rem;
  }

  @media (max-width: 530px) {
    margin-left: 0.5rem;
    width: 27rem;
  }

  @media (max-width: 500px) {
    margin-left: 0.4rem;
    width: 23rem;
  }

  @media (max-width: 400px) {
    margin-left: 0.3rem;
    width: 22rem;
  }

  @media (max-width: 380px) {
    margin-left: 0.3rem;
    width: 20rem;
  }

  @media (max-width: 350px) {
    margin-left: 0.3rem;
    width: 19rem;
  }

  @media (max-width: 330px) {
    margin-left: 0.1rem;
    width: 18.7rem;
  }

  @media (max-width: 280px) {
    width: 17rem;
  }

  button {
    font-size: 1.7rem;
    padding: 0.8rem 1.3rem;
    color: #000;
    background: white;
    border: none;
    border-radius: 50px;
    outline: none;
    position: relative;
    border: 2px solid #379683;
    cursor: pointer;
  }
`;

const Hero = ({ image, title, desc }) => {
  function scrollToProjects() {
    let scrollToElement = document.querySelector('.wrapper');
    scrollToElement.scrollIntoView();
  }

  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <Section image={image}>
      <Container
        data-aos='fade-out'
        data-aos-delay='350'
        data-aos-duration='1000'
      >
        <section className='home' id='home'>
          <div className='max-width'>
            <div className='home-content'>
              <div className='text-1'>Hello, my name is</div>
              <div className='text-2'>Oleg Koltsov</div>
              <div class='text-3'>
                And I
                <span class='typing'>
                  {
                    <Typewriter
                      options={{
                        strings: ['am a web dev', 'a designer', 'a code lover'],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  }
                </span>
              </div>
              <button
                className='workLink hvr-icon-down hvr-radial-in'
                onClick={scrollToProjects}
              >
                <div className='myWork'>
                  My Work
                  <FaArrowAltCircleDown className='arrowDown hvr-icon' />
                </div>
              </button>
            </div>
          </div>
        </section>
      </Container>
    </Section>
  );
};

export default Hero;
