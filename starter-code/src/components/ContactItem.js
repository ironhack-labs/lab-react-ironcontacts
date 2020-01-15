import React from "react";
import "./ContactItem.css";
const ContactItem = ({ pictureUrl, name, popularity, deleteContact }) => {
	return (
		<tr>
			<td>
				<img src={pictureUrl} alt={pictureUrl} className="contact-img"></img>
			</td>
			<td>{name}</td>
			<td>{popularity.toFixed(2)}</td>
			<td>
				<button className="btn btn-outline-danger" onClick={deleteContact}>
					Delete contact
				</button>
			</td>
		</tr>
	);
};

export default ContactItem;
