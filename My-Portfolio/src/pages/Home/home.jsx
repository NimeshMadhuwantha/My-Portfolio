import React from 'react';
import Swal from 'sweetalert2';
import './Home.css';
import { Link } from 'react-router-dom';
import MyPhoto from '../../assets/MyPhoto.png';
import ReactIcon from '../../assets/ToolsIcons/ReactIcon.png';
import javaScriptIcon from '../../assets/ToolsIcons/javaScriptIcon.png';
import PHPIcon from '../../assets/ToolsIcons/PHPIcon.png';
import FigmaIcon from '../../assets/ToolsIcons/FigmaIcon.png';
import PhotoShopIcon from '../../assets/ToolsIcons/PhotoShopIcon.png';
import BlenderIcon from '../../assets/ToolsIcons/BlenderIcon.png';
import SketchIcon from '../../assets/ToolsIcons/SketchIcon.png';
import BrushIcon from '../../assets/ToolsIcons/BrushIcon.png';
import My_CV from '../../assets/MyCV/My_CV.pdf';

function Home() {

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
          <img src={MyPhoto} alt="MyPhoto" />
        </div>

        <div className='Home_Buttons'>
          <div className='Home_View_Button'>
            <Link to="/portfolio">
              <button className="bg-[#023E57] hover:bg-transparent text-white font-semibold 
                hover:text-[#023E57] border-4 border-[#023E57] 
                rounded-lg transition-all duration-1000"
                style={{ fontSize: '15px', width: '190px', height: '55px' }}>
                View Portfolio &gt; 
              </button>
            </Link>
          </div>
          <div className='Home_DownloadCV_Button'>
            <button className="bg-transparent hover:bg-[#023E57] text-[#023E57] font-semibold 
              hover:text-white border-4 border-[#023E57] hover:border-transparent 
              rounded-lg transition-all duration-1000"
              style={{ fontSize: '16px', width: '190px', height: '55px' }}
              onClick={handleDownload}>
              Download CV  
            </button>
          </div> 
        </div> 

        <div className='Home_BottomText'>
          <h1><span>|</span>What I do</h1>
        </div>

        <div className='Home_Buttom_Cards'>
          <div className='Home_Buttom_Card1'>
            <div className='Home_Card1_Icons'>
              <img src={ReactIcon} alt="React Icon" />
              <img src={javaScriptIcon} alt="JavaScript Icon" />
              <img src={PHPIcon} alt="PHP Icon" />
            </div>
            <h1>FULL STACK DEVELOPMENT</h1>
          </div>
          <div className='Home_Buttom_Card2'>
            <div className='Home_Card2_Icons'>
              <img src={FigmaIcon} alt="Figma Icon" />
              <img src={PhotoShopIcon} alt="Photoshop Icon" />
              <img src={BlenderIcon} alt="Blender Icon" />
            </div>
            <h1>UIUX DESIGN</h1>
          </div>
          <div className='Home_Buttom_Card3'>
            <div className='Home_Card3_Icons'>
              <img src={SketchIcon} alt="Sketch Icon" />
              <img src={BrushIcon} alt="Brush Icon" />
            </div>
            <h1>SKETCH |  DRAWING</h1>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;
