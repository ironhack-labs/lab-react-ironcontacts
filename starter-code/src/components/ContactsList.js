import React, { useState } from 'react';
import Contacts from '../contacts.json';
import { Celebrity } from './Celebrity';
import { Header } from './Header';
import { Button } from '../styles/Button';

export const ContactsList = () => {
	const [ contacts, setContacts ] = useState(Contacts.slice(0, 5));

	const handleAddContact = () => {
		const addedContact = Contacts[Math.floor(Math.random() * Contacts.length)];
		console.log('adding new one', addedContact);

		const updatedList = [ ...contacts ];
		updatedList.push(addedContact);

		console.log('new list', updatedList);

		setContacts(updatedList);
	};

	return (
		<div>
			<Button onClick={handleAddContact}>Add Random Contact</Button>
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
