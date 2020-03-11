import React, { useState } from 'react';
import Contacts from '../contacts.json';
import { Celebrity } from './Celebrity';
import { Header } from './Header';
import { Button } from '../styles/Button';
import { Container } from '../styles/Table';

export const ContactsList = () => {
	const [ contacts, setContacts ] = useState(Contacts.slice(0, 5));
	const [ isSorted, setSortedList ] = useState({ byName: false, byPopularity: false });

	const sortByName = (a, b) => a.name.localeCompare(b.name);
	const sortByPopularity = (a, b) => b.popularity - a.popularity;

	const handleAddContact = () => {
		const addedContact = Contacts[Math.floor(Math.random() * Contacts.length)];

		const updatedList = [ ...contacts ];
		contacts.includes(addedContact) ? handleAddContact() : updatedList.push(addedContact);

		if (isSorted.byName) updatedList.sort(sortByName);

		if (isSorted.byPopularity) updatedList.sort(sortByPopularity);

		setContacts(updatedList);
	};

	const handleSort = (cb, type) => {
		const sortedList = [ ...contacts ].sort(cb);

		type === 'name'
			? setSortedList({ ...isSorted, byName: true, byPopularity: false })
			: setSortedList({ ...isSorted, byPopularity: true, byName: false });

		setContacts(sortedList);
	};

	const removeContact = id => {
		const newList = [ ...contacts ].filter(contact => contact.id !== id);

		console.log('list after deleting contact', newList);
		setContacts(newList);
	};

	return (
		<div>
			<Button onClick={handleAddContact}>Add Random Contact</Button>
			<Button onClick={() => handleSort(sortByName, 'name')}>Sort by name</Button>
			<Button onClick={() => handleSort(sortByPopularity, 'popularity')}>Sort by popularity</Button>
			<Container>
				<Header />
				<Header />
			</Container>
			<Container>
				{contacts.map((contact, index) => {
					return (
						<Celebrity
							key={index}
							name={contact.name}
							popularity={contact.popularity}
							picture={contact.pictureUrl}
							id={contact.id}
							removeContact={removeContact}
						/>
					);
				})}
			</Container>
		</div>
	);
};
