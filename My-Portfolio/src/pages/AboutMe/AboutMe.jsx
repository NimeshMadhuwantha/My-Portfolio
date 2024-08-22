import React from 'react';
import Swal from 'sweetalert2';
import './AboutMe.css';
import { Link } from 'react-router-dom';
import MyPhoto from '../../assetS/MyPhoto.png';
import My_CV from '../../assets/MyCV/My_CV.pdf';

export default function AboutMe() {

  const handleDownload = (e) => {
    e.preventDefault();

    try {
      const link = document.createElement('a');
      link.href = My_CV;
      link.download = 'My_CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      Swal.fire({
        icon: 'success',
        title: 'Download Started',
        text: 'Thanks for downloading!',
        confirmButtonText: 'Close',
        confirmButtonColor: '#023E57',
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Download Failed',
        text: 'An error occurred while attempting to download the file. Please try again later.',
        confirmButtonText: 'Close',
        confirmButtonColor: '#023E57',
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
              className="bg-[#023E57] hover:bg-transparent text-white font-semibold 
             hover:text-[#023E57] border-4 border-[#023E57] 
             rounded-lg transition-all duration-1000"
              style={{ fontSize: '15px', width: '190px', height: '55px' }}
              onClick={handleDownload}
            >
              Download CV 
            </button>
          </div>
          <div className='About_DownloadCV_Button'>
            <Link to="/Contact">
              <button className="bg-transparent hover:bg-[#023E57] text-[#023E57] font-semibold 
               hover:text-white border-4 border-[#023E57] hover:border-transparent 
               rounded-lg transition-all duration-1000"
                style={{ fontSize: '16px', width: '190px', height: '55px' }}>
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
