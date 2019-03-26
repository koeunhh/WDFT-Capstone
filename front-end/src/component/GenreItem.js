import React, { Component } from 'react';
import { Textfit } from 'react-textfit';

export default class GenreItem extends Component {
  render() {
    const {item, index} = this.props;
    const id = 'item' + index;
    
    return (
        <Textfit mode="single" className='content__item' id={id}>
        <h3 className='genre'>{Object.keys(item)}</h3>
        <h3 className='percentage'>{Object.values(item)}%</h3>
        </Textfit>
    )
  }
}