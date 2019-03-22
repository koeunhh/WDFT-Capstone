import React, { Component } from 'react';
import '../styles/thankYou.scss';

export default class ThankYou extends Component{

  logout = () => {
    window.location.href = 'https://accounts.spotify.com/logout';
  }

  render(){
    return(
      <div className='thankYou'>
      <h1>Thank You</h1>
      <button onClick={this.logout}>Log out</button>
      </div>
    )
  }
}