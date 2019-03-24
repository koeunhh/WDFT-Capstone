import React, { Component } from 'react';

export default class GenreItem extends Component {
  render() {
    const {item, index} = this.props;
    const id = 'item' + index;
    
    return (
      <div className='content__item' id={id}>
        <h3>{Object.keys(item)}</h3>
        <h3>{Object.values(item)}%</h3>
      </div>
    )
  }
}