import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Image from '../images/img-5.jpg';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../animations';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Skills from '../components/Skills';
import Personal from '../components/Personal';
import Connect from '../components/Connect';
import ProjectsSection from '../components/ProjectsSection';
import Dropdown from '../components/Dropdown';
import Footer from '../components/Footer';

const Home = () => {
  useEffect(() => {
    const cursor = document.querySelector('.cursor');

    document.addEventListener('mousemove', (e) => {
      cursor.setAttribute(
        'style',
        'top: ' + (e.pageY - 10) + 'px; left: ' + (e.pageX - 10) + 'px;'
      );
    });

    document.addEventListener('click', () => {
      cursor.classList.add('expand');

      setTimeout(() => {
        cursor.classList.remove('expand');
      }, 500);
    });
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = React.useState(0);

  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      setHeight(window.pageYOffset);
    });
    return () => window.removeEventListener('scroll', () => {});
  });

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  

  return (
    <motion.div
      initial='out'
      animate='in'
      exit='out'
      variants={animationOne}
      transition={transition}
      className='motion'
    >
      <div className='cursor'></div>

      <div className='trail'>
        <div className='pointer'></div>
        <div className='pointer pointer2'></div>
        <div className='pointer pointer3'></div>
        <div className='pointer pointer4'></div>
        <div className='pointer pointer5'></div>
      </div>
      <div class='background'>
        <div class='cube'></div>
        <div class='cube'></div>
        <div class='cube'></div>
        <div class='cube'></div>
        <div class='cube'></div>
      </div>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <Hero image={Image} title='Experience Nature' desc='Once in a lifetime' />
      <Personal />
      <Skills />
      <ProjectsSection />
      <Connect />
      <Footer />
    </motion.div>
  );
};

export default Home;
