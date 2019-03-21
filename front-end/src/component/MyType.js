import React, { Component } from 'react';

export default class MyType extends Component{
  render(){
    const {userInfo, popularity} = this.props;

    return(
      <div className='result'>
      <h2>{userInfo.display_name}, your music type is</h2>
      <h1>A</h1>
      <h5>Popularity: {popularity}</h5>
      </div>
    )
  }
}