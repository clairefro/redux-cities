import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class ActiveCity extends Component {

  render() {
    const { selectedCity } = this.props;

    if (!selectedCity) {
      return (
        <div className="active-city">
          <p>Select a city...</p>
        </div>
      );
    }

    const endpoint = 'https://kitt.lewagon.com/placeholder/cities/';

    return (
      <div className="active-city">
        <h3>{selectedCity.name}</h3>
        <p>{selectedCity.address}</p>
        <div className="loading-message">
        <p>Loading image...</p>
        </div>
        <img className="city-photo" src={endpoint + selectedCity.slug}
          alt={`photo of ${selectedCity.name} campus`}
        />
      </div>
    );
  }
}


function mapStateToProps(reduxState) {
  return (
    {
      selectedCity: reduxState.selectedCity
    }
  );
}
export default connect(mapStateToProps, null)(ActiveCity);
