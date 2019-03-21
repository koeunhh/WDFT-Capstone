import React, { Component } from 'react';

export default class Artists extends Component{
  render(){
    const {topArtists} = this.props;

    return(
      <div>
        {topArtists.map((artist) => {
          return <div className='content' key={artist.id}>
                    <img src={artist.images[2].url} alt='artist'/>
                    <h5>{artist.name}</h5>
                 </div>
        })}
      </div>
    )
  }
}