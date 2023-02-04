import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div>
        <h2>Welcome {this.props.username}</h2>
      </div>
    )
  }
}
