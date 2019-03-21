import React, { Component } from 'react';
import Artists from './Artists';
import Tracks from './Tracks';

export default class TopChoicesContent extends Component{
  render(){
    const { topArtists, topTracks, artistsBoolean} = this.props;

    return(
      artistsBoolean ? <Artists topArtists={topArtists}/> : <Tracks topTracks={topTracks}/>
    )
  }
}