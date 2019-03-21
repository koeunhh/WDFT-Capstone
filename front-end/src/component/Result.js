import React, { Component } from 'react';
import Loading from './Loading';
import TopChoices from './TopChoices';

import axios from 'axios';
import MyType from './MyType';
import Recommendation from './Recommendation';
const access_token = window.location.hash.substr(14);

export default class Result extends Component{
  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      userInfo: [],
      topArtists: [],
      topTracks: [],
      popularity: ''
    }
  }

  componentDidMount(){
    this.getUserInfo();
    this.getTopArtists();
    this.getTopTracks();
    this.getPopularityAverage();
    window.setTimeout(() => {
      this.setState({isLoading: false})
    }, 1000);
  }

  //get current user's profile
  getUserInfo(){
    axios.get('https://api.spotify.com/v1/me', { headers: { 'Authorization': 'Bearer ' + access_token } })
          .then(response => {
            console.log('This is your user info: ');
            console.log(response.data);
            this.setState({userInfo: response.data});
          })
          .catch((error) => {
            console.log(error);
          });
  }

  //get a user's top artists	
  getTopArtists(){
    const time_range = 'medium_term';
    const limit = 5;
    const offset = 0;
    axios.get(`https://api.spotify.com/v1/me/top/artists?time_range=${time_range}&limit=${limit}&offset=${offset}`, { headers: { 'Authorization': 'Bearer ' + access_token } })
          .then(response => {
            console.log('Your top artists are: ');
            console.log(response.data.items);
            this.setState({topArtists: response.data.items});
          })
          .catch((error) => {
            console.log(error);
          });
  }

  getTopTracks(){   
    const time_range = 'medium_term';
    const limit = 50;
    const offset = 0;
    axios.get(`https://api.spotify.com/v1/me/top/tracks?time_range=${time_range}&limit=${limit}&offset=${offset}`, { headers: { 'Authorization': 'Bearer ' + access_token } })
          .then(response => {
            console.log('Your top tracks are: ');
            console.log(response.data.items);
            this.setState({topTracks: response.data.items});
          })
          .catch((error) => {
            console.log(error);
          });
  }

  getPopularityAverage(){
    const time_range = 'medium_term';
    const limit = 100;
    const offset = 0;
    axios.get(`https://api.spotify.com/v1/me/top/tracks?time_range=${time_range}&limit=${limit}&offset=${offset}`, { headers: { 'Authorization': 'Bearer ' + access_token } })
          .then(response => {
            const topTracks = response.data.items;
            const popularityArray = topTracks.map(track => {
              return track.popularity;
            })

            var sum = 0;
            for(let i = 0; i < popularityArray.length; i++){
              sum += popularityArray[i];
            }
            var popularityAverage = sum / popularityArray.length;
            console.log(popularityAverage);
            this.setState({popularity: popularityAverage})
          })
          .catch((error) => {
            console.log(error);
          });
  }

  render(){
    const {isLoading, userInfo, topArtists, topTracks, popularity} = this.state;

    return(
      isLoading ? <Loading/>
      : <div className='result'>
          <MyType userInfo={userInfo} popularity={popularity}/>
          <TopChoices topArtists={topArtists} topTracks={topTracks}/>
          <Recommendation topTracks={topTracks}/>
        </div>
    )
  }
}