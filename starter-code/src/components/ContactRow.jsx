import React from 'react';

const ContactRow = (props) => {
	return (
		<tr className="contact">
			<td>
				<img src={props.picture} alt="deadlink" className="picture" />
			</td>
			<td>{props.name}</td>
			<td>{props.popularity.toFixed(2)}</td>
			<td>
				<button onClick={props.delete}>Delete</button>
			</td>
		</tr>
	);
};

export default ContactRow;
