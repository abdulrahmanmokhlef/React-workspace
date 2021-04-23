import React, {Component} from 'react'
import PropTypes from 'prop-types';

class AddNewUser  extends Component{
  	state={
      	user: {
            firstName: '',
            lastName: '',
            username: '',
        },
 		isUserExist: false,
    };

	isUserExist = username=>{
      debugger
      const { users } = this.props
      for(let i = 0; i <users.length; i ++){
      	if(users[i].username === username){
        	return true;
        }
      }
      return false  
    }

	handleChange= event =>{
      const target = event.target;
      const name = target.name;
      const value = target.value;
      
      this.setState(currState=>({
          ...currState,
          user: {
          ...currState.user,
          [name]: value,
        },
      }));
    }

	inputIsEmpty = ()=>{
      debugger
     	const { firstName, lastName, username } = this.state.user;
    	return firstName ==='' || lastName ==='' || username ==='';
    }
	
	addNewUser = event =>{
      debugger
      event.preventDefault();
      const isUserExist = this.isUserExist(this.state.user.username);

      if(!isUserExist){
        this.props.handleAddNewUser(this.state.user)	 	
      }
      
      this.setState(() => ({
      	isUserExist,
      }));
      
    }

	render(){
      debugger
      const { firstName, lastName, username } = this.state.user;
    	return(
          <div>
          	<form onSubmit={this.addNewUser}>
              <input type="text"placeholder="First Name" name ="firstName"value={firstName} onChange={this.handleChange}/>
              <input type="text"placeholder="Last Name" name ="lastName" value={lastName} onChange={this.handleChange}/>
              <input type="text"placeholder="Username" name = "username" value={username} onChange={this.handleChange}/>
              <button disabled={this.inputIsEmpty()}>Add</button>
            </form>
			{this.state.isUserExist ? (
                <p className="error">You cannot add a user that already exists.</p>
                ) : (
                ''
              )}
          </div>
        )
    }
}

AddNewUser.propsType={
	handleAddNewUser: PropTypes.func.isRequired,
  	users : PropTypes.array.required
}

export default AddNewUser;