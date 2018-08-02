import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

Map.propTypes = {
  google: PropTypes.object,
  zoom: PropTypes.number,
  initialCenter: PropTypes.object
}
Map.defaultProps = {
  zoom: 10,
  // Salford, by default
  initialCenter: {
    lat: 53.487523,
    lng: -2.290126
  }
}

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
export default Map