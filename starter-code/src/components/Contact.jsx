import React from 'react';

const Contact = (props) => {
	return (
		<tr>
			<td>
				<img className="contact-img" src={props.pictureUrl} alt={props.name} />
			</td>
			<td>{props.name}</td>
			<td>{props.popularity}</td>
		</tr>
	);
};

export default Contact;
