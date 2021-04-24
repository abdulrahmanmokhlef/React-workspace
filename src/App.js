import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatWindow from './ChatWindow'

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/

const users = [{ username: 'Abdulrahman' }, { username: 'Mohamed' }];

class App extends Component {
  state = {
  	messages:[]
  }
	
  handleSendMessage = (username, message)=>{
    debugger
    const newMessage={
    	username: username,
      	text: message
    }
    
	this.setState(preState =>({
    	messages: [...preState.messages, newMessage]
    }));
  }
  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
			
    		{/*proposed solution*/}
    		{users.map(user =>(
  				<ChatWindow 
                  key={user.username}
                  user ={user} 
                  messages = {this.state.messages} 
                  handleSendMessage = {this.handleSendMessage} />
  			))}    		
			{/* old solution
    	  	<ChatWindow user ={users[0]} messages = {this.state.messages} handleSendMessage = {this.handleSendMessage} />
          	<ChatWindow user ={users[1]} messages = {this.state.messages} handleSendMessage = {this.handleSendMessage} />*/}
        </div>
      </div>
    );
  }
}

export default App;
