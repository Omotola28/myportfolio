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
		var myLatLng = {lat, lng};

		var map = new google.maps.Map(this.refs.map, {
          zoom: 10,
          center: myLatLng,
          styles: [
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "saturation": "-12"
            },
            {
                "color": "##000000"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f3c800"
            },
            {
                "lightness": 17
            }
        ]
    }
]
      });

		var goldStar = {
          path: 'M0-48c-9.8 0-17.7 7.8-17.7 17.4 0 15.5 17.7 30.6 17.7 30.6s17.7-15.4 17.7-30.6c0-9.6-7.9-17.4-17.7-17.4z',
          fillColor: '#333333',
          strokeColor: '#646464',
          fillOpacity: 0.8,
          scale: 1
        };

	   var marker = new google.maps.Marker({
   			position:myLatLng,
    		map: map,
    		icon: goldStar,
    		title: 'Current Location :)',
    		animation: google.maps.Animation.DROP
  	  });


	}
	render(){
		return(
		<div id='mapBox'>
			 <div className='infoMap'>
			 	<p>Omotola Shogunle,</p>
			 	<p>Salford, Manchester</p>
			 	<p>Gerald Rd,</p>
			    <span>{'@:'}</span>
			    <span>{'omotolashogunle@gmail.com'}</span>
			 </div>

	    	<div ref="map">I should be a map!</div>
	    	

    
		</div>	
	);
	}	
}
export default GoogleApiWrapper({
 apiKey: ("AIzaSyDyzQiM5A4xg6k4SfuWPm6Z_RV5WwzDACk")
})(Location)
