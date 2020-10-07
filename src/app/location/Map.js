import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Map extends Component {
 
 render() {
    const mapStyle = {
      width: 500,
      height: 300,
      border: '1px solid black'
    };
    
    return (
      <div ref="map" style={mapStyle}>I should be a map!</div>
    );
  }
}
Map.propTypes = {
    google: PropTypes.object,
    zoom: PropTypes.number,
    initialCenter: PropTypes.object
}

Map.defaultProps = {
    zoom: 10,
    initialCenter: {
      lat: 53.487523,
      lng: -2.290126
    }
}
export default Map