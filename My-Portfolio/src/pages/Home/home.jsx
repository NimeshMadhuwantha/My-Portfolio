import React from 'react';
import './Home.css'
import MyPhoto from '../../assetS/MyPhoto.png';

function Home() {
  


  return (
    <div>
      <div className='HomeMainContent'>
        <div className='HomeTopText'>
          <h1>Hi, I'm <span className='NimeshTopText'> Nimesh !</span></h1>
            <div className='ChangingText'>
              <span className='FSDtop'>Full Stack Developer</span>
              <span className='FSDtop'>UI/UX Engineer</span>
              <span className='FSDtop'>Full Stack Developer</span>
              <span className='FSDtop'>UI/UX Engineer</span>
            </div>
            <div className='HomeTopDescription'>
              <h2>
              <span className='HomeWelcomeText'>Welcome to my portfolio! </span><br />
              I am a UI/UX engineer, UI/UX designer, full-stack developer, and artist. 
              My work is a fusion of technical precision and creative imagination. 
              From intuitive user interfaces and robust web solutions to captivating artwork, 
              each piece reflects my passion for crafting seamless, visually stunning digital experiences. 
              Dive into my world of innovation and creativity.
              </h2>
            </div>
        </div>
        <div className='HomeMyPhoto'>
          <img src={MyPhoto} />
        </div>  

      </div>
    </div>
  );
}

export default Home;
