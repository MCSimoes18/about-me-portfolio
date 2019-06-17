import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom'

class AboutMe extends React.Component {

  render () {
      return (
        <div className="aboutMe">
        <p> here is where i type about me Flatiron School</p>
        <p> Flatiron School </p>
        <p> Wake Forest </p>
        <p> Belk </p>
        </div>
      )
    }
  }

export default AboutMe
