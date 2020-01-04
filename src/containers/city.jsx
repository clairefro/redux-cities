import React, { Component } from 'react';

class City extends Component {
  render() {
    return (
      <div className="city-item">
        <p>{this.props.city.name}</p>
      </div>
    );
  }
}

export default City;
