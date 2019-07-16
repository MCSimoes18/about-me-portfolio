import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom'

class MyInfo extends React.Component {


  render () {
      return (
        <div className="navBar">
          <div className="myName"> <h1> maria cristina simoes </h1> </div>
          <div className="myLinks">
          <Router className="myLinks" > <Link to="/">about</Link> </Router>
          <Router className="myLinks"> <Link to="/">projects</Link> </Router>
          <Router className="myLinks"> <Link to="/">skills</Link> </Router>
          <Router className="myLinks"> <Link to="/">contact</Link> </Router>
        </div>
        </div>
      )
    }
  }

export default MyInfo
