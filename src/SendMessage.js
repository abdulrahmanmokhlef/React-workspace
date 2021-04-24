import React, { Component } from 'react';
import PropTypes from 'prop-types';


class SendMessage extends Component{
  	state = {
    	message: '',
    };


    isDisabled = () => {
      return this.state.message === ''? true : false;
    };

	handelChange = event =>{
      debugger
      const { value } = event.target; 
      this.setState(({
        	message: value
    	}));
    }

	handelSendMesssage = event =>{
      	debugger
		event.preventDefault();   
      	this.setState(({
        	message: event.target.value
    	}));
      
    	this.props.handleSendMessage(this.state.message);
      	
      	this.setState(({
        	message: ''
    	}));
    }

	render(){
    	return(
        	<div>
              <form onSubmit={this.handelSendMesssage} className="input-group">
                <input 
      				type="text" 
      				className="form-control" 
      				value ={this.state.message} 
                 	placeholder="Enter your message..." 
                 	onChange={this.handelChange}/>
                <div className="input-group-append">
                  <button className="btn submit-button" disabled={this.isDisabled()}>
                    SEND
                  </button>
                </div>
              </form>
            </div>
        )
    }
}

SendMessage.propTypes = {
	handleSendMessage: PropTypes.func.isRequired
}

export default SendMessage; 