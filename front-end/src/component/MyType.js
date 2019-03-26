import React, { Component } from 'react';
import {ScrollTo} from 'react-scroll-to';
import A from '../assets/girl1.svg';
import B from '../assets/boy.svg';
import C from '../assets/girl2.svg';
import squiggly from '../assets/squiggly-line.svg';

import '../styles/myType.scss';

export default class MyType extends Component{
  constructor(props){
    super(props);
    this.state = {
      isOld: '',
      year: '',
      text: ''
    }
  }

  componentDidMount(){
    // this.getLargestValue(this.props.release_date);
    this.getYear();
  }

  getLargestValue(obj){
    // console.log(obj);
    var largestValue = 0;
    var largestKey = 'null';
    Object.keys(obj).forEach(function(key) {
      if(obj[key] > largestValue){
        largestValue = obj[key];
        largestKey = key;
      }
    });
    console.log(largestKey + ': ' + largestValue);
    return largestKey;
  }

  getYear(){
    const {release_date} = this.props;
    var old = release_date[1960] + release_date[1970] + release_date[1980] + release_date[1990];
    var recent = release_date[2000] + release_date[2010];
    if(old >= recent){
      this.setState({isOld: true});
      const newCopy = Object.assign({}, release_date);
      newCopy[2000] = 0;
      newCopy[2010] = 0;
      newCopy[2015] = 0;
      newCopy[2018] = 0;
      newCopy[2019] = 0;
      console.log(newCopy);
      const largest = this.getLargestValue(newCopy);
      this.setState({year: largest});
    }
    else{
      this.setState({isOld: false});
      const newCopy = Object.assign({}, release_date);
      newCopy[1960] = 0;
      newCopy[1970] = 0;
      newCopy[1980] = 0;
      newCopy[1990] = 0;
      console.log(newCopy);
      const largest = this.getLargestValue(newCopy);
      this.setState({year: largest});
    }
  }

  render(){
    const {userInfo, popularity} = this.props;
    const {year, isOld} = this.state;

    var type = 90;
    var character;
    var text;

    if(isOld === true){
      type = 'Vintage Time Traveler';
      character = A;
      text = 'Your are type A. Seems like you enjoy listening to songs from the ' + year.substr(2, 2) + "'s!";
    }
    else{
      if(popularity < 65){
        type = 'Hippie Hipster';
        character = B;
        text = 'Your are type B. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a.';   
      }
      else{
        type = 'Sexy Trender';
        character = C;
        text = 'Your are type C.';     
      }
    }
    

    return(
      <div className='myType'>
      <h2 className='hi'>Hi {userInfo.display_name}, your music type is</h2>
      <h1 className='type'>{type}</h1>
      <img src={squiggly} alt='squiggly-line'/>
      <p className='description'>{text}</p>
      <img className='character' src={character} alt='character'/>
      <ScrollTo>
      {({ scrollTo }) => (
        <button onClick={() => scrollTo({y: 667, smooth: true})}>See details</button>
      )}
      </ScrollTo>
      </div>
    )
  }
}