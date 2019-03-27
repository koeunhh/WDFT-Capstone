import React, { Component } from 'react';
import { Textfit } from 'react-textfit';
import ScrollAnimation from 'react-animate-on-scroll';

export default class GenreItem extends Component {
  render() {
    const {item, index} = this.props;
    const id = 'item' + index;
    
    return (
      <Textfit mode="single" max={30} className='content__item' id={id}>
      <ScrollAnimation animateIn="bounceIn">
        <h3 className='genre'>{Object.keys(item)}</h3>
        <h3 className='percentage'>{Object.values(item)}%</h3>
      </ScrollAnimation>
        </Textfit>
    )
  }
}