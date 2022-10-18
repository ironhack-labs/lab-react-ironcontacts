import logo from './logo.svg';
import './App.css';
import contactsFromJSON from './contacts.json';
import React, { useState } from 'react';

function App() {
	const firstFive = contactsFromJSON.slice(0, 5);

	const [contacts, setContacts] = useState(firstFive);

	const addRandom = () => {
		const randomIndex = Math.floor(Math.random() * contactsFromJSON.length);

		if (contacts.length === contactsFromJSON.length) {
			return;
		}

		if (contacts.indexOf(contactsFromJSON[randomIndex]) === -1) {
			setContacts([...contacts, contactsFromJSON[randomIndex]]);
			return;
		}

		addRandom();
	};

	const sortByName = () => {
		let copy = [...contacts];

		copy.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLocaleLowerCase()));

		setContacts(copy);
	};

	const sortByPop = () => {
		let copy = [...contacts];

		copy.sort((a, b) => b.popularity - a.popularity);

		setContacts(copy);
	};

  const deleteContact = (id) => {
    let copy = contacts.filter(contact => contact.id !== id)

    setContacts(copy)
  }

	return (
		<div className='App'>
			<h1> IronContacts </h1>

			<div className='btn-group'>
				<button onClick={() => addRandom()}> Add Random Contact </button>
				<button onClick={() => sortByName()}> Sort A - Z </button>
				<button onClick={() => sortByPop()}> Sort by popularity </button>
			</div>

			<table>
				<thead>
					<tr>
						<th>Picture</th>
						<th>Name</th>
						<th>Popularity</th>
						<th>Won an Oscar</th>
						<th>Won an Emmy</th>
					</tr>
				</thead>

				<tbody>
					{contacts.map(contact => (
						<tr key={contact.id}>
							<td>
								<img src={contact.pictureUrl} alt={contact.name} className='actor-pic' />
							</td>
							<td> {contact.name} </td>
							<td> {contact.popularity} </td>
							<td> {contact.wonOscar ? '🏆' : null} </td>
							<td> {contact.wonEmmy ? '🏆' : null} </td>
							<td>
								<button onClick={() => deleteContact(contact.id)}>Delete</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default App;
