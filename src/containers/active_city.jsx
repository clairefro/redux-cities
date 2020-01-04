import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class ActiveCity extends Component {

  render() {
    const { selectedCity } = this.props;

    return (
      <div className='city-info'>
        <p>{selectedCity.name}</p>
      </div>
    );
  }
}
