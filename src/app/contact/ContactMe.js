import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { validate } from './validate';
import renderField from './renderField';
import Notification from '../Notification.js';
import './ContactMe.css';


class ContactMe extends React.Component {

    emailNotification = (message) => {
      switch(message) {
        case 200:
          return <Notification text={'Message was sent successfully :)'} apply={'is-warning'} />;
        case 400:
          return <Notification text={'Sending message errored!'} apply={'is-danger'}/>;
        case '':
          return <Notification text={''} apply={'is-whitesmoke'}/>;
        default:
          return null;
      }
     }

     render() {

      const { handleSubmit, message} = this.props;

      return(
            
              <div id='contactBox'>
                    <h1 className='font-size'>{'Contact Me'}</h1>
                    <main>
                    <form autoComplete="off" onSubmit={handleSubmit}>
                      {this.emailNotification(message)}
                      <fieldset className="ba b--transparent ph0 mh0">
                         <div className="box-left">
                          <Field className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" label="Full Name" name="name" id="name" component={renderField} type="text"/>
                         </div>
                        <div className="box-left">
                           <Field className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" name="email"  label="Email" id="email" component={renderField} type="email"/>
                         </div>
                        <div className="cf">
                           <Field className="fixposition pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" name="subject"  component={renderField} type="text" id="subject" label="Subject" />
                         </div>
                         <div className="cf">
                          <label className="clip" htmlFor="subject">Message</label>
                          <Field className="input-reset ba hover-bg-black hover-white textarea" name="message" type="text" id="message" component="textarea" placeholder="Message"/>
                         </div>
                      </fieldset>
                      <button type="submit" className="pseudoBtn fixposition" label="send">SEND</button>
                    </form>
                      </main>
                </div> 

          
           )
     }

}	
export default reduxForm({
	form: 'contactMe',
	validate
})(ContactMe);

