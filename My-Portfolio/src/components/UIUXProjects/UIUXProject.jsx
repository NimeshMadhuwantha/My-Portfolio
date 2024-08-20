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
                    <img src={HealthCareApp} alt="" />
                    <h1>Health care Mobile app  <br />
                    UIUX</h1>
                    <h2>Figma | Photoshop</h2>
                </div>
                <div className='UIUX_Card1'>
                    <img src={PizzaApp} alt="" />
                    <h1>Pizza Mobile app  <br />
                    UIUX</h1>
                    <h2>Figma | Photoshop</h2>
                </div>
                <div className='UIUX_Card1'>
                    <img src={ShoppingApp} alt="" />
                    <h1>Shopping Mobile app <br />
                    UIUX </h1>
                    <h2>Figma | Photoshop</h2>
                </div>

            </div>
            <div className='UIUX_Cards'>
                <div className='UIUX_Card1'>
                    <img src={MyPortfolio} alt="" />
                    <h1>My Portfolio Web app  <br />
                    UIUX </h1>
                    <h2>Figma | Photoshop</h2>
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