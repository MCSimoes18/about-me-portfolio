import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyInfo from './MyInfo';
import MyProjects from './MyProjects';
import MySkills from './MySkills';
import ContactMe from './ContactMe';
import AboutMe from './AboutMe';



function App() {
  return (
    <div className="App">
      <MyInfo />
      <AboutMe />
      <MyProjects />
      <MySkills />
      <ContactMe />
    </div>
  );
}

export default App;
