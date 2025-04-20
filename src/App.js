import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/footer';
import Home from './components/pages/Home';
import Skills from './components/pages/Skills';
import Projects from './components/pages/Projects';
import About from './components/pages/About';
import Achievements from './components/pages/Achievements';
function App() {
  return (
    <div>
      <Router>
      <Header/>
      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/achievements' element={<Achievements/>}/>
        </Routes>
      </main>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
