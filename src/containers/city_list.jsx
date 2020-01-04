import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setCities } from '../actions';

import City from './city';

class CityList extends Component {
  componentWillMount() {
    this.props.setCities();
  }

  renderList() {
    const { cities } = this.props; // from redux state tree
    return cities.map((city, index) => {
      return (
        <City city={city} key={index} />
      );
    });
  }

  render() {
    return (
      <div className="cities">
        {this.renderList()}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setCities },
    dispatch
  );
}

function mapStateToProps(reduxState) {
  return {
    cities: reduxState.cities
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CityList);
