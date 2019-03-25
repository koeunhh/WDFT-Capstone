import React, { Component } from 'react';
import { ScrollTo } from 'react-scroll-to';

import arrowNext from '../assets/arrow-next.svg';
import arrowPrevious from '../assets/arrow-previous.svg';
import play from '../assets/play.svg';
import squiggly from '../assets/squiggly-line.svg';

import '../styles/recommendation.scss';
export default class Recommendation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      play: false,
      index: 0,
      currentAudio: []
    }
    // each time a new Recommendation instance is created, this constructor will run
    // we want to create the 'audio' object for this instance
    // and store it on thiS instance
    this.audio = new Audio();
  }

  togglePlay = () => {
    // determine - are we currently paused or playing?
     // if we are already paused then we should find THIS instances audio tag and call play
     // else if we are already playing then we should find THIS instances audio tag and call .pause()
     const audio = this.audio;
     const { topTracks } = this.props;
     const currentTrack = topTracks[this.state.index];
     const preview_url = currentTrack.preview_url;
     audio.src = preview_url;
     this.setState({currentAudio: audio});

     if(this.state.play === false){
        audio.play();
        this.setState({play: true})
     }
     else{
        audio.pause();
        this.setState({play: false})
     }
  }

  nextSong = () => {
    if (this.state.index < 4) {
      this.setState({ index: (this.state.index + 1) });
      if(this.state.play === true){
        this.state.currentAudio.pause();
        this.setState({ play: false });
      }
    }
  }

  previousSong = () => {
    if (this.state.index > 0) {
      this.setState({ index: (this.state.index - 1) });
      if(this.state.play === true){
        this.state.currentAudio.pause();
        this.setState({ play: false });
      }
    }
  }

  render() {
    const { topTracks } = this.props;
    const currentTrack = topTracks[this.state.index];

    const albumCover = currentTrack.album.images[1].url;
    
    const artistsArray = currentTrack.artists.map(each => { return each.name});
    var artistsString = '';
    for(let i = 0; i < artistsArray.length; i++){
      if(i < artistsArray.length - 1){
        artistsString += artistsArray[i] + ', ';
      }
      else{
        artistsString += artistsArray[i];
      }
    }

    return (
      <div className='recommendation'>
        <h1>Recommended Songs</h1>
        <img src={squiggly} alt='squiggly-line'/>
        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a.</p>
        <div className='player'>
          <img onClick={this.previousSong} src={arrowPrevious} alt='previous' /> 
          <img className='player__albumCover' src={albumCover} alt='albumCover' />
          <img className='player__play' onClick={this.togglePlay} src={play} alt='playPause'/>
          <img onClick={this.nextSong} src={arrowNext} alt='next' />
        </div>
        <h5 className='songTitle'>{currentTrack.name}</h5>
        <h5>{artistsString}</h5>
        <h5>{currentTrack.album.release_date.substr(0, 4)}</h5>
        <ScrollTo>
          {({ scrollTo }) => (
            <button className='next' onClick={() => scrollTo({ y: 2668, smooth: true })}>Next</button>
          )}
        </ScrollTo>
      </div>
    )
  }
}