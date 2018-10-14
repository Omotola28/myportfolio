import React from 'react'

export function createLinks (obj) {
	for ( const prop in obj ){
		return ( <li><a href= {prop}>`${obj[prop]}`</a></li> );
	}
}