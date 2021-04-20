import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TextManipulation from './TextManipulation'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
		<TextManipulation/>
		{/*<div className="container">
          <input type="text" placeholder="Say Something" />
          <p className="echo">Echo:</p>
          <p>This should mirror the text you typed into the input field.</p>
        </div>*/}
      </div>
    );
  }
}

export default App;
