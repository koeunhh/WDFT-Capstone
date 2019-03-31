import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

export default class Artists extends Component{
  render(){
    const {topArtists} = this.props;
    const artistArray = [];
    for(let i = 0; i < 3; i++){
      artistArray.push(topArtists[i]);
    }

    return(
      <>
        {artistArray.map((artist) => {
          return  <ScrollAnimation animateIn="fadeInLeft" key={artistArray.indexOf(artist)}>
                    <div className='content__item' key={artistArray.indexOf(artist)}>
                      <img src={artist.images[2].url} alt='artist'/>
                      <h5>{artist.name}</h5>
                    </div>
                  </ScrollAnimation>
        })}
      </>
    )
  }
}