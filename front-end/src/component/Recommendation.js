import React, { Component } from 'react';
import { ScrollTo } from 'react-scroll-to';

import arrowNext from '../assets/arrow-next.svg';
import arrowPrevious from '../assets/arrow-previous.svg';
import play from '../assets/play.svg';
import '../styles/recommendation.scss';
export default class Recommendation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      play: false,
      index: 0
    }
  }

  togglePlay = (url) => {
    this.setState({ play: !this.state.play })
  }

  nextSong = () => {
    if (this.state.index < 4) {
      this.setState({ index: (this.state.index + 1) });
    }
  }

  previousSong = () => {
    if (this.state.index > 0) {
      this.setState({ index: (this.state.index - 1) });
    }
  }

  render() {
    const { topTracks } = this.props;
    const currentTrack = topTracks[this.state.index];

    const albumCover = currentTrack.album.images[1].url;
    const preview_url = currentTrack.preview_url;

    const audio = new Audio(preview_url);
    if (this.state.play === true) {
      // console.log(this.state.play);
      audio.play();
    }
    else {
      // console.log(this.state.play);
      audio.pause();
    }

    return (
      <div className='recommendation'>
        <div className='player'>
          <img onClick={this.previousSong} src={arrowPrevious} alt='previous' /> 
          <img className='player__albumCover' src={albumCover} alt='albumCover' />
          <img className='player__play' onClick={this.togglePlay} src={play} alt='playPause'/>
          <img onClick={this.nextSong} src={arrowNext} alt='next' />
        </div>
        <ScrollTo>
          {({ scrollTo }) => (
            <button className='next' onClick={() => scrollTo({ y: 2668, smooth: true })}>Next</button>
          )}
        </ScrollTo>
      </div>
    )
  }
}