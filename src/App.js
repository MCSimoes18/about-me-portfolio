import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyInfo from './MyInfo';
import MyProjects from './MyProjects';
import skills from './skills';



function App() {
  return (
    <div className="App">
      <MyInfo />
      <MyProjects />
      <skills />
    </div>
  );
}

export default App;
