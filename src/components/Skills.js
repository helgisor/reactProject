import React, { useEffect } from 'react';
import Carousel from 'react-elastic-carousel';
import { FaPaintBrush } from 'react-icons/fa';
import { FaHammer } from 'react-icons/fa';
import { FaDatabase } from 'react-icons/fa';
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { FaProjectDiagram } from 'react-icons/fa';
import Aos from 'aos';
import 'aos/dist/aos.css';
import anime from 'animejs/lib/anime.es.js';
import { getQueriesForElement } from '@testing-library/react';

const Skills = () => {
  useEffect(() => {
    Aos.init({});
  }, []);

  useEffect(() => {
    smallLetters();

    function smallLetters() {
      var textWrapper = document.querySelector('.ml14 .letters');
      textWrapper.innerHTML = textWrapper.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      );

      anime
        .timeline({ loop: true })
        .add({
          targets: '.ml14 .line',
          scaleX: [0, 1],
          opacity: [0.5, 1],
          easing: 'easeInOutExpo',
          duration: 600,
        })
        .add({
          targets: '.ml14 .letter',
          opacity: [0, 1],
          translateX: [40, 0],
          translateZ: 0,
          scaleX: [0.3, 1],
          easing: 'easeOutExpo',
          duration: 800,
          offset: '-=600',
          delay: (el, i) => 15 + 25 * i,
        })
        .add({
          targets: '.ml14',
          opacity: 0,
          duration: 1000,
          easing: 'easeOutExpo',
          delay: 1000,
        });
    }
  }, []);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
  ];

  return (
    <div
      className='skills'
      data-aos='fade-right'
      data-aos-delay='50'
      data-aos-duration='1000'
    >
      <h2 className='ml14 title'>
        <span className='text-wrapper'>
          <span className='letters'>My Skills</span>
          <span className='line'></span>
        </span>
      </h2>

      <div class='ripple-background'>
        <div class='circle xxlarge shade1'></div>
        <div class='circle xlarge shade2'></div>
        <div class='circle large shade3'></div>
        <div class='circle mediun shade4'></div>
        <div class='circle small shade5'></div>
      </div>

      <Carousel breakPoints={breakPoints}>
        <div className='card'>
          <h1 className='skillsIcon'>
            <FaPaintBrush size={50} />
          </h1>
          <p className='skillsMain'>CSS</p>
          <div className='skillsSecond'>
            <p>SASS</p>
            <p>Styled-Components</p>
          </div>
        </div>
        <div className='card'>
          <h1 className='skillsIcon'>
            <FaHammer size={50} />
          </h1>
          <p className='skillsMain'>JavaScript</p>
          <div className='skillsSecond'>
            <p>React</p>
            <p>Gatsby</p>
          </div>
        </div>
        <div className='card'>
          <h1 className='skillsIcon'>
            <FaDatabase size={50} />
          </h1>
          <p className='skillsMain'>SQL</p>
          <div className='skillsSecond'>
            <p>Data Fetching</p>
            <p>Data Manipulation</p>
          </div>
        </div>
        <div className='card'>
          <h1 className='skillsIcon'>
            <FaRegMoneyBillAlt size={50} />
          </h1>
          <p className='skillsMain'>E-Commerce</p>
          <div className='skillsSecond'>
            <p>Full Automation</p>
            <p>Onboarding</p>
          </div>
        </div>
        <div className='card'>
          <h1 className='skillsIcon'>
            <FaProjectDiagram size={50} />
          </h1>
          <p className='skillsMain'>Management</p>
          <div className='skillsSecond'>
            <p>100.000+ EUR Deals</p>
            <p>A - Z Arrangements</p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Skills;
