import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

import squiggly from '../assets/squiggly-line.svg';
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
      <img src={squiggly}/>
      <div className='content'>
        <h5>Muze by Koeun Lee</h5>
        <h5>Branstation</h5>
        <h5 id='design'>Design by Chelsea Hwang</h5>
      </div>
      <button onClick={this.logout}>Log out</button>
      </div>
    )
  }
})