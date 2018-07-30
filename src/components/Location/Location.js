/*global google*/
import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import './Location.css';


const style = {
      	width: '52vw',
      	height: '100vh',
}


class Location extends Component {
	componentDidMount(){
		const {lat, lng} = this.props.initialPosition;

		var map = new google.maps.Map(this.refs.map, {
          center: {
            lat:  lat,
            lng:  lng
          },
          zoom: 12,
      });
	}
	render(){
		return(
		<div style={style} id='mapBox'>
			 <div className='infoMap'>
			 	<p>Omotola Shogunle,</p>
			 	<p>Salford, Manchester</p>
			 	<p>Gerald Rd,</p>
			    <span>{'@:'}</span>
			    <span>{'omotolashogunle@gmail.com'}</span>
			 </div>

	    	<div ref="map" style={style}>I should be a map!</div>
	    	

    
		</div>	
	);
	}	
}
export default GoogleApiWrapper({
 apiKey: ("AIzaSyDyzQiM5A4xg6k4SfuWPm6Z_RV5WwzDACk")
})(Location)
