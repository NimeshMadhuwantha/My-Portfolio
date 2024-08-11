import React from 'react'
import './SideBar.css';
import Mylogo from '../../assets/Mylogo.png';


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
          
      </div>
    </div>
  )
}
