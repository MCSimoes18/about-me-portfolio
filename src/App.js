import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyInfo from './MyInfo';
import MyProjects from './MyProjects';
import MySkills from './MySkills';



function App() {
  return (
    <div className="App">
      <MyInfo />
      <MyProjects />
      <MySkills />
    </div>
  );
}

export default App;
