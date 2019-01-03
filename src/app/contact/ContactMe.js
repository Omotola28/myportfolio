import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { validate } from './validate';
import renderField from './renderField';
import * as actions from '../../store/contact/contactAction';
import Notification from '../Notification';


class ContactMe extends React.Component {
    constructor() {
      super();
     //this.emailNotification = this.emailNotification.bind(this);
    }

    emailNotification = (message) => {
      switch(message) {
        case 200:
          return <Notification text={'Message was sent successfully :)'} style={'is-warning'} />;
        case 400:
          return <Notification text={'Sending message errored!'} style={'is-danger'}/>;
        case '':
          return <Notification text={''} style={'is-whitesmoke'}/>;
        default:
          return null;
      }
     }

     render() {

      const { handleSubmit, message} = this.props;

      return(
             <div className="column is-half">
              <div className='tl pa3 w-40 leftZone' id='contactBox'>
                    <h1 className='f1'>{'Contact Me'}</h1>
                    <main className="black-80">
                    <form autoComplete="off" onSubmit={handleSubmit} ref="contactForm" >
                      {this.emailNotification(message)}
                      <fieldset className="ba b--transparent ph0 mh0">
                         <div className="box-left">
                          <Field className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" label="Full Name" name="name" id="name" component={renderField} type="text"/>
                         </div>
                        <div className="box-left">
                          <label className="clip" name="email" htmlFor="email-address">Email</label>
                           <Field className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" name="email"  label="Email" id="email" component={renderField} type="email" placeholder="Email Address"/>
                         </div>
                        <div className="cf">
                          <label className="clip" htmlFor="subject">Subject</label>
                           <Field className="fixposition pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" name="subject" label="subject" component={renderField} type="text" id="subject" placeholder="Subject"/>
                         </div>
                         <div className="cf">
                          <label className="clip" htmlFor="subject">Message</label>
                          <Field className="fixposition input-reset ba hover-bg-black hover-white textarea" name="message" type="text" id="message" component="textarea" placeholder="Message"/>
                         </div>
                      </fieldset>
                      <button type="submit" className="pseudoBtn fixposition" label="send">SEND</button>
                    </form>
                      </main>
                </div> 
              </div>

          
           )
     }

}	
export default reduxForm({
	form: 'contactMe',
	validate
})(ContactMe);

