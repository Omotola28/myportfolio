/*import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as contactActions from './../store/contact/contactAction';
import ContactPage from './ContactPage';


class ContactContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <ContactPage  contact={this.props.contact} action={this.props.actions}/>
    )
  }
}


ContactContainer.propTypes = {
  contact: PropTypes.object,
  action: PropTypes.object
};

const mapStateToProps = state => {
  return {
    contact: state.contact
  }
};

const mapDispatchToProps = dispatch => {
  return {action: bindActionCreators(Object.assign(contactActions), dispatch)}
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactContainer);



class Contact extends React.Component {
  constructor(props) {
    console.log(props);
      super(props);
  }

/*  handleSignIn = values => {
        console.log(values);
    };
onSubmit={this.handleSignIn} Added to thr Contact form prop
    

 /* render(){
     const { contact } = this.props;
     console.log(contact);
  return(
    <div className="columns">
      <Background/>
      <ContactMe contact={this.props.contact} action={this.props.actions} />
      <div className="column">
        <Location initialPosition={{lat: 53.487523,lng: -2.290126}} />
      </div>
      </div>

    
  )
    
}

}

Contact.propTypes ={
  contact: PropTypes.object,
  actions: PropTypes.object
};

const mapStateToProps = state => {
  return {
    contact: state.contact
  }
};

const mapDispatchToProps = dispatch => {
  return {actions: bindActionCreators(Object.assign(contactActions), dispatch)}
};

export default connect(mapStateToProps, mapDispatchToProps)
(Contact);*/*/