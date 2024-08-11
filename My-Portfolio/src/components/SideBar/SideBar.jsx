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
          
      </div>
    </div>
  )
}
