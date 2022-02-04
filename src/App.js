// import logo from './logo.svg';
import React, { useRef } from 'react';
import LoadingBar from 'react-top-loading-bar'
import './App.scss';
import 'boxicons'
import NavBar from './components/navbar/NavBar';
import Home from './components/pages/Home';
import Design from './components/pages/Design';
import Develop from './components/pages/Develop';
import Operate from './components/pages/Operate';
import Pricing from './components/pages/Pricing';
import Platform from './components/pages/Platform';
import Footer from './components/footer/Footer';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  const ref = useRef(null)

  return (
    <div>
      <Router>
        <LoadingBar color='#f11946' ref={ref} />
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/design' element={<Design />} />
          <Route path='/develop' element={<Develop />} />
          <Route path='/operate' element={<Operate />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/platform' element={<Platform />} />
        </Routes>
        <Footer />
      </Router>
    </div>

  );
}

export default App;
