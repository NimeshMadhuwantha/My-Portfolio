import React from 'react'
import './Skills.css'
import BehanceLogo from '../../assets/SkillPage/BehanceLogo.png';
import FiverrLogo from '../../assets/SkillPage/FiverrLogo.png';

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
    </div>
  )
}
