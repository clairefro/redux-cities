import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class ActiveCity extends Component {

  render() {

    console.log(this.props);
    const { selectedCity } = this.props;

    return (
      <div className='active-city'>
        { selectedCity &&  // only renders this part if selectedCity exists (cool trick)
          <p>{selectedCity.name}</p>
        }
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
