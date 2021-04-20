import React, {Component} from 'react'

class TextManipulation extends Component{
  	state = {
    	query:''
    }

	updateQuery = (query)=>{
    	this.setState(()=>({
        	query: query.trim()
        }));
    }	
	
	render(){
    	return(
          <div className="container">
            <input 
           		type="text" 
           		value={this.state.query} 
          		onChange ={(event) => this.updateQuery(event.target.value)}
          		placeholder="Say Something" />
            <p className="echo">Echo:</p>
          <p>{this.state.query}</p>
        </div>
        )
    }
}

export default TextManipulation