import React, { Component } from 'react'

class UserFavoriteMovies extends Component {
  render(){
	return (
      <div>
      	<ul>
      		{this.props.profiles.map((profile) =>{
      			debugger
    			const username = this.props.users[profile.userID].name;
      			const favoriteMovie = this.props.movies[profile.favoriteMovieID].name;
      
              return (
                  <li key={profile.id}>
                	<p>{`${username}'s favorite movie is ${favoriteMovie}` }</p>
                  </li>
              )
 		 })}
  
     	</ul>
      </div>
	)
  }
}

export default UserFavoriteMovies;