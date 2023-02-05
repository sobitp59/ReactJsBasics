import React, { Component } from 'react';

export default class ClassProduct extends Component {
    render() {
      const {name, description, image, price} = this.props;
    return (
        <div className="product">
            <p>Using Class Component</p>
        <h3>{name}</h3>
        <p>{description}</p>
        <img className="product-image" src={image} alt={name} />
        <h3>${price}</h3>
    </div>
    )
  }
}
