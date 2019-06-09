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
        <p> JavaScript, React, Redux, Ruby on Rails, HTML, CSS </p>
        <img src={process.env.PUBLIC_URL + '/jscript.svg'} />
        <img src={process.env.PUBLIC_URL + '/react.svg'} />
        <img src={process.env.PUBLIC_URL + '/redux.png'} />
        <img src={process.env.PUBLIC_URL + '/rails.svg.png'} />
        <img src={process.env.PUBLIC_URL + '/html.svg'} />
        <img src={process.env.PUBLIC_URL + '/css.png'} />
        </div>
      )
    }
  }

export default MySkills
