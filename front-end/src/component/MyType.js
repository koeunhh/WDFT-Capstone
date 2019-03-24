import React, { Component } from 'react';
import {ScrollTo} from 'react-scroll-to';
import boy from '../assets/boy.svg';
import squiggly from '../assets/squiggly-line.svg';

import '../styles/myType.scss';

export default class MyType extends Component{
  render(){
    const {userInfo, popularity} = this.props;

    return(
      <div className='myType'>
      <h2 className='hi'>Hi {userInfo.display_name}, your music type is</h2>
      <h1 className='type'>Classic</h1>
      <img src={squiggly} alt='squiggly-line'/>
      <p className='description'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a.</p>
      <img className='character' src={boy} alt='character'/>
      {/* <h5>Popularity: {popularity}</h5> */}
      <ScrollTo>
      {({ scrollTo }) => (
        <button onClick={() => scrollTo({y: 667, smooth: true})}>See details</button>
      )}
      </ScrollTo>
      </div>
    )
  }
}