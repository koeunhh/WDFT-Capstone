import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';

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
      <ScrollAnimation animateIn="tada">
      <div className='title'>
      <h1>Thank You</h1>
      <img src={squiggly} alt='squiggly-line'/>
      </div>
      </ScrollAnimation>
      <div className='content'>
        <h5>Code by Koeun Lee</h5>
        <h5>Brainstation</h5>
        <h5 id='design'>Design by Chelsea Hwang</h5>
      </div>
      <ScrollAnimation initiallyVisible={true} delay={1500} animateIn="bounceIn">
      <button onClick={this.logout}>Log out</button>
      </ScrollAnimation>
      </div>
    )
  }
})