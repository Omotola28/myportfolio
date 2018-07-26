import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import './Location.css';

const style = {
      	width: '52vw',
      	height: '100vh'
}
class Location extends Component {
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

		 <div style={style}>
	        <Map google={this.props.google}>
	        	<Marker /><Marker position={initialCenter} />
	        </Map>
	     </div>
		</div>	
	);
	}	
}
export default GoogleApiWrapper({
  apiKey: ("AIzaSyDyzQiM5A4xg6k4SfuWPm6Z_RV5WwzDACk")
})(Location)
