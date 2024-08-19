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
          <div className='Contact_Form'>
           
           <form className="Contact_Form_Input"> 
            <div className='Contact_Name_Input'>
           <input 
            type="text" 
            id="name" 
            aria-describedby="helper-text-explanation" 
            className="bg-white text-gray-900 text-sm rounded-lg  block w-[480px] p-2.5
             placeholder-gray-500 pl-7 focus:outline-none focus:ring-2 focus:ring-[#023E57]" 
            placeholder="Name"
            style={{ boxShadow: '0 4px 10px rgba(0, 0, 0, 0.25)'}}
            
            />
            </div>

          <div className='Contact_Email_Input'>
          <input 
            type="email" 
            id="email" 
            aria-describedby="helper-text-explanation" 
            className="bg-white text-gray-900 text-sm rounded-lg block w-[480px] p-2.5
             placeholder-gray-500 pl-7 focus:outline-none focus:ring-2 focus:ring-[#023E57]" 
            placeholder="Email"
            style={{ boxShadow: '0 4px 10px rgba(0, 0, 0, 0.25)' }}
           />
          </div> 
          <div className='Contact_Message_Input'>
            <textarea
            id="message"
            aria-describedby="helper-text-explanation"
            className="bg-white text-gray-900 text-sm rounded-lg  block w-[480px] h-[100px] p-2.5
             placeholder-gray-500 pl-7 focus:outline-none focus:ring-2 focus:ring-[#023E57]"
            placeholder="Write your Message here"
            style={{ 
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.25)',
            resize: 'none'
            }}
            ></textarea>

             <div className='Contact_Send_Button'>
             <button className="bg-[#023E57] hover:bg-transparent text-white font-semibold 
             hover:text-[#023E57] border-4 border-[#023E57] 
             rounded-lg transition-all duration-1000"
             style={{ fontSize: '15px', width: '190px', height: '55px' }}>
             Send Message 
             </button>
             </div>


          </div>


             
            </form>

             


           
          </div>


          

        </div>
      
    </div>
  )
}
