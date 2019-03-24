import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import '../styles/thankYou.scss';

export default withRouter(class ThankYou extends Component{

  logout = () => {
    window.open('https://accounts.spotify.com/logout');
    this.props.history.push('/');
  }

  render(){
    return(
      <div className='thankYou'>
      <h1>Thank You</h1>
      <button onClick={this.logout}>Log out</button>
      </div>
    )
  }
})