import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom'

class AboutMe extends React.Component {

  render () {
      return (
        <div className="aboutMe">
        <p> Maria Cristina is a full-stack web developer with experience in Ruby on Rails, JavaScript, and React and a passion for design. From experience in retail buying, e-commerce and marketing, she brings strong skills in analytics and consumer-behavior coupled with creativity, hard-work and a team-oriented mindset. She is driven to create high-performance products with a positive user experience, seeking to help others find their journey and destination on the web. </p>
        <p></p>
        </div>
      )
    }
  }

export default AboutMe
