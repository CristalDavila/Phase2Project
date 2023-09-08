import React, { Component } from 'react';

// this component includes some contact info, and a form to submit commission requests.

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      request: '',
      successMessage: '',
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      name: this.state.name,
      request: this.state.request,
      timeframe: this.state.timeframe
    };
    
    //Lets a user submit their name, request, and timeframse for delivery of their commision. 
    //The submitted data appears in the "Contact section of the db.json file."

    fetch('http://localhost:3000/Contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newContact),
    })
      .then((response) => {
        if (response.ok) {
          this.setState({
            successMessage: 'Message sent. Thank you!',
            name: '',
            request: '',
            timeframe: ''
          });

          // if something goes wrong there's this. 

        } else {
          console.error('Request submission failed');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
 
  //lays out the page amd creates the input fields: 

  render() {
    return (
      <div>
        <h2>Contact</h2>
        <p>Cristal Dávila</p>
        <p>cristal.davila@gmail.com</p>
        <p>Space for studio or gallery address.</p>
        <img src="/assets/listening.jpg" alt="I'm Listening!" />
        <p>Would you like to commission a work of art? Send your name and request!</p>

        {this.state.successMessage && <p style={{ color: 'green' }}>{this.state.successMessage}</p>}

        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={this.state.name}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="request"
            placeholder="Request"
            value={this.state.request}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="timeframe"
            placeholder="Timeframe for Delivery"
            value={this.state.timeframe}
            onChange={this.handleInputChange}
          />
          <button type="submit">Send Request</button>
        </form>
      </div>
    );
  }
}

export default Contact;

