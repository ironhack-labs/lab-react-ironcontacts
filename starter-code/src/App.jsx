import React, { useState } from 'react';
import original from './contacts.json';
import './App.scss';
import { ContactsTable } from './components/contacts-table/contacts-table';


const App = () => {

	const [allContacts, setAllContacts] = useState(original.slice(5, original.length + 1));
	const [contacts, setContacts] = useState(original.slice(0, 5));

	const addRandomContact = () => {
		const index = Math.floor(Math.random() * allContacts.length);
		const randomContact = allContacts[index];
		setAllContacts(allContacts.filter((e) => e.id !== randomContact.id));
		setContacts([...contacts, randomContact]);
	};

	const sortByName = () => {
		setContacts([...contacts.sort((a, b) => a.name.localeCompare(b.name))]);
	};

	const sortByPopularity = () => {
		setContacts([...contacts.sort((a, b) => b.popularity - a.popularity)]);
	};

	const deleteContact = (contact) => {
		setContacts(contacts.filter((e) => e.id !== contact.id));
		setAllContacts([...allContacts, contact]);
	};

	return (
		<div className="App">
			<h1>IronContacts</h1>
			<div className={'buttons'}>
				<button onClick={addRandomContact}>Add Random Contact</button>
				<button onClick={sortByName}>Sort by name</button>
				<button onClick={sortByPopularity}>Sort by popularity</button>
			</div>
			<ContactsTable contacts={contacts} deleteContact={deleteContact}/>
		</div>
	);
};


export default App;
