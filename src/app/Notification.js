import React from 'react'

const Notification = (message) => {
	return (
	<div className="emailMsg">
		<div className={`notification ${ message.apply }`}>{message.text}</div>
	</div>
	
)

} 
export default Notification