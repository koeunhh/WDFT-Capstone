import React, { Component } from 'react';

export default class Tracks extends Component{
  render(){
    const {topTracks} = this.props;

    return(
      <div>
        {topTracks.map((track) => {
          return <div className='content' key={track.id}>
                    <img src={track.album.images[2].url} alt='artist'/>
                    <h5>{track.name}</h5>
                 </div>
        })}
      </div>
    )
  }
}