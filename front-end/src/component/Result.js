import React, { Component } from 'react';
import Loading from './Loading';
import MyType from './MyType';
import TopChoices from './TopChoices';
import Genre from './Genre';
import Recommendation from './Recommendation';
import ThankYou from './ThankYou';

import '../styles/result.scss';
import backgroundTop from '../assets/background-top.svg';

import axios from 'axios';
const access_token = window.location.hash.substr(14);
// localStorage.setItem('token', access_token);
// localStorage.clearItem('token');
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
                      1960: 0, 
                      1970: 0, 
                      1980: 0, 
                      1990: 0, 
                      2000: 0, 
                      2010: 0, //2010-2019
                      2015: 0, //2010-2015
                      2018: 0, //2015-2019
                      2019: 0  //2019
                    }
    }
  }

  componentDidMount(){
    this.getUserInfo();
    this.getTopArtists();
    this.getTopTracks();
    this.getPopularityAverage();
    this.getReleaseDate();
    // this.getAverageYear();
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

  getReleaseDate(){
    const time_range = 'medium_term';
    const limit = 50;
    const offset = 0;
    axios.get(`https://api.spotify.com/v1/me/top/tracks?time_range=${time_range}&limit=${limit}&offset=${offset}`, { headers: { 'Authorization': 'Bearer ' + access_token } })
          .then(response => {
            const topTracks = response.data.items;
            const releaseDateArray = topTracks.map(track => {
              return track.album.release_date.substr(0, 4);
            })
            console.log(releaseDateArray);
            for(let i = 0; i < releaseDateArray.length; i++){
              const newCopy = Object.assign({}, this.state.release_date);
              if(releaseDateArray[i] >= 2010){
                //2010-2019
                newCopy[2010] += 1;
                if(releaseDateArray[i] < 2016){
                  //2010-2015
                  newCopy[2015] += 1;
                } 
                else{
                  //2016-2019
                  newCopy[2018] += 1;
                  if(releaseDateArray[i] === '2019'){
                    //2019
                    newCopy[2019] += 1;
                  }
                }
                this.setState({release_date: newCopy});
              }
              else if(releaseDateArray[i] >= 2000 && releaseDateArray[i] < 2010){
                newCopy[2000] += 1;
                this.setState({release_date: newCopy});
              }
              else if(releaseDateArray[i] >= 1990 && releaseDateArray[i] < 2000){
                newCopy[1990] += 1;
                this.setState({release_date: newCopy});
              }
              else if(releaseDateArray[i] >= 1980 && releaseDateArray[i] < 1990){
                newCopy[1980] += 1;
                this.setState({release_date: newCopy});
              }
              else if(releaseDateArray[i] >= 1970 && releaseDateArray[i] < 1980){
                newCopy[1970] += 1;
                this.setState({release_date: newCopy});
              }
              else if(releaseDateArray[i] >= 1960 && releaseDateArray[i] < 1970){
                newCopy[1960] += 1;
                this.setState({release_date: newCopy});
              }
            }
            // console.log(this.state.release_date);
            const release = this.state.release_date;
            this.getLargestValue(release);
          })
          .catch((error) => {
            console.log(error);
          });
  }

  getLargestValue(obj){
    console.log(obj);
    // for(let i = 0; i < obj.length; i++){
    //   obj[Object.keys(obj)[i]]
    // }
  }

  render(){
    const {isLoading, userInfo, topArtists, topTracks, popularity} = this.state;

    return(
      isLoading ? <Loading/>
      : <div className='result'>
          <img className='backgroundTop' src={backgroundTop} alt='background-top'/>
          <MyType userInfo={userInfo} popularity={popularity}/>
          <TopChoices topArtists={topArtists} topTracks={topTracks}/>
          <Genre/>
          <Recommendation topTracks={topTracks}/>
          <ThankYou/>
        </div>
    )
  }
}