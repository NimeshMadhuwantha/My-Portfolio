import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';
import Mylogo from '../../assets/Mylogo.png';
import BehanceIcon from '../../assets/SocialMediaIcons/BehanceIcon.png';
import dribbleIcon from '../../assets/SocialMediaIcons/dribbleIcon.png';
import facebookIcon from '../../assets/SocialMediaIcons/facebookIcon.png';
import githubIcon from '../../assets/SocialMediaIcons/githubIcon.png';
import linkedinIcon from '../../assets/SocialMediaIcons/linkedinIcon.png';
import menuIcon from '../../assets/Icons/menuIcon.png';
import closeIcon from '../../assets/Icons/closeIcon.png';

export default function SideBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      {/* Sidebar 2 - Responsive Sidebar */}
      <div className={`sidebar2 ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar2Content">
          <div className="closeIcon" onClick={toggleSidebar}>
            <img src={closeIcon} alt="Close Sidebar" />
          </div>
          <div className='SB_mylogo'>
            <Link to="/"><img className='Side_BarMylogo' src={Mylogo} alt="Logo" /></Link>
          </div>
          <div className='Side_BarList'>
            <nav className='Side_BarListItems'>
              <li><Link to="/"><h2>Home</h2></Link></li>
              <li><Link to="/AboutMe"><h2>About Me</h2></Link></li>
              <li><Link to="/Portfolio"><h2>Portfolio</h2></Link></li>
              <li><Link to="/Skills"><h2>Skills</h2></Link></li>
              <li><Link to="/Contact"><h2>Contact</h2></Link></li>
            </nav>
          </div>
          <div className='Social_MediaList'>
            <nav className='Social_MediaListItems'>
              <li><a href='https://www.linkedin.com/in/nimesh-madhuwantha-8a37102b4/' target='_blank' rel='noopener noreferrer'><img src={linkedinIcon} alt='LinkedIn' /></a></li>
              <li><a href='https://github.com/NimeshMadhuwantha' target='_blank' rel='noopener noreferrer'><img src={githubIcon} alt='GitHub' /></a></li>
              <li><a href='https://www.behance.net/nimeshmadhu' target='_blank' rel='noopener noreferrer'><img src={BehanceIcon} alt='Behance' /></a></li>
              <li><a href='https://fb.com/nimesh.madhuwantha.359?mibextid=zbwkwl' target='_blank' rel='noopener noreferrer'><img src={facebookIcon} alt='Facebook' /></a></li>
              <li><a href='https://dribbble.com/Madhu6114' target='_blank' rel='noopener noreferrer'><img src={dribbleIcon} alt='Dribbble' /></a></li>
            </nav>
          </div>
        </div>
      </div>

      {/* Menu Icon for Sidebar 2 */}
      <div className="menuIcon" onClick={toggleSidebar}>
        <img src={menuIcon} alt="Menu Icon" />
      </div>

      {/* Original Sidebar */}
      <div className='side_BarMain'>
        <div className='side_BarContent'>
          <div className='SB_mylogo'>
            <Link to="/"><img className='Side_BarMylogo' src={Mylogo} alt="Logo" /></Link>
          </div>
          <h1 className='My_nameSB'>Nimesh Madhuwantha</h1>
          <div className='My_Occupation'>
            <h5>Full Stack Developer</h5>
            <h5 className='My_occupation2'>UI/UX Engineer</h5>
          </div>
          <div className='Side_BarList'>
            <nav className='Side_BarListItems'>
              <li><Link to="/"><h2>Home</h2></Link></li>
              <li><Link to="/AboutMe"><h2>About Me</h2></Link></li>
              <li><Link to="/Portfolio"><h2>Portfolio</h2></Link></li>
              <li><Link to="/Skills"><h2>Skills</h2></Link></li>
              <li><Link to="/Contact"><h2>Contact</h2></Link></li>
            </nav>
          </div>
          <div className='Social_MediaList'>
            <nav className='Social_MediaListItems'>
              <li><a href='https://www.linkedin.com/in/nimesh-madhuwantha-8a37102b4/' target='_blank' rel='noopener noreferrer'><img src={linkedinIcon} alt='LinkedIn' /></a></li>
              <li><a href='https://github.com/NimeshMadhuwantha' target='_blank' rel='noopener noreferrer'><img src={githubIcon} alt='GitHub' /></a></li>
              <li><a href='https://www.behance.net/nimeshmadhu' target='_blank' rel='noopener noreferrer'><img src={BehanceIcon} alt='Behance' /></a></li>
              <li><a href='https://fb.com/nimesh.madhuwantha.359?mibextid=zbwkwl' target='_blank' rel='noopener noreferrer'><img src={facebookIcon} alt='Facebook' /></a></li>
              <li><a href='https://dribbble.com/Madhu6114' target='_blank' rel='noopener noreferrer'><img src={dribbleIcon} alt='Dribbble' /></a></li>
            </nav>
          </div>
          <div className='Fotter_Name'>
            <h2>Copyright @ 2024 Nimesh. All</h2>
            <h2 className='Fotter_Name2'>rights reserved</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
