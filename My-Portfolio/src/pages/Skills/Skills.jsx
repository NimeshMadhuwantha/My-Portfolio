import React from 'react'
import './Skills.css'
import BehanceLogo from '../../assets/SkillPage/BehanceLogo.png';
import FiverrLogo from '../../assets/SkillPage/FiverrLogo.png';
import UIUXEngLogo from '../../assets/SkillPage/UIUXEngLogo.png';
import FullStackLogo from '../../assets/SkillPage/FullStackLogo.png';
import GraphicDesign from '../../assets/SkillPage/GraphicDesign.png';
import DrawingLogo2 from '../../assets/SkillPage/DrawingLogo2.png';

export default function Skills() {
  return (
    <div className='Skills_MainContent'>
      <div className='Skills_TopContent'>
          <h1 className='Skills_Nice_to_meet_Text'>NICE TO MEET YOU!</h1>
          <h1 className='Skills_MyName'>Nimesh Madhuwantha</h1>
          <h1 className='Skills_MyOccupation'>UIUX Engineer <br />
          Full Stack Developer</h1>
        </div>
        <div className='Skills_View_Button'>
             <button className="bg-[#023E57] hover:bg-transparent text-white font-semibold 
             hover:text-[#023E57] border-4 border-[#023E57] 
             rounded-lg transition-all duration-1000"
             style={{ fontSize: '15px', width: '190px', height: '55px' }}>
             Download CV 
             </button>
        </div>
        <div className='Skills_FiverrExp'>
          <h1><span>Since 2020,</span> I have honed my skills in UI/UX design, graphic design, and sketching on Fiverr, 
            successfully managing and handling projects for a diverse global clientele. <br />
          My expertise extends to project management, team collaboration, and GitHub, 
          where I work seamlessly with teams to deliver high-quality results. 
          Additionally, my presence on Behance showcases my creative portfolio, 
          reflecting my ability to blend artistic vision with technical proficiency.</h1>

        <div className='Skills_SiteLogo'>
          <div className='Skills_BehanceLogo'>
             <img src={BehanceLogo} alt="" />
             <h1>Behance</h1>
          </div>
          <div className='Skills_FiverrLogo'>
            <img src={FiverrLogo} alt="" />
            <h1>Fiverr</h1>
          </div>
        </div>
        </div>

        <div className='Skills_Exp_Cards'>
           <div className='Skills_Exp_Card1'>
            <h1 className='Skills_Card1_Text1'>4+ </h1>
            <div className='Skills_Card1_Bottom'>
              <h1 className='Skills_Card1_Text2'>Years of Experience in <span> Fiverr</span></h1>
              <h1 className='Skills_Card1_Text3'>Managing client relationships and delivering projects 
                <span>UIUX  | SKETCHING</span>
              </h1>
            </div>

           </div>
           <div className='Skills_Exp_Card2'>
             <h1 className='Skills_Card1_Text1'>8+  </h1>
             <div className='Skills_Card1_Bottom'>
              <h1 className='Skills_Card2_Text2'>Projects Completed in <span> GitHub</span></h1>
              <h1 className='Skills_Card1_Text3'>Collaborating with teams and project management
                <span>FULL STACK DEVELOPMENT</span>
              </h1>
            </div>
            
           </div>
           <div className='Skills_Exp_Card3'>
             <h1 className='Skills_Card1_Text1'>50+  </h1>
             <div className='Skills_Card1_Bottom'>
              <h1 className='Skills_Card3_Text2'>Happy Customer <span>Feedbacks</span></h1>
              <h1 className='Skills_Card3_Text3'>UI/UX, Graphic Designing, Sketching, Idea Development 
                <span>FIVERR |  BEHANCE</span>
              </h1>
            </div>
            
           </div>
        </div>

        <div className='Skills_MySkills'>
          <h1><span>|</span>My Skills</h1>
        </div>

        <div className='Skills_Bottom_Cards'>

          <div className='Skills_Bottom_Card1'>
            <img src={UIUXEngLogo} alt="" />
            <h1>UI/UX ENGINEER </h1>
            <hr />
            <h2>UI/UX Engineering</h2>
            <h2>Mobile/web Front-End</h2>
            <h2>Wireframing/Prototyping</h2>
            <h2>Creative Imagination</h2>
            

          </div>
          <div className='Skills_Bottom_Card2'>
            <img src={FullStackLogo} alt="" />
            <h1>FULL STACK DEVELOPMENT </h1>
            <hr />
            <h2>HTML/CSS</h2>
            <h2>JavaScript</h2>
            <h2>Front-End Development</h2>
            <h2>Back-End Development</h2>
          </div>
          <div className='Skills_Bottom_Card3'>
            <img src={GraphicDesign} alt="" />
            <h1>GRAPHIC DESIGN</h1>
            <hr />
            <h2>UI/UX Design</h2>
            <h2>3D Modeling</h2>
            <h2>Photo/Video Editing</h2>
            <h2>Illustration</h2>
          </div>
          <div className='Skills_Bottom_Card4'>
            <img src={DrawingLogo2} alt="" />
            <h1>ART SKIILS </h1>
            <hr />
            <h2>Sketching</h2>
            <h2>Concept Art</h2>
            <h2>Idea Sketching</h2>
            <h2>Drawing/Painting</h2>
            
          </div>

        </div>

    </div>
  )
}
