import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/home';
import SideBar from './components/SideBar/SideBar';
import Contact from './pages/Contact/Contact';
import AboutMe from './pages/AboutMe/AboutMe';
import Portfolio from './pages/Portfolio/Portfolio';
import Skills from './pages/Skills/Skills';


export default function App() {
  return (
    <div>
      <SideBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Skills" element={<Skills/>} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
