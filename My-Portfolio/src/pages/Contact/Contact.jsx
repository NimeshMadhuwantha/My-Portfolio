import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import './Contact.css';
import callIcon from '../../assets/Icons/callIcon.png';
import LocationIcon from '../../assets/Icons/LocationIcon.png';
import mailIcon from '../../assets/Icons/mailIcon.png';

export default function Contact() {
  const form = useRef();
  const [email, setEmail] = useState('');
  const [reEmail, setReEmail] = useState('');
  const [formValid, setFormValid] = useState(false);

  const validateForm = () => {

    const isValid =
      email &&
      reEmail &&
      email === reEmail &&
      form.current['from_name'].value.trim() !== '' &&
      form.current['message'].value.trim() !== '';
    
    setFormValid(isValid);
  };

  const sendEmail = (e) => {
    e.preventDefault();
  
    if (!formValid) {
      Swal.fire({
        icon: 'warning',
        title: 'Incomplete Form',
        text: 'Please make sure all fields are filled out correctly.',
        confirmButtonText: 'Close',
        confirmButtonColor: '#023E57',
        width: window.innerWidth < 640 ? '320px' : '480px',
        padding: window.innerWidth < 640 ? '0.8rem' : '1rem',
        didOpen: () => {
          if (window.innerWidth < 640) {
            document.querySelector('.swal2-title').style.fontSize = '1.5rem';
            document.querySelector('.swal2-content').style.fontSize = '0.8rem';
            document.querySelector('.swal2-popup').style.height = 'auto';
          }
        },
      });
      return;
    }
  
    emailjs
      .sendForm(
        'service_31tv3x1',
        'template_7j39mln',
        form.current,
        'W2F6tPd0HY0HnR4vL'
      )
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          Swal.fire({
            icon: 'success',
            title: 'Message Sent',
            text: 'Thank you for reaching out! I will get back to you soon.',
            confirmButtonText: 'Close',
            confirmButtonColor: '#023E57',
            width: window.innerWidth < 640 ? '320px' : '480px',
            padding: window.innerWidth < 640 ? '0.8rem' : '1rem',
            didOpen: () => {
              if (window.innerWidth < 640) {
                document.querySelector('.swal2-title').style.fontSize = '1.5rem';
                document.querySelector('.swal2-content').style.fontSize = '0.8rem';
                document.querySelector('.swal2-popup').style.height = 'auto';
              }
            },
          });
        },
        (error) => {
          console.log('FAILED...', error.text);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong! Please try again later.',
            confirmButtonText: 'Close',
            confirmButtonColor: '#023E57',
            width: window.innerWidth < 640 ? '320px' : '480px',
            padding: window.innerWidth < 640 ? '0.8rem' : '1rem',
            didOpen: () => {
              if (window.innerWidth < 640) {
                document.querySelector('.swal2-title').style.fontSize = '1.5rem';
                document.querySelector('.swal2-content').style.fontSize = '0.8rem';
                document.querySelector('.swal2-popup').style.height = 'auto';
              }
            },
          });
        }
      );
  };
  

  return (
    <div className='Contact_Main'>
      <div className='Contact_TopContent'>
        <h1 className='Contact_LetsConnect_Text'>LETS CONNECT</h1>
        <h1 className='Contact_GetTouch'>Get in <span>touch</span></h1>
        <h1 className='Contact_DesPara'>
          <span>I’m a passionate UI/UX Engineer,</span> full stack developer, and artist, 
          currently pursuing a BSc (Hons) in Computing and Information Systems. <br />
          Connect with me to explore innovative digital solutions together.
        </h1>
      </div>

      <div className='Contact_MiddleContent'>
        <div className='Contact_Details'>
          <div className='Contact_Info_div'>
          <h1 className='Contact_Info'>Contact Information</h1>
          </div>
          <h2>Put me a message and connect with me—let's collaborate! Reach out via email or through my social profiles</h2>
          <div className='Contact_Icons'>
            <div className='Contact_Call'>
              <img src={callIcon} alt="Call Icon" />
              <h1>+94 70 5242 912</h1>
            </div>
            <div className='Contact_Mail'>
              <img src={mailIcon} alt="Mail Icon" />
              <h1>janmadhuwantha@gmail.com</h1>
            </div>
            <div className='Contact_Location'>
              <img src={LocationIcon} alt="Location Icon" />
              <h1>Middeniya, Sri Lanka</h1>
            </div>
          </div>
        </div>

        <div className='Contact_Form'>
        <form className="Contact_Form_Input" ref={form} onSubmit={sendEmail}> 
          <div className='Contact_Name_Input'>
            <input 
              type="text" 
              name="from_name"
              className="bg-white text-gray-900 text-sm rounded-lg block w-full p-2.5
              placeholder-gray-500 pl-7 focus:outline-none focus:ring-2 focus:ring-[#023E57]" 
              placeholder="Name"
              style={{ boxShadow: '0 4px 10px rgba(0, 0, 0, 0.25)' }}
              onChange={validateForm}
            />
          </div>

          <div className='Contact_Email_Input'>
            <input 
              type="email" 
              name="from_email"
              className="bg-white text-gray-900 text-sm rounded-lg block w-full p-2.5
              placeholder-gray-500 pl-7 focus:outline-none focus:ring-2 focus:ring-[#023E57]" 
              placeholder="Email"
              style={{ boxShadow: '0 4px 10px rgba(0, 0, 0, 0.25)' }}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                validateForm();
              }}
            />
          </div> 

          <div className='Contact_Email_Input'>
            <input 
              type="email" 
              name="re_email"
              className="bg-white text-gray-900 text-sm rounded-lg block w-full p-2.5
              placeholder-gray-500 pl-7 focus:outline-none focus:ring-2 focus:ring-[#023E57]" 
              placeholder="Re-enter Email"
              style={{ boxShadow: '0 4px 10px rgba(0, 0, 0, 0.25)' }}
              value={reEmail}
              onChange={(e) => {
                setReEmail(e.target.value);
                validateForm();
              }}
            />
          </div> 

          <div className='Contact_Message_Input'>
            <textarea
              name="message"
              className="bg-white text-gray-900 text-sm rounded-lg block w-full h-[100px] p-2.5
              placeholder-gray-500 pl-7 focus:outline-none focus:ring-2 focus:ring-[#023E57]"
              placeholder="Write your Message here"
              style={{ 
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.25)',
                resize: 'none'
              }}
              onChange={validateForm}
            ></textarea>

              <div className='Contact_Send_Button'>
                <button 
                  type="submit" 
                  className="bg-[#023E57] hover:bg-transparent text-white font-semibold 
                  hover:text-[#023E57] border-4 border-[#023E57] 
                  rounded-lg transition-all duration-1000
                   xl:w-[210px] xl:h-[50px] 
                   lg:w-[185px] lg:h-[41px] 
                   md:w-[170px] md:h-[40px] 
                   sm:w-[155px] sm:h-[40px] 
                   w-[125px] h-[34px]   
                   xl:text-[1rem] 
                   lg:text-[1rem]  
                   md:text-[0.8rem] 
                   sm:text-[0.7rem] 
                   text-[0.5rem]  
                  "  
                >
                  Send Message 
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
