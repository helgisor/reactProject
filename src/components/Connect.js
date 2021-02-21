import React, { useEffect } from 'react';
import Handshake from '../videos/handshake.mp4';
import anime from 'animejs/lib/anime.es.js';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Connect = () => {
  useEffect(() => {
    Aos.init({});
  }, []);

  useEffect(() => {
    smallLetters();

    function smallLetters() {
      var textWrapper = document.querySelector('.ml3');
      textWrapper.innerHTML = textWrapper.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      );

      anime
        .timeline({ loop: true })
        .add({
          targets: '.ml3 .letter',
          opacity: [0, 1],
          easing: 'easeInOutQuad',
          duration: 2250,
          delay: (el, i) => 150 * (i + 1),
        })
        .add({
          targets: '.ml3',
          opacity: 0,
          duration: 1000,
          easing: 'easeOutExpo',
          delay: 1000,
        });
    }
  }, []);

  return (
    <div className='contactMe'>
      <div class='bg'></div>
      <div class='bg bg2'></div>
      <div class='bg bg3'></div>

      <h1 class='ml6 title'>
        <span class='text-wrapper'>
          <span class='letters'>Contact Me</span>
        </span>
      </h1>

      <section className='connect'>
        <video
          className='video-container'
          src={Handshake}
          type='video/mp4'
          autoPlay
          loop
          muted
          playsInline
          data-aos='fade-right'
          data-aos-delay='50'
          data-aos-duration='1000'
        />

        <section
          class='s2'
          data-aos='fade-left'
          data-aos-delay='50'
          data-aos-duration='1000'
        >
          <div class='main-container'>
            <a href=''></a>

            <form
              id='contact-form'
              name='contact'
              action='/contact'
              method='post'
            >
              {/* <a name='contact'></a> */}

              <input type="hidden" name="form-name" value="contact"/>

              <label>Name</label>
              <input class='input-field' type='text' name='name' required/>

              {/* <label>Subject</label>
              <input class='input-field' type='text' name='subject' /> */}

              <label>Email</label>
              <input class='input-field' type='email' name='email' required/>

              <label>Message</label>
              <textarea class='input-field' name='message' required></textarea>

              <input id='submit-btn' type='submit' value='Send' />
            </form>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Connect;
