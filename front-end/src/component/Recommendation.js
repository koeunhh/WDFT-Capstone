import React, { Component } from 'react';
import { ScrollTo } from 'react-scroll-to';
import ScrollAnimation from 'react-animate-on-scroll';

import arrowNext from '../assets/arrow-next.svg';
import arrowPrevious from '../assets/arrow-previous.svg';
import play from '../assets/play.svg';
import pause from '../assets/pause.svg';
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

  componentDidMount(){
    // console.log(this.props.recommendation);
  }

  togglePlay = () => {
    // determine - are we currently paused or playing?
     // if we are already paused then we should find THIS instances audio tag and call play
     // else if we are already playing then we should find THIS instances audio tag and call .pause()
     const audio = this.audio;
     const { recommendation } = this.props;
     const currentTrack = recommendation[this.state.index];
     const preview_url = currentTrack.preview_url;
     audio.src = preview_url;
     this.setState({currentAudio: audio});

     if(this.state.play === false){
        if(preview_url !== null){
          audio.play();
          this.setState({play: true})
        }
     }
     else{
        audio.pause();
        this.setState({play: false})
     }
  }

  nextSong = () => {
    if (this.state.index < 5) {
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
    const { recommendation } = this.props;
    const {index} = this.state;

    const currentTrack = recommendation[index];

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

    var playPause;
    this.state.play ? playPause = pause : playPause = play;

    return (
      <div className='recommendation'>
        <h1>Recommended Songs</h1>
        <img src={squiggly} alt='squiggly-line'/>
        <p>Based on your taste in music that Muze analyzed, <br/> we thought you might like these songs!</p>
        <ScrollAnimation animateIn="fadeIn" duration='2'>
        <div className='player'>
          <img onClick={this.previousSong} src={arrowPrevious} alt='previous' /> 
          <img className='player__albumCover' src={albumCover} alt='albumCover' />
          <div className='player__overlay'></div>
          <img className='player__play' onClick={this.togglePlay} src={playPause} alt='playPause'/>
          <img onClick={this.nextSong} src={arrowNext} alt='next' />
        </div>
        <div className='info'>
          <h5 className='songTitle'>{currentTrack.name}</h5>
          <h5>{artistsString}</h5>
          <h5>{currentTrack.album.release_date.substr(0, 4)}</h5>
        </div>
        </ScrollAnimation>
        <ScrollTo>
          {({ scrollTo }) => (
            <button className='next' onClick={() => scrollTo({ y: 2668, smooth: true })}>Next</button>
          )}
        </ScrollTo>
      </div>
    )
  }
}