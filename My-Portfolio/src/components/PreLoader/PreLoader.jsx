import React from 'react'
import './PreLoader.css';
import PreLoadergif from '../../assets/PreLoadergif.gif';


const PreLoader = () => {
  return (
    <div className="PreLoader">
        <img src={PreLoadergif} alt="Loading..." />
    </div>
  )
}

export default PreLoader