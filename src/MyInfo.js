import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom'

class MyInfo extends React.Component {


  // function renderProjects = () => {
  //   <h2> Meal Deals </h2>
  //   <Player
  //     playsInline
  //     poster="/assets/poster.png"
  //     src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
  //   />
  // }


  render () {
      return (
        <div>
          <Router> <Link to="/">About Me</Link> </Router>
          <Router> <Link to="/">Projects</Link> </Router>
          <Router> <Link to="/">Skills</Link> </Router>
          <Router> <Link to="/">Contact</Link> </Router>
        </div>
      )
    }
  }

export default MyInfo
