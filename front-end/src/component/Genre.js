import React, { Component } from 'react';
import {ScrollTo} from 'react-scroll-to';

import '../styles/genre.scss';

export default class Genre extends Component{

  render(){
    return(
      <div className='genre'>
      <h1>Top Genre</h1>
      <ScrollTo>
      {({ scrollTo }) => (
        <button onClick={() => scrollTo({y: 2001, smooth: true})}>Next</button>
      )}
      </ScrollTo>
      </div>
    )
  }
}