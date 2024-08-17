import React from 'react'
import './AboutMe.css'
import MyPhoto from '../../assetS/MyPhoto.png';

export default function AboutMe() {
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
             <button className="bg-[#023E57] hover:bg-transparent text-white font-semibold 
             hover:text-[#023E57] border-4 border-[#023E57] 
             rounded-lg transition-all duration-1000"
             style={{ fontSize: '15px', width: '190px', height: '55px' }}>
             Download CV 
             </button>
          </div>
          <div className='About_DownloadCV_Button'>
             <button className="bg-transparent hover:bg-[#023E57] text-[#023E57] font-semibold 
             hover:text-white border-4 border-[#023E57] hover:border-transparent 
             rounded-lg transition-all duration-1000"
             style={{  fontSize: '16px', width: '190px', height: '55px' }}>
             Connect Now 
             </button>
          </div> 
        </div> 

         <div className='About_Myphoto'>
           <img src={MyPhoto} />
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

         </div>

       </div>
      </div>

      
  )
}
