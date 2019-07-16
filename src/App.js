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
      <MyInfo /> // Nav Links
      <AboutMe /> // Description about me
      <MyProjects /> // My projects from Flatiron School
      <MySkills /> // My technologies
      <ContactMe /> // Email and Linkedin
    </div>
  );
}

export default App;
