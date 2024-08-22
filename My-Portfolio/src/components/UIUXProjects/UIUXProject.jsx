import React from 'react'
import './UIUXProject.css'
import MyPortfolio from '../../assets/Projects/MyPortfolio.png';
import PizzaApp from '../../assets/Projects/PizzaApp.jpg';
import HealthCareApp from '../../assets/Projects/HealthCareApp.jpg';
import ShoppingApp from '../../assets/Projects/ShoppingApp.png';

const UIUXProject = () => {
  return (
    <div>
        <div className='UIUX_Main'>
            <div className='UIUX_Content'>
            <div className='UIUX_Cards'>
                <div className='UIUX_Card1'>
                <a href="https://www.behance.net/gallery/199603389/Health-care-Mobile-app-UIUX" target="_blank" rel="noopener noreferrer" 
                style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
                    <img src={HealthCareApp} alt="" />
                    <h1>Health care Mobile app  <br />
                    UIUX</h1>
                    <h2>Figma | Photoshop</h2>
                </a>
                </div>
                <div className='UIUX_Card1'>
                <a href="https://www.behance.net/gallery/199746819/Pizza-Mobile-App-UIUX" target="_blank" rel="noopener noreferrer" 
                style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
                    <img src={PizzaApp} alt="" />
                    <h1>Pizza Mobile app  <br />
                    UIUX</h1>
                    <h2>Figma | Photoshop</h2>
                </a>
                </div>
                <div className='UIUX_Card1'>
                <a href="https://dribbble.com/shots/24721553-UIUX-Designing-Mobile-App?utm_source=Clipboard_Shot&utm_campaign=Madhu6114&utm_content=UIUX%20Designing%20Mobile%20App&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=Madhu6114&utm_content=UIUX%20Designing%20Mobile%20App&utm_medium=Social_Share" 
                target="_blank" rel="noopener noreferrer" 
                style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
                    <img src={ShoppingApp} alt="" />
                    <h1>Shopping Mobile app <br />
                    UIUX </h1>
                    <h2>Figma | Photoshop</h2>
                </a>
                </div>

            </div>
            <div className='UIUX_Cards'>
                <div className='UIUX_Card1'>
                <a href="https://www.behance.net/gallery/205631415/My-Portfolio-Web-Site" target="_blank" rel="noopener noreferrer" 
                style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
                    <img src={MyPortfolio} alt="" />
                    <h1>My Portfolio Web app  <br />
                    UIUX </h1>
                    <h2>Figma | Photoshop</h2>
                    </a>
                </div>
                <div className='UIUX_Card1'>
                </div>
                <div className='UIUX_Card1'>
                </div>
                
            </div>
            <div className='UIUX_Cards'>
                <div className='UIUX_Card1'>
                </div>
                <div className='UIUX_Card1'>
                </div>
                <div className='UIUX_Card1'>
                </div>

            </div>
            </div>

        </div>
    </div>
  )
}

export default UIUXProject