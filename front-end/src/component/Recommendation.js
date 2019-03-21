import React, { Component } from 'react';

export default class Recommendation extends Component {
  constructor(props){
    super(props);
    this.state = {
      play: false,
      index: 0
    }
  }

  togglePlay = (url) => {
    this.setState({play: !this.state.play})
  }

  nextSong = () => {
    if(this.state.index < 5){
      this.setState({index: (this.state.index + 1)});
    }
  }

  previousSong = () => {
    if(this.state.index > 0){
      this.setState({index: (this.state.index - 1)});
    }
  }

  render(){
    const {topTracks} = this.props;
    const currentTrack = topTracks[this.state.index];

    const albumCover = currentTrack.album.images[2].url;
    const preview_url = currentTrack.preview_url;

    const audio = new Audio(preview_url);
    if(this.state.play === true){
      // console.log(this.state.play);
      audio.play()
    }
    else{
      // console.log(this.state.play);
      audio.pause()
    }

    return(
      <div className='recommendation'>
        <img onClick={this.previousSong} src='./assets/arrow-previous.svg' alt='previous'/>
        <img src = {albumCover} alt='albumCover'/>
        <button onClick={this.togglePlay}>Play</button>
        <img onClick={this.nextSong} src='./assets/arrow-next.svg' alt='next'/>
      </div>
    )
  }
}