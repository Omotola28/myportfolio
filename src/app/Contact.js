import React from 'react';
import Location from './Location';
import Background from './layout/Background';

const Contact = () => {
	return(
		<div className="columns">
			<Background/>
			<div className="column is-half">
				<div className='tl pa3 w-40 leftZone' id='contactBox'>
				    <h1 className='f1'>{'Contact Me'}</h1>
				    <main className="black-80">
						<form autoComplete="off">
							<fieldset className="ba b--transparent ph0 mh0">
							   <div className="box-left">
							    <label className="clip" htmlFor="name">Name</label>
							    <input className= "pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" placeholder="Name" type="text" name="name" defaultValue="" id="name"/>
							   </div>
							  <div className="box-left">
							    <label className="clip" htmlFor="email-address">Email</label>
							    <input className= "pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" placeholder="Email Address" type="email" name="email" defaultValue="" id="email"/>
							   </div>
							  <div className="cf">
							    <label className="clip" htmlFor="subject">Subject</label>
							    <input className="fixposition pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" placeholder="Subject" type="text" name="subject" defaultValue="" id="subject"/>
							   </div>
							   <div className="cf">
							    <label className="clip" htmlFor="subject">Message</label>
							    <textarea className="fixposition input-reset ba hover-bg-black hover-white" placeholder="Message" type="text" name="message" defaultValue="" id="message"></textarea>
							   </div>
							</fieldset>
							<a rel="contact" href="https://jacekjeznach.com/contact" className="pseudoBtn fixposition">{'SEND'}</a>
						</form>
			        </main>
				</div>	
			</div>
			<div className="column">
				<Location initialPosition={{lat: 53.487523,lng: -2.290126}} />
			</div>
		</div>

		
	);
		
}

export default Contact;