import React, {Component} from 'react'

class MovieDetails extends Component{
	render(){
      debugger
      const {users, movies, profiles} = this.props;
    	return(
        	<div>
              {Object.keys(movies).map((movieId)=>{
                    debugger
                    const inFavorites = profiles.filter(profile => profile.favoriteMovieID === movieId);
          	 		const movie= movies[movieId];
          
                   	if(inFavorites.length > 0){
                      return (
                        <div>
                            <h2>{movies[movieId].name}</h2>
                            <p>Liked By:</p>
                            <ul>
                              {inFavorites.map(f =>{
                               debugger
                                const user = users[f.userID];
                                return(
                                  <li key="f.id">{user.name}</li>
                                )
                              })}
                           </ul>
                        </div>
                      )
                     }else{
                       return(
                            <div>	
                              <h2>{movies[movieId].name}</h2>
                              <p>None of the current users liked this movie</p>
                            </div>
                        )
                     }
                })}
              </div>
        )
    }
}

export default MovieDetails