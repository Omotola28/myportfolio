import React from 'react';
import Location from './Location';
import Background from './layout/Background';
import { connect } from 'react-redux';
import axios from "axios";
import {reset} from 'redux-form';
import ContactMe from './contact/ContactMe';
import * as actions from '../store/contact/contactAction';

class ContactPage extends React.Component {
	constructor(props) {
		super(props);
	    this.handleSignIn = this.handleSignIn.bind(this);
	}
	
	async handleSignIn(data, e) {
		
		 const form = await axios.post('inbox', data)
	                             .then(response => { 
	                             	  if(response.data.message)
	                             	  {
	                             	  	this.props.dispatch(actions.emailSent(response.status));
	                             	  	this.props.dispatch(reset('contactMe'));  // requires form name
	                             	  	console.log(response);
	                             	  }
	                             	  else if (response.data.statusCode)
	                             	   	this.props.dispatch(actions.emailErrored(response.data.statusCode));
	                             	    console.log(response);
                                   })
                                 .catch(error => {
                                      console.log(error.response)
         });
       

    };

	render() {
	return(
		<div className="columns">
			<Background/>
			<ContactMe onSubmit = {this.handleSignIn}  message={this.props.statusCode}/>
			<div className="column">
				<Location initialPosition={{lat: 53.487523,lng: -2.290126}} />
			</div>
	    </div>

		
	)
		
}

}
function mapStateToProps(state, ownProps) {
  return {
     statusCode: state.contact.statusCode
  }
}
export default connect(mapStateToProps)(ContactPage)

