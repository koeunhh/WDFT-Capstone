import React, { Component } from 'react';
import {ScrollTo} from 'react-scroll-to';

import TopChoicesContent from './TopChoicesContent';
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

  render() {
    const { topArtists, topTracks } = this.props;
    const { artistsBoolean } = this.state;
    const btnArtist = artistsBoolean ? 'clicked' : 'notClicked';
    const btnTrack = artistsBoolean ? 'notClicked' : 'clicked';
    const artists = (topArtists.length === 1) ? 'Artist' : 'Artists';
    const tracks = (topTracks.length === 1) ? 'Track' : 'Tracks';

    return (
      <div className='topChoices' id='div1'>
        <h3>Your Top Choices</h3>
        <div className='buttons'>
          <button className={btnArtist} onClick={this.displayArtists}>Top {topArtists.length} {artists}</button>
          <button className={btnTrack} onClick={this.displayTracks}>Top {topTracks.length} {tracks}</button>
        </div>
        <TopChoicesContent topArtists={topArtists}
                           topTracks={topTracks}
                           artistsBoolean={artistsBoolean} />
        <ScrollTo>
          {({ scrollTo }) => (
            <button onClick={() => scrollTo({ y: 1334, smooth: true })}>Next</button>
          )}
        </ScrollTo>
      </div>
    )
  }
}