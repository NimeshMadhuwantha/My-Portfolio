import React from 'react'
import './Contact.css';
import callIcon from '../../assets/Icons/callIcon.png';
import LocationIcon from '../../assets/Icons/LocationIcon.png';
import mailIcon from '../../assets/Icons/mailIcon.png';


export default function Contact() {
  return (
    <div className='Contact_Main'>
      <div className='Contact_TopContent'>
          <h1 className='Contact_LetsConnect_Text'>LETS CONNECT</h1>
          <h1 className='Contact_GetTouch'>Get in <span>touch</span></h1>
          <h1 className='Contact_DesPara'><span>I’m a passionate UI/UX Engineer,</span> full stack developer, and artist, 
            currently pursuing a BSc (Hons) in Computing and Information Systems. <br />
          Connect with me to explore innovative digital solutions together.</h1>
        </div>

        <div className='Contact_MiddleContent'>
          <div className='Contact_Details'>
            <h1>Contact Information</h1>
            <h2>Put me a message and connect with me—let's collaborate! Reach out via email or through my social profiles</h2>
            <div className='Contact_Icons'>
              <div className='Contact_Call'>
                   <img src={callIcon} alt="" />
                   <h1>+94 70 5242 912</h1>
              </div>
              <div className='Contact_Mail'>
                   <img src={mailIcon} alt="" />
                   <h1>janmadhuwantha@gmail.com</h1>
              </div>
              <div className='Contact_Location'>
                   <img src={LocationIcon} alt="" />
                   <h1>Middeniya, Sri Lanka</h1>
              </div>
            </div>

          </div>

        </div>
      
    </div>
  )
}
