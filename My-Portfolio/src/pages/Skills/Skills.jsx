import React from 'react';
import Swal from 'sweetalert2';
import './Skills.css';
import BehanceLogo from '../../assets/SkillPage/BehanceLogo.png';
import FiverrLogo from '../../assets/SkillPage/FiverrLogo.png';
import UIUXEngLogo from '../../assets/SkillPage/UIUXEngLogo.png';
import FullStackLogo from '../../assets/SkillPage/FullStackLogo.png';
import GraphicDesign from '../../assets/SkillPage/GraphicDesign.png';
import DrawingLogo2 from '../../assets/SkillPage/DrawingLogo2.png';
import My_CV from '../../assets/MyCV/My_CV.pdf';

export default function Skills() {

  const handleDownload = (e) => {
    e.preventDefault();
    
    try {
      const link = document.createElement('a');
      link.href = My_CV;
      link.download = 'My_CV.pdf';
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
    <div className='Skills_MainContent'>
      <div className='Skills_TopContent'>
          <h1 className='Skills_Nice_to_meet_Text'>NICE TO MEET YOU!</h1>
          <h1 className='Skills_MyName'>Nimesh Madhuwantha</h1>
          <h1 className='Skills_MyOccupation'>UIUX Engineer <br />
          Full Stack Developer</h1>
        </div>
        <div className='Skills_View_Button'>
             <button
               className="bg-[#023E57] hover:bg-transparent text-white font-semibold 
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
               onClick={handleDownload}
             >
             Download CV 
             </button>
        </div>
        <div className='Skills_FiverrExp'>
          <div className='Skills_Para'>
          <h1 ><span>Since 2020,</span> I have honed my skills in UI/UX design, graphic design, and sketching on Fiverr, 
            successfully managing and handling projects for a diverse global clientele. <br />
          My expertise extends to project management, team collaboration, and GitHub, 
          where I work seamlessly with teams to deliver high-quality results. 
          Additionally, my presence on Behance showcases my creative portfolio, 
          reflecting my ability to blend artistic vision with technical proficiency.</h1>
          </div>

        <div className='Skills_SiteLogo'>
          <div className='Skills_BehanceLogo'>
             <a href="https://www.behance.net/nimeshmadhu"><img src={BehanceLogo} alt="" /></a>
             <a href="https://www.behance.net/nimeshmadhu"><h1>Behance</h1></a>
          </div>
          <div className='Skills_FiverrLogo'>
            <a href="https://www.fiverr.com/sldesign2?&ref_ctx_id=8bd3df3cdba840bbb82b358348ed92f0&imp_id=6ecc6109-773c-4e83-9507-8cd16cb13245">
            <img src={FiverrLogo} alt="" /></a>
            <a href="https://www.fiverr.com/sldesign2?&ref_ctx_id=8bd3df3cdba840bbb82b358348ed92f0&imp_id=6ecc6109-773c-4e83-9507-8cd16cb13245">
            <h1>Fiverr</h1></a>
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
            <img src={UIUXEngLogo} alt="UI/UX Engineer Logo" />
            <h1>UI/UX ENGINEER </h1>
            <hr />
            <h2>UI/UX Engineering</h2>
            <h2>Mobile/web Front-End</h2>
            <h2>Wireframing/Prototyping</h2>
            <h2>Creative Imagination</h2>
          </div>
          <div className='Skills_Bottom_Card2'>
            <img src={FullStackLogo} alt="Full Stack Logo" />
            <h1>FULL STACK DEVELOPMENT </h1>
            <hr />
            <h2>HTML/CSS</h2>
            <h2>JavaScript</h2>
            <h2>Front-End Development</h2>
            <h2>Back-End Development</h2>
          </div>
          <div className='Skills_Bottom_Card3'>
            <img src={GraphicDesign} alt="Graphic Design Logo" />
            <h1>GRAPHIC DESIGN</h1>
            <hr />
            <h2>UI/UX Design</h2>
            <h2>3D Modeling</h2>
            <h2>Photo/Video Editing</h2>
            <h2>Illustration</h2>
          </div>
          <div className='Skills_Bottom_Card4'>
            <img src={DrawingLogo2} alt="Drawing Logo" />
            <h1>ART SKILLS </h1>
            <hr />
            <h2>Sketching</h2>
            <h2>Concept Art</h2>
            <h2>Idea Sketching</h2>
            <h2>Drawing/Painting</h2>
          </div>

        </div>

    </div>
  );
}
