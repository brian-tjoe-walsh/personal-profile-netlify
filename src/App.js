import React from 'react';
import './App.css';
import About from './components/about';
import Skills from './components/skills';
import NavBar from './components/navbar';
import Projects from './components/projects';
import Contact from './components/contact';

function App() {

  return (
    <div className="App">
      <NavBar />
      <div id="jump-about"></div>
      <About />
      <div id="jump-language"></div>
      <Skills />
      <div className="invisible-skills"></div>
      <div id="jump-projects"></div>
      <div className="grad-grey"></div>
      <Projects />
      <div className="invisible-projects"></div>
      <div id="jump-contact"></div>
      <Contact />
      <p id="copyright">© 2020 BRIAN TJOE WALSH </p>
    </div>
  );
}

export default App;