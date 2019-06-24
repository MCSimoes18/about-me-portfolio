import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom'

class MyInfo extends React.Component {


  render () {
      return (
        <div className="navBar">
          <div className="myName"> <h1> maria cristina simoes </h1> </div>
          <Router> <Link to="/">About Me</Link> </Router>
          <Router> <Link to="/">Projects</Link> </Router>
          <Router> <Link to="/">Skills</Link> </Router>
          <Router> <Link to="/">Contact</Link> </Router>
        </div>
      )
    }
  }

export default MyInfo
