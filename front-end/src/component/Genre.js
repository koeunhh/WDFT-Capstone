import React, { Component } from 'react';
import {ScrollTo} from 'react-scroll-to';

import squiggly from '../assets/squiggly-line.svg';
import '../styles/genre.scss';
import GenreItem from './GenreItem';

export default class Genre extends Component{
  render(){
    const genreArray = [
                          {'Hip Hop': 50}, 
                          {'Blues': 50}, 
                          {'Rock': 40}, 
                          {'Country': 20},
                          {'Jazz': 10}
                       ];

    return(
      <div className='genre'>
      <h1 className='title'>Your Top 5 Genre</h1>
      <img src={squiggly} alt='squiggly-line'/>
      <p className='description'>Tap on the bubbles to see the percentage of each genre of yours!</p>
      <div className='content'>
        {genreArray.map(item => {
          return <GenreItem item={item} index={genreArray.indexOf(item)+1}/>
        })}
      </div>
      <ScrollTo>
      {({ scrollTo }) => (
        <button onClick={() => scrollTo({y: 2001, smooth: true})}>Next</button>
      )}
      </ScrollTo>
      </div>
    )
  }
}