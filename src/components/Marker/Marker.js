import React, { Component } from 'react';
import PropTypes from 'prop-types';

Marker.propTypes = {
  position: React.PropTypes.object,
  map: React.PropTypes.object
}

class Marker extends Component {
	componentDidUpdate(prevProps) {
    if ((this.props.map !== prevProps.map)  {
        this.renderMarker();
    }
  }
 
  renderMarker() {
    let {
      map, google, position, initialCenter
    } = this.props;

    let pos = initialCenter;
    position = new google.maps.LatLng(pos.lat, pos.lng);
    
    const pref = {
    	map:map,
    	position:position
    };
    this.marker = new google.maps.Marker(pref);
  
  }
  render(){
		return null;
	}	
}
export default Marker
