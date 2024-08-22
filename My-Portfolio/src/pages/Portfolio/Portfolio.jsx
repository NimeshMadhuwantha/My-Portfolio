import React, { useState } from 'react';
import './Portfolio.css';
import WebDevelopment from '../../components/WebDevelopmentProject/WebDevelopment';
import UIUXProject from '../../components/UIUXProjects/UIUXProject';
import DrawingProject from '../../components/DrawingProjects/DrawingProject';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('Web');
  const [popupImage, setPopupImage] = useState(null);

  const openPopup = (imageSrc) => {
    setPopupImage(imageSrc);
  };

  const closePopup = () => {
    setPopupImage(null);
  };

  return (
    <div>
      <div className='Portfolio_Main'>
        <div className='Portfolio_TopContent'>
          <h1 className='Portfolio_welcome'>PROJECTS</h1>
          <h1 className='Portfolio_MyProjects'>My Recent Works</h1>
        </div>
        <div className='Portfolio_NavLink'>
          <h1
            className={activeTab === 'Web' ? 'Portfolio_ActiveLink' : ''}
            onClick={() => setActiveTab('Web')}
          >
            Web
          </h1>
          <h1
            className={activeTab === 'UI/UX' ? 'Portfolio_ActiveLink' : ''}
            onClick={() => setActiveTab('UI/UX')}
          >
            UI/UX
          </h1>
          <h1
            className={activeTab === 'Drawing' ? 'Portfolio_ActiveLink' : ''}
            onClick={() => setActiveTab('Drawing')}
          >
            Drawing
          </h1>
        </div>
        <div className='Portfolio_WebDevelopment'>
          {activeTab === 'Web' && <WebDevelopment />}
          {activeTab === 'UI/UX' && <UIUXProject />}
          {activeTab === 'Drawing' && <DrawingProject openPopup={openPopup} />}
        </div>
      </div>

      {popupImage && (
        <div className="pop_up">
          <div className="pop_up-inner">
            <button className="pop_up-close" onClick={closePopup}>X</button>
            <img src={popupImage} alt="Pop_up" />
          </div>
        </div>
      )}
    </div>
  );
}
