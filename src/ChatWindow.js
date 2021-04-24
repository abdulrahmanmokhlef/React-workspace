import React, {Component} from 'react'
import PropTypes from 'prop-types';
import ChatHistory from  './ChatHistory'
import SendMessage from './SendMessage';


class ChatWindow extends Component{
	state ={
    	messages:[]
    }
	
	handleSendMessage = message =>{
      this.props.handleSendMessage(this.props.user.username, message);
    }	

	render(){
      	debugger
      	const {user, messages} = this.props;
    	return(
          <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{user.username}</div>
			<ChatHistory user={user} messages={messages} />
            <SendMessage handleSendMessage ={this.handleSendMessage}/>
          </div>
        )
    }
}

ChatWindow.propTypes = {
	user: PropTypes.object.isRequired,
 	handleSendMessage: PropTypes.func.isRequired,
    messages: PropTypes.array.isRequired,
}

export default ChatWindow