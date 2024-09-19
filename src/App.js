import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Specials from './components/Specials';
import FullMenu from './Pages/FullMenu/fullMenu';
import Home from './Pages/FullMenu/Home';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={ <Home/> }/>
        <Route path="/menu" element={ <FullMenu /> }/>
      </Routes>
    </Router>
  );
}

export default App;
