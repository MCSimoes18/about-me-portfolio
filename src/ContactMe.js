import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom'
import axios from 'axios';

class ContactMe extends React.Component {


formSubmit = (e) => {
  e.preventDefault()

  this.setState({
      buttonText: '...sending'
  })

  this.resetForm = () => {
    this.setState({
        name: '',
        message: '',
        email: '',
        buttonText: 'Message Sent'
    })
}

  this.handleChange = (event) => {
    this.setState({
      message: event.target.message,
      name: event.target.name,
      email: event.target.email
    });
  }

  let data = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
  }

  axios.post('API_URI', data)
  .then( res => {
      this.setState({ sent: true }, this.resetForm())
  })
  .catch( () => {
    console.log('Message not sent')
  })
}


  render () {
      return (
        <div className='aboutMe'>
          <h2> Contact Me </h2>
        <form action="mailto:mariacristina.simoes@gmail.com" method="GET">
            <button className="contactBtn" onclick="location.href='mailto:mariacristina.simoes@gmail.com';">send mail</button>
        </form>

        <form>
        <button className="contactBtn">
          <a href={'https:www.linkedin.com/in/maria-cristina-simoes/'} target="_blank"> Connect on Linkedin </a>
        </button>
          </form>
        </div>
      )
    }
  }

export default ContactMe
