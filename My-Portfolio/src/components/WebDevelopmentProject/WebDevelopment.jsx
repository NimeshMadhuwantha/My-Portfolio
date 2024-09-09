import React from 'react'
import './WebDevelopment.css';
import MyPortfolio from '../../assets/Projects/MyPortfolio.png';
import WeatherApp from '../../assets/Projects/WeatherApp.png';
import GameSeek from '../../assets/Projects/GameSeek.jpg';
import CurrencyExchange from '../../assets/Projects/CurrencyExchange.jpg';

const WebDevelopment = () => {
  return (
    <div>
        <div className='WebDevelopment_Main'>
            <div className='WebDev_Content'>
            <div className='WebD_Cards'>
                <div className='WebD_Card1'>
                <a href="https://github.com/NimeshMadhuwantha/My-Portfolio.git" target="_blank" rel="noopener noreferrer" 
                style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
                    <img src={MyPortfolio} alt="" />
                    <h1>Web Application <br />
                    My Portfolio</h1>
                    <h2>JavaScript | React | Tailwind CSS</h2>
                </a>
                </div>
                <div className='WebD_Card1'>
                <a href="https://github.com/NimeshMadhuwantha/WeatherApp.git" target="_blank" rel="noopener noreferrer" 
                style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
                    <img src={WeatherApp} alt="" />
                    <h1>Weather Application <br />
                    Python</h1>
                    <h2>Python | Tkinter</h2>
                </a>
                </div>
                <div className='WebD_Card1'>
                <a href="https://github.com/NimeshMadhuwantha/currency-exchange-basic-web-application.git" target="_blank" rel="noopener noreferrer" 
                style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
                    <img src={CurrencyExchange} alt="" />
                    <h1>Currency Convert <br />
                    Web Application </h1>
                    <h2>JavaScript | React | Tailwind CSS</h2>
                </a>
                </div>

            </div>
            <div className='WebD_Cards'>
                <div className='WebD_Card1'>
                <a href="https://github.com/NimeshMadhuwantha/GameSeek.git" target="_blank" rel="noopener noreferrer" 
                style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
                    <img src={GameSeek} alt="" />
                    <h1>GameSeek  <br />
                    Web Application </h1>
                    <h2>TypeScript | React | Chakara UI</h2>
                </a>
                </div>
                <div className='WebD_Card1'>
                </div>
                <div className='WebD_Card1'>
                </div>

            </div>
            <div className='WebD_Cards'>
                <div className='WebD_Card1'>
                </div>
                <div className='WebD_Card1'>
                </div>
                <div className='WebD_Card1'>
                </div>

            </div>
            </div>

        </div>
    
    </div>
  )
}

export default WebDevelopment