/*
* Author: Solomon Antoine
* Date: 5/23/2018
* This app sends emails via Sendgrid
*/
import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    email: {
      recipient: '',
      sender: '',
      subject: '',
      text: ''
    }
  }

  sendEmail = _ => {
    const { email } = this.state;
    fetch(`http://127.0.0.1:4000/send-email?recipient=${email.recipient}&sender=${email.sender}&topic=${email.subject}&text=${email.text}`) //query string url
      .catch(err => console.error(err))
  }

  render() {
    const { email } = this.state;
    const spacer = {
      margin: 10
    }
    const textArea = {
      borderRadius: 4
    }
    return (
      <div className="App">
        <div style={{ marginTop: 10 }} >
          <h2> Send Email </h2>
          <label> Recipient </label>
          <br />
          <input value={email.recipient}
            onChange={e => this.setState({ email: { ...email, recipient: e.target.value } })} />
          <div style={spacer} />
          <label> Sender </label>
          <br />
          <input value={email.sender}
            onChange={e => this.setState({ email: { ...email, sender: e.target.value } })} />
          <div style={spacer} />
          <label> Subject </label>
          <br />
          <input value={email.subject}
            onChange={e => this.setState({ email: { ...email, subject: e.target.value } })} />
          <div style={spacer} />
          <label> Message </label>
          <br />
          <textarea rows={3} value={email.text} style={textArea}
            onChange={e => this.setState({ email: { ...email, text: e.target.value } })} />
          <div style={spacer} />
          <button onClick={this.sendEmail}> Send Email </button>
        </div>
      </div>
    );
  }
}

export default App;
