import React, { Component } from 'react';
import {ScrollTo} from 'react-scroll-to';

import TopChoicesContent from './TopChoicesContent';
import squiggly from '../assets/squiggly-line.svg';
import '../styles/topChoices.scss';

export default class TopChoices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artistsBoolean: true,
    }
  }

  displayArtists = () => {
    this.setState({
      artistsBoolean: true
    })
  }

  displayTracks = () => {
    this.setState({
      artistsBoolean: false
    })
  }
  render(){
    const { topArtists, topTracks } = this.props;
    const { artistsBoolean } = this.state;
    const btnArtist = artistsBoolean ? 'clicked' : 'notClicked';
    const btnTrack = artistsBoolean ? 'notClicked' : 'clicked';
    const artists = (topArtists.length === 1) ? 'Artist' : 'Artists';
    const tracks = (topTracks.length === 1) ? 'Track' : 'Tracks';

    return(
      <div className='topChoices' id='div1'>
        <h3 className='title'>Your Top 3</h3>
        <img src={squiggly} alt='squiggly-line'/>
        <div className='buttons'>
          {/* <button className={btnArtist} onClick={this.displayArtists}>Top {topArtists.length} {artists}</button>
          <button className={btnTrack} onClick={this.displayTracks}>Top {topTracks.length} {tracks}</button> */}
          <button className={btnArtist} onClick={this.displayArtists}>Artists</button>
          <button className={btnTrack} onClick={this.displayTracks}>Tracks</button>
        </div>
        <div className='content'>
        <TopChoicesContent topArtists={topArtists}
                           topTracks={topTracks}
                           artistsBoolean={artistsBoolean} />
        </div>
        <ScrollTo>
          {({ scrollTo }) => (
            <button onClick={() => scrollTo({ y: 1334, smooth: true })}>Next</button>
          )}
        </ScrollTo>
      </div>
    )
  }
}