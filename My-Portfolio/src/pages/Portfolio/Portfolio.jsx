import React from 'react'
import './Portfolio.css';
import WebDevelopment from '../../components/WebDevelopmentProject/WebDevelopment';

export default function Portfolio() {
  return (
    <div>
      <div className='Portfolio_Main'>
      <div className='Portfolio_TopContent'>
          <h1 className='Portfolio_welcome'>PROJECTS</h1>
          <h1 className='Portfolio_MyProjects'>My Recent Works</h1>
        </div>
        <div className='Portfolio_NavLink'>
          <h1>Web</h1>
          <h1> UI/UX</h1>
          <h1>Drawing</h1>

        </div>
        <div className='Portfolio_WebDevelopment'>
        <WebDevelopment/>
        </div>
      

      </div>
      
    </div>
  )
}
