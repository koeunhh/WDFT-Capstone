import React, { Component } from 'react';
import Loading from './Loading';
import MyType from './MyType';
import TopChoices from './TopChoices';
import Genre from './Genre';
import Recommendation from './Recommendation';
import ThankYou from './ThankYou';

import axios from 'axios';
const access_token = window.location.hash.substr(14);

export default class Result extends Component{
  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      userInfo: [],
      topArtists: [],
      topTracks: [],
      popularity: '',
      release_date: { 
                      2010: 0, 
                      2000: 0, 
                      1990: 0, 
                      1980: 0, 
                      1970: 0, 
                      1960: 0 
                    }

      // release_date: [
      //                 { 2010: 0 }, 
      //                 { 2000: 0 }, 
      //                 { 1990: 0 }, 
      //                 { 1980: 0 }, 
      //                 { 1970: 0 }, 
      //                 { 1960: 0 }
      //               ] 
    }
  }

  componentDidMount(){
    this.getUserInfo();
    this.getTopArtists();
    this.getTopTracks();
    this.getPopularityAverage();
    this.getAverageYear();
    window.setTimeout(() => {
      this.setState({isLoading: false})
    }, 3000);
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
    const limit = 5;
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
    const limit = 50;
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

  getAverageYear(){
    const time_range = 'medium_term';
    const limit = 50;
    const offset = 0;
    axios.get(`https://api.spotify.com/v1/me/top/tracks?time_range=${time_range}&limit=${limit}&offset=${offset}`, { headers: { 'Authorization': 'Bearer ' + access_token } })
          .then(response => {
            const topTracks = response.data.items;
            const releaseDateArray = topTracks.map(track => {
              return track.album.release_date.substr(0, 4);
            })
            // console.log(this.state.release_date[2010]+1);
            for(let i; i < releaseDateArray.length; i++){
              if(releaseDateArray[i] >= 2010){
                // this.setState({release_date: (this.state.release_date[2010] + 1)})
              }
            }
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
          <Genre/>
          <Recommendation topTracks={topTracks}/>
          <ThankYou/>
        </div>
    )
  }
}