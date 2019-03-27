import React, { Component } from 'react';
import '../styles/loading.scss';
import discoBall from '../assets/discoBall.gif'
import pplDancing from '../assets/dancing.gif';
export default class Loading extends Component{
  render(){
    return(
      <div className='loading'>
        <img className='discoBall' src={discoBall} alt='disco-ball'/>
        <img className='pplDancing' src={pplDancing} alt='ppl-dancing'/>
        <h1>Loading...</h1>
      </div>
    )
  }
}