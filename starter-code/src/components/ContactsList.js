import React, { useState } from 'react';
import Contacts from '../contacts.json';
import { Celebrity } from './Celebrity';
import { Header } from './Header';

export const ContactsList = () => {
	console.log(Contacts.slice(0, 5));

	const [ contacts, setContacts ] = useState(Contacts.slice(0, 5));

	return (
		<div>
			<Header />
			{contacts.map((contact, index) => {
				return (
					<Celebrity
						key={index}
						name={contact.name}
						popularity={contact.popularity}
						picture={contact.pictureUrl}
					/>
				);
			})}
		</div>
	);
};
