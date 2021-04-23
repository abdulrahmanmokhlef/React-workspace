import React, {Component} from 'react'
import AddNewUser from './AddNewUser'
import UserList from "./UserList";

class VideoGameSample  extends Component{
  	state={
      users :[],
    };	

	handleAddNewUser = user =>{
      debugger
      this.setState(preState =>({
        users: [...preState.users, user]
      }));
    };
	
	render(){
      debugger
      const users = this.state.users;
    	return(
          <div>
          	<h2>Video Game Sample</h2>
           	<AddNewUser handleAddNewUser ={this.handleAddNewUser} users = {this.state.users}/>
			<UserList users = {this.state.users}/>
          </div>
        )
    }
}

export default VideoGameSample;