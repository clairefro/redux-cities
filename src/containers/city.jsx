import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectCity } from '../actions';

class City extends Component {
  handleClick = () => {
    this.props.selectCity(this.props.city);
  }

  render() {
    const { city } = this.props;

    let classes = "city-item";
    if (city === this.props.selectedCity) {
      classes += " active-city";
    }

    return (
      <div className={classes} onClick={this.handleClick}>
        <p>{this.props.city.name}</p>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectCity },
    dispatch
  );
}

function mapStateToProps(reduxState) {
  return {
    selectedCity: reduxState.selectedCity
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(City);
