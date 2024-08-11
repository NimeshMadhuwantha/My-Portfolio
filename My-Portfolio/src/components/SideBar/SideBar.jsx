import React from 'react'
import './SideBar.css';
import Mylogo from '../../assets/Mylogo.png';
import BehanceIcon from '../../assets/SocialMediaIcons/BehanceIcon.png';
import dribbleIcon from '../../assets/SocialMediaIcons/dribbleIcon.png';
import facebookIcon from '../../assets/SocialMediaIcons/facebookIcon.png';
import githubIcon from '../../assets/SocialMediaIcons/githubIcon.png';
import linkedinIcon from '../../assets/SocialMediaIcons/linkedinIcon.png';


export default function SideBar() {
  return (
    <div className='sideBarMain'>
      <div className='sideBarContent'>
          <div className='SBmylogo'>
            <img className='SideBarMylogo' src={Mylogo}  />
          </div>
          <h1 className='MynameSB'>Nimesh Madhuwantha</h1>
          <div className='MyOccupation'>
           <h5 >Full Stack Developer</h5>
           <h5 className='Myoccupation2'>UI/UX Engineer</h5>
          </div>

          <div className='SideBarList'>
            
              <nav className='SideBarListItems'>
                <li><h2>Home</h2></li>
                <li><h2>About Me</h2></li>
                <li><h2>Portfolio</h2></li>
                <li><h2>Skills</h2></li>
                <li><h2>Contact</h2></li>
              </nav>
            
          </div>
          <div className='SocialMediaList'>
            
              <nav className='SocialMediaListItems'>
              <li><a href='https://www.linkedin.com/in/nimesh-madhuwantha-8a37102b4/' target='_blank' rel='noopener noreferrer'><img src={linkedinIcon} alt='nimesh-madhuwantha-8a37102b4/' /></a></li>
              <li><a href='https://github.com/NimeshMadhuwantha' target='_blank' rel='noopener noreferrer'><img src={githubIcon} alt='GitHub' /></a></li>
              <li><a href='https://www.behance.net/nimeshmadhu' target='_blank' rel='noopener noreferrer'><img src={BehanceIcon} alt='Behance' /></a></li>
              <li><a href='https://fb.com/nimesh.madhuwantha.359?mibextid=zbwkwl' target='_blank' rel='noopener noreferrer'><img src={facebookIcon} alt='Facebook' /></a></li>
              <li><a href='https://dribbble.com/yourprofile' target='_blank' rel='noopener noreferrer'><img src={dribbleIcon} alt='Dribbble' /></a></li>
              </nav>
            
          </div>
           <div className='FotterName'>
            <h2>Copyright @ 2024 Nimesh. All</h2>
            <h2 className='FotterName2'>rights reserved</h2>

           </div>
          
      </div>
      

    </div>
  )
}
