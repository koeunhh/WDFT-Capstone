import React, { Component } from 'react';

export default class Recommendation extends Component {
  constructor(props){
    super(props);
    this.state = {
      play: false
    }
  }

  togglePlay = () => {

  }

  render(){
    const {topTracks} = this.props;
    const preview_url = topTracks[0].preview_url;
    const audio = new Audio(preview_url);

    return(
      <div className='recommendation'>
        {/* <button onClick={audio.play}>Play</button> */}
      </div>
    )
  }
}