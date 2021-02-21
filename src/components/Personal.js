import React, { Fragment, useEffect } from 'react';
import { FaDivide } from 'react-icons/fa';
import AboutImg from '../images/about-img.jpg';
import anime from 'animejs/lib/anime.es.js';
import { getQueriesForElement } from '@testing-library/react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Personal = () => {
  useEffect(() => {
    Aos.init({});
  }, []);

  useEffect(() => {
    smallLetters();

    function smallLetters() {
      var textWrapper = document.querySelector('.ml11 .letters');
      textWrapper.innerHTML = textWrapper.textContent.replace(
        /([^\x00-\x80]|\w)/g,
        "<span class='letter'>$&</span>"
      );

      anime
        .timeline({ loop: true })
        .add({
          targets: '.ml11 .line',
          scaleY: [0, 1],
          opacity: [0.5, 1],
          easing: 'easeOutExpo',
          duration: 700,
        })
        .add({
          targets: '.ml11 .line',
          translateX: [
            0,
            document.querySelector('.ml11 .letters').getBoundingClientRect()
              .width + 10,
          ],
          easing: 'easeOutExpo',
          duration: 700,
          delay: 100,
        })
        .add({
          targets: '.ml11 .letter',
          opacity: [0, 1],
          easing: 'easeOutExpo',
          duration: 600,
          offset: '-=775',
          delay: (el, i) => 34 * (i + 1),
        })
        .add({
          targets: '.ml11',
          opacity: 0,
          duration: 1000,
          easing: 'easeOutExpo',
          delay: 1000,
        });
    }
  }, []);

  return (
    <section class='about' id='about'>
      <div class='max-width'>
        <h1 class='ml11 title'>
          <span class='text-wrapper'>
            <span class='line line1'></span>
            <span class='letters'>About Me</span>
          </span>
        </h1>

        <div class='about-content'>
          <div
            class='column left beforeImg'
            data-aos='fade-right'
            data-aos-offset='300'
            data-aos-easing='ease-in-out'
            data-aos-delay='100'
          >
            <img src={AboutImg} alt='' />
          </div>
          <div
            class='column right'
            data-aos='fade-left'
            data-aos-offset='300'
            data-aos-easing='ease-in-out'
            data-aos-delay='100'
          >
            <div class='text'>
              My Name is Oleg <span class='typing-2'></span>
            </div>
            <p>
              I am a frontend developer based in Tallinn, Estonia. I discovered
              code while working in technical support for an e-commerce
              platform. After realizing that eveyone could learn it, I dedicated
              myself to mastering JavaScript. <br></br> <br></br>
              Since then it has become my passion. I previously considered
              myself only as an artsy person and it was a pleasant surprise to
              see that frontend development is actually a form of art.
              <br></br> <br></br>
              My next goal is to learn Node.js and backend development. Once I
              will feel confident in it, I would like to learn C# and game
              development with the Unity engine.
              <br></br> <br></br>
              Besides code, I enjoy history, science fiction, healthy living
              and, of course, gaming.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Personal;
