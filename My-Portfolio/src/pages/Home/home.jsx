import React from 'react';
import './Home.css'
import MyPhoto from '../../assetS/MyPhoto.png';
import ReactIcon from '../../assets/ToolsIcons/ReactIcon.png';
import javaScriptIcon from '../../assets/ToolsIcons/javaScriptIcon.png';
import PHPIcon from '../../assets/ToolsIcons/PHPIcon.png';
import FigmaIcon from '../../assets/ToolsIcons/FigmaIcon.png';
import PhotoShopIcon from '../../assets/ToolsIcons/PhotoShopIcon.png';
import BlenderIcon from '../../assets/ToolsIcons/BlenderIcon.png';
import SketchIcon from '../../assets/ToolsIcons/SketchIcon.png';
import BrushIcon from '../../assets/ToolsIcons/BrushIcon.png';




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

        <div className='Home_Buttons'>
           
          <div className='Home_View_Button'>
             <button className="bg-[#023E57] hover:bg-transparent text-white font-semibold 
             hover:text-[#023E57] border-4 border-[#023E57] 
             rounded-lg transition-all duration-1000"
             style={{ fontSize: '15px', width: '190px', height: '55px' }}>
             View Portfolio &gt; 
             </button>
          </div>
          <div className='Home_DownloadCV_Button'>
             <button className="bg-transparent hover:bg-[#023E57] text-[#023E57] font-semibold 
             hover:text-white border-4 border-[#023E57] hover:border-transparent 
             rounded-lg transition-all duration-1000"
             style={{  fontSize: '16px', width: '190px', height: '55px' }}>
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
              <img src={ReactIcon} alt="" />
              <img src={javaScriptIcon} alt="" />
              <img src={PHPIcon} alt="" />
            </div>
            <h1>FULL STACK DEVELOPMENT</h1>
          </div>
          <div className='Home_Buttom_Card2'>
          <div className='Home_Card2_Icons'>
              <img src={FigmaIcon} alt="" />
              <img src={PhotoShopIcon} alt="" />
              <img src={BlenderIcon} alt="" />
            </div>
            <h1>UIUX DESIGN</h1>
          </div>
          <div className='Home_Buttom_Card3'>
          <div className='Home_Card3_Icons'>
              <img src={SketchIcon} alt="" />
              <img src={BrushIcon} alt="" />
              
            </div>
            <h1>SKETCH |  DRAWING</h1>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;
