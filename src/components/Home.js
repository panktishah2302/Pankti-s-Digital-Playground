import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Profile from './Profile';
import About from './About';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Skills from './Skills';

const Home = () => {
  return (
    <BrowserRouter>
      <div className="container mt-5">
        <div className="d-flex justify-content-evenly">
          <div className='navbar-container shadow p-3 mb-5 bg-white rounded' style={{ width: '320px', height: '570px', marginTop: '65px', backgroundColor: '#001C30' }}><Profile /></div>
          <div className='navbar-container shadow p-3 mb-5 bg-white rounded' style={{ width: '717px', height: '794px', marginTop: '65px' }}>
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
          </div>
          
          <div className="navbar-container shadow p-3 mb-5 bg-white rounded" style={{ width: '90px', height: '380px', marginTop: '65px' }}><Navbar /></div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Home;
