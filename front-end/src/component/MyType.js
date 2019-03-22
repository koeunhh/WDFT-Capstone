import React, { Component } from 'react';
import {ScrollTo} from 'react-scroll-to';

import '../styles/myType.scss';

export default class MyType extends Component{
  render(){
    const {userInfo, popularity} = this.props;

    return(
      <div className='myType'>
      <h2>{userInfo.display_name}, your music type is</h2>
      <h1>A</h1>
      <h5>Popularity: {popularity}</h5>
      <ScrollTo>
      {({ scrollTo }) => (
        <button onClick={() => scrollTo({y: 667, smooth: true})}>See details</button>
      )}
      </ScrollTo>
      </div>
    )
  }
}