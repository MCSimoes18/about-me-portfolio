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

  resetForm = () => {
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
        <div>
        <form>
            <label> Name </label>
            <input type="text" name="name" />
            <p> </p>
            <label> Email </label>
            <input type="text" name="email" />
            <p> </p>
            <label> Message </label>
            <textarea onChange={this.handleChange} />
            <p> </p>
          <input type="submit" value="Submit" onSubmit=this.formSubmit/>
        </form>
        </div>
      )
    }
  }

export default ContactMe
