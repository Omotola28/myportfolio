import React from 'react';
import './Contact.css';


const Contact = () => {
	return(
		<div className='w-40 absolute' id='contactBox'>
		    <h1 className='f1'>{'Contact Me'}</h1>
		    <main className="black-80">
				<form autoComplete="off">
					<fieldset className="ba b--transparent ph0 mh0">
					   <div className="box-left">
					    <label className="clip" htmlFor="name">Name</label>
					    <input className= "pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" placeholder="Name" type="text" name="name" value="" id="name"/>
					   </div>
					  <div className="box-left">
					    <label className="clip" htmlFor="email-address">Email</label>
					    <input className= "pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" placeholder="Email Address" type="email" name="email" value="" id="email"/>
					   </div>
					  <div className="cf">
					    <label className="clip" htmlFor="subject">Subject</label>
					    <input className="fixposition pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" placeholder="Subject" type="text" name="subject" value="" id="subject"/>
					   </div>
					   <div className="cf">
					    <label className="clip" htmlFor="subject">Message</label>
					    <textarea className="fixposition" placeholder="Message" type="text" name="message" value="" id="message"></textarea>
					   </div>
					</fieldset>
					<a rel="contact" href="https://jacekjeznach.com/contact" className="pseudoBtn fixposition">{'SEND'}</a>
				</form>
            </main>
		</div>	
	);
		
}

export default Contact;