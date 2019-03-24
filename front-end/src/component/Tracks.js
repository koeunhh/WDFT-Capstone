import React, { Component } from 'react';

export default class Tracks extends Component{
  render(){
    const {topTracks} = this.props;
    const trackArray = [];
    for(let i = 0; i < 3; i++){
      trackArray.push(topTracks[i]);
    }

    return(
      <>
        {trackArray.map((track) => {
          return <div className='content__item' key={track.id}>
                    <img src={track.album.images[2].url} alt='artist'/>
                    <h5>{track.name}</h5>
                 </div>
        })}
      </>
    )
  }
}