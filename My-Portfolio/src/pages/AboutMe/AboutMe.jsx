import React from 'react';
import Swal from 'sweetalert2';
import './AboutMe.css';
import { Link } from 'react-router-dom';
import MyPhoto from '../../assetS/MyPhoto.png';
import UIUX_Engineer_Nimesh_Madhuwantha from '../../assets/MyCV/UIUX_Engineer_Nimesh_Madhuwantha.pdf';

export default function AboutMe() {

  const handleDownload = (e) => {
    e.preventDefault();

    try {
      const link = document.createElement('a');
      link.href = UIUX_Engineer_Nimesh_Madhuwantha;
      link.download = 'UIUX_Engineer_Nimesh_Madhuwantha.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      const isSmallScreen = window.innerWidth < 640;
      const width = isSmallScreen ? '320px' : '480px';
      const padding = isSmallScreen ? '0.8rem' : '1rem';
      const fontSize = isSmallScreen ? '1.5rem' : '1.5rem';
      const contentFontSize = isSmallScreen ? '0.8rem' : '1rem';
  
      Swal.fire({
        icon: 'success',
        title: 'Download Started',
        text: 'Thanks for downloading!',
        confirmButtonText: 'Close',
        confirmButtonColor: '#023E57',
        width: width, 
        padding: padding, 
        
        didOpen: () => {
          if (isSmallScreen) {
            document.querySelector('.swal2-title').style.fontSize = fontSize;
            document.querySelector('.swal2-content').style.fontSize = contentFontSize;
            document.querySelector('.swal2-popup').style.height = 'auto'; 
          }
        },
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Download Failed',
        text: 'An error occurred while attempting to download the file. Please try again later.',
        confirmButtonText: 'Close',
        confirmButtonColor: '#023E57',
        width: window.innerWidth < 640 ? '320px' : '480px',
      });
    }
  };

  return (
    <div className='About_Main'>
      <div className='About_MainContent'>
        <div className='About_TopContent'>
          <h1 className='About_Nice_to_meet_Text'>NICE TO MEET YOU!</h1>
          <h1 className='About_MyName'>Nimesh Madhuwantha</h1>
          <h1 className='About_MyOccupation'>UIUX Engineer <br />
          Full Stack Developer</h1>
        </div>

        <div className='About_Buttons'>
          <div className='About_View_Button'>
          <button
          className="
          bg-transparent hover:bg-[#023E57] text-[#023E57] hover:text-white font-semibold 
          border-4 border-[#023E57] hover:border-transparent 
          rounded-lg transition-all duration-1000
            xl:w-[230px] xl:h-[55px] 
            lg:w-[195px] lg:h-[45px] 
            md:w-[170px] md:h-[40px] 
            sm:w-[155px] sm:h-[40px] 
            w-[125px] h-[34px]   
            xl:text-[1.1rem] 
            lg:text-[1rem]  
            md:text-[0.8rem] 
            sm:text-[0.7rem] 
            text-[0.5rem]  
          "
          onClick={handleDownload}>
          Download CV  
          </button>
          </div>
          <div className='About_DownloadCV_Button'>
            <Link to="/Contact">
            <button
            className="
            bg-[#023E57] hover:bg-transparent text-white font-semibold 
            hover:text-[#023E57] border-4 border-[#023E57] 
            rounded-lg transition-all duration-1000
            xl:w-[230px] xl:h-[55px] 
            lg:w-[195px] lg:h-[45px] 
            md:w-[170px] md:h-[40px] 
            sm:w-[155px] sm:h-[40px] 
            w-[125px] h-[34px]   
            xl:text-[1.1rem] 
            lg:text-[1rem]  
            md:text-[0.8rem] 
            sm:text-[0.7rem] 
            text-[0.5rem]  
            "
           >
                Connect Now 
              </button>
            </Link>
          </div>
        </div>

        <div className='About_Myphoto'>
          <img src={MyPhoto} alt="MyPhoto" />
        </div>

        <div className='About_MeText'>
          <h1><span>|</span>About Me</h1>
        </div>
        <div className='About_AboutMePara'>
          <h1>I am a UI/UX designer and full stack developer, currently an undergraduate student at Sabaragamuwa University of Sri Lanka. 
            Alongside my technical skills, I am also an artist, 
            blending creativity and technology to craft engaging digital experiences.</h1>
        </div>

        <div className='About_MyCards'>
          <div className='About_NameCard'>
            <h1><u>Full Name</u></h1>
            <h1 className='NamecardText'>Jasing Arachchige Nimesh Madhuwantha</h1>
          </div>
          <div className='About_BDCard'>
            <h1><u>Birth Day</u></h1>
            <h1 className='NamecardText'>2000-08-02</h1>
          </div>
          <div className='About_NationalCard'>
            <h1><u>Nationality</u></h1>
            <h1 className='NamecardText'>Sri Lankan</h1>
          </div>
          <div className='About_LanguageCard'>
            <h1><u>Language</u></h1>
            <h1 className='NamecardText'>English | Sinhala</h1>
          </div>
        </div>

        <div className='About_Education'>
          <h1><span>|</span>Education</h1>
        </div>

        <div className='About_Bottom_Edu'>
          <h1>Undergraduate student at the Faculty of Computing, Sabaragamuwa University of Sri Lanka. <br />
            <span>BSc (Hons) in Computing and Information Systems degree program.</span></h1>
          <div className='About_School'>
            <h1>School -  Ruhunu Vijayaba National Collage</h1>
          </div>
        </div>

      </div>
    </div>
  );
}
