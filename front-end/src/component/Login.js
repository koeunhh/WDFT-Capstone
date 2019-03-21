import React, { Component } from 'react';

export default class Login extends Component{

  login = () => {
    const my_client_id = 'df1b151174ac40db981ad60c6f4e5c3c';
    const redirect_uri = 'http://localhost:3000/result';

    var scopes = 'user-read-private user-read-email user-top-read user-read-recently-played';
    window.location.href = 'https://accounts.spotify.com/authorize' +
      '?response_type=token' +
      '&client_id=' + my_client_id +
      (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
      '&redirect_uri=' + encodeURIComponent(redirect_uri);
  }

  render(){
    return(
      <div className='login'>
        <h2>Login Page</h2>
        <button onClick={this.login}>Login to Spotify</button>
      </div>
    )
  }
}