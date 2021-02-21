import React, { useEffect, Link } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
// import People from '../../assets/aboutshoes.jpg';
// import aboutUs2 from '../../assets/aboutUs2.jpg';
// import aboutUs3 from '../../assets/category4.jpg';
// import aboutUs4 from '../../assets/aboutUs4.jpg';
import projectImage from '../images/aboutUs.png';
import projectImage2 from '../images/aboutUs2.png';
import projectImage3 from '../images/aboutUs3.png';
import projectImage4 from '../images/aboutUs4.png';
import projectImage5 from '../images/aboutUs5.png';
import anime from 'animejs/lib/anime.es.js';
import { getQueriesForElement } from '@testing-library/react';
import { FaHome } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';

const Stories = () => {
  useEffect(() => {
    Aos.init({});
  }, []);

  useEffect(() => {
    smallLetters();

    function smallLetters() {
      var textWrapper = document.querySelector('.ml6 .letters');
      textWrapper.innerHTML = textWrapper.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      );

      anime
        .timeline({ loop: true })
        .add({
          targets: '.ml6 .letter',
          translateY: ['1.1em', 0],
          translateZ: 0,
          duration: 750,
          delay: (el, i) => 50 * i,
        })
        .add({
          targets: '.ml6',
          opacity: 0,
          duration: 1000,
          easing: 'easeOutExpo',
          delay: 1000,
        });
    }
  }, []);

  return (
    <main className='wrapper projectsSection'>
      <h2 class='ml3 title'>My Projects</h2>

      <section className='section'>
        <div className='section-center projects-page-center'>
          <article
            className='single-project'
            data-aos='zoom-in-down'
            data-aos-easing='ease-out-cubic'
            data-aos-duration='1000'
          >
            <div className='project-container'>
              <img src={projectImage} alt='single project' />
              <a href='https://www.johnsmilga.com' className='project-icon'>
                <a
                  className='projectIcon'
                  target='_blank'
                  href='https://store-2b2c9.web.app/'
                >
                  <FaHome size={40} />
                </a>
              </a>
            </div>
            <div className='project-details'>
              <h4 clasName='projectH4'>Online Store</h4>
              <p className='projectP'>
                Online store made with React.js. Includes a custom, animated
                hero component together with an animated header. Fully
                responsive, with smooth scrolling and aos.js sliding. Firebase
                for account creation and Stripe for payments.
              </p>
              <div className='project-footer'>
                <span>
                  <i className='fab fa-github'></i>
                </span>

                <a
                  className='projectIcon'
                  target='_blank'
                  href='https://store-2b2c9.web.app/'
                >
                  <FaGithubSquare size={40} />
                </a>
              </div>
            </div>
          </article>
          <article
            className='single-project'
            data-aos='zoom-in-down'
            data-aos-easing='ease-out-cubic'
            data-aos-duration='1300'
          >
            <div className='project-container'>
              <img src={projectImage2} alt='single project' />
              <a href='https://www.johnsmilga.com' className='project-icon'>
                <a
                  className='projectIcon'
                  target='_blank'
                  href='https://store-2b2c9.web.app/'
                >
                  <FaHome size={40} />
                </a>
              </a>
            </div>
            <div className='project-details'>
              <h4 clasName='projectH4'>Business Landing Page</h4>
              <p className='projectP'>
                A business landing page created with Gatsby.js, featuring
                GraphQL optimized images. Anime.js is used for animating the
                titles, while plain CSS is used for the many other animations.
                Fully response website with a modern look.
              </p>
              <div className='project-footer'>
                <span>
                  <i className='fab fa-github'></i>
                </span>

                <a
                  className='projectIcon'
                  target='_blank'
                  href='https://smooth3-9862a.web.app/'
                >
                  <FaGithubSquare size={40} />
                </a>
              </div>
            </div>
          </article>
          <article
            className='single-project'
            data-aos='zoom-in-down'
            data-aos-easing='ease-out-cubic'
            data-aos-duration='1600'
          >
            <div className='project-container'>
              <img src={projectImage3} alt='single project' />
              <a href='https://www.johnsmilga.com' className='project-icon'>
                <a
                  className='projectIcon'
                  target='_blank'
                  href='https://store-2b2c9.web.app/'
                >
                  <FaHome size={40} />
                </a>
              </a>
            </div>
            <div className='project-details'>
              <h4 clasName='projectH4'>Meditation App</h4>
              <p className='projectP'>
                Made in vanilla JavaScript and CSS, I created this music player
                and meditation app as a way to learn CSS animations. The effect
                which I wanted to show is the simulation of breathing in and
                out, with the bubbles being the air and the circle the lungs.
              </p>
              <div className='project-footer'>
                <span>
                  <i className='fab fa-github'></i>
                </span>

                <a
                  className='projectIcon'
                  target='_blank'
                  href='https://dreamy-poincare-d40cb5.netlify.app/'
                >
                  <FaGithubSquare size={40} />
                </a>
              </div>
            </div>
          </article>
          <article
            className='single-project'
            data-aos='zoom-in-down'
            data-aos-easing='ease-out-cubic'
            data-aos-duration='1900'
          >
            <div className='project-container'>
              <img src={projectImage4} alt='single project' />
              <a href='https://www.johnsmilga.com' className='project-icon'>
                <a
                  className='projectIcon'
                  target='_blank'
                  href='https://store-2b2c9.web.app/'
                >
                  <FaHome size={40} />
                </a>
              </a>
            </div>
            <div className='project-details'>
              <h4 clasName='projectH4'>Javascript Game</h4>
              <p className='projectP'>
                This is the very first project which I made as a way to get a
                grasp on JS. Your goal is to prevent the monsters from getting
                past you, and each wave of enemies becomes tougher and tougher.
                Includes multiple weapons.
              </p>
              <div className='project-footer'>
                <span>
                  <i className='fab fa-github'></i>
                </span>

                <a
                  className='projectIcon'
                  target='_blank'
                  href='https://store-2b2c9.web.app/'
                >
                  <FaGithubSquare size={40} />
                </a>
              </div>
            </div>
          </article>
          <article
            className='single-project'
            data-aos='zoom-in-down'
            data-aos-easing='ease-out-cubic'
            data-aos-duration='2200'
          >
            <div className='project-container'>
              <img src={projectImage5} alt='single project' />
              <a href='https://www.johnsmilga.com' className='project-icon'>
                <a
                  className='projectIcon'
                  target='_blank'
                  href='https://store-2b2c9.web.app/'
                >
                  <FaHome size={40} />
                </a>
              </a>
            </div>
            <div className='project-details'>
              <h4 clasName='projectH4'>Portfolio Website</h4>
              <p className='projectP'>
                My personal website, created in React.js. This is the last
                project which I made, using the experience I gained from the
                previous projects. Fully responsive and includes aos.js,
                anime.js and typewriter.js.
              </p>
              <div className='project-footer'>
                <span>
                  <i className='fab fa-github'></i>
                </span>

                <a
                  className='projectIcon'
                  target='_blank'
                  href='https://store-2b2c9.web.app/'
                >
                  <FaGithubSquare size={40} />
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
};

export default Stories;
