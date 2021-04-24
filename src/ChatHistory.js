import React from 'react'
import PropTypes from 'prop-types';

const ChatHistory = (props) =>{
  	const {user, messages} = props
    
	return(
    	<ul className="message-list">
              {messages.map((message, index) => (
                <li
                  key={index}
                  className={
                    user.username === message.username ? 'message sender' : 'message recipient'
                  }
                >
                  <p>{`${message.username}: ${message.text}`}</p>
                </li>
              ))}
        </ul>
    )
}

ChatHistory.propTypes={
	user: PropTypes.object.isRequired,
	messages: PropTypes.array.isRequired
}

export default ChatHistory;