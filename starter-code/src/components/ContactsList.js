import React, { useState } from 'react';
import Contacts from '../contacts.json';

export const ConctactsList = () => {
	console.log(Contacts.slice(0, 5));

	const [ contacts, setContacts ] = useState(Contacts.slice(0, 5));

	return (
		<div>
			<h3>La lista</h3>
			{contacts.map(contact => {
				return (
					<div>
						<p>{contact.name}</p>
						<p>{contact.popularity}</p>
						<img src={contact.pictureUrl} />
					</div>
				);
			})}
		</div>
	);
};
