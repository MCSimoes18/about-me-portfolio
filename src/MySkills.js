import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom'

class MySkills extends React.Component {


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
        <h2> Skills </h2>
        <p> JavaScript </p>
        <p> React </p>
        <p> Redux </p>
        <p> Ruby on Rails </p>
        <p> HTML </p>
        <p> CSS </p>
        </div>
      )
    }
  }

export default MySkills
