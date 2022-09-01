import React from 'react';
import { Routes,Route } from 'react-router-dom';
import './App.css';
import Character from './Components/Character/Character';
import Landing from './Components/Landing/Landing';
import PortfolioSimple from './Components/PortfolioSimple/PortfolioSimple';




function App() {
  return(
  <Routes>
    <Route  path={'/'} element={<Landing/>}/>
    <Route path={'/simple'} element={<PortfolioSimple/>}/>
    <Route path={'/arcade'} element={<Character/>}/>

  </Routes>
  )
}

export default App;
