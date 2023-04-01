// src/App.js
import './App.css';
import contacts from './contacts.json';
import { useState, useEffect } from 'react';

function App() {
	const limitedContacts = contacts.slice(0, 5);

	const [ironContacts, setIronContacts] = useState([
		limitedContacts[0],
		limitedContacts[1],
		limitedContacts[2],
		limitedContacts[3],
		limitedContacts[4],
	]);

	function addRandomContact() {
		const random = Math.floor(Math.random() * contacts.length);
		setIronContacts([...ironContacts, contacts[random]]);
	}

	function sortByName() {
		const sorted = ironContacts.sort((a, b) => a.name.localeCompare(b.name));
		setIronContacts([...sorted]);
	}

	function sortByPopularity() {
		const sortedByPopularity = ironContacts.sort((a, b) => b.popularity - a.popularity);
		setIronContacts([...sortedByPopularity]);
	}

	function deleteContact(id) {
		const filteredContacts = ironContacts.filter((contact) => contact.id !== id);
		setIronContacts([...filteredContacts]);
	}

	const [color, setColor] = useState('none');

	return (
		<div className='App'>
			<div className='buttons'>
				<button onClick={addRandomContact}> Add Random Contact</button>
				<button onClick={sortByName}> Sort Contacts by Name</button>
				<button onClick={sortByPopularity}> Sort Contacts by Popularity</button>
			</div>
			<table>
				<thead>
					<tr className='headers'>
						<th>Picture</th>
						<th>Name</th>
						<th>Popularity</th>
						<th>Won Oscar</th>
						<th>Won Emmy</th>
						<th>Actions</th>
					</tr>
				</thead>

				{ironContacts.map((contact) => (
					<tbody className={contact.popularity > 10 ? 'green' : 'yellow'} key={contact.id}>
						<tr>
							<th>
								<img className='portrait' src={contact.pictureUrl} alt=' celebrity' />
							</th>
							<td>{contact.name}</td>
							<td>{Number(contact.popularity).toFixed(2)}</td>
							<td>{contact.wonOscar ? '🏆' : 'X'}</td>
							<td>{contact.wonEmmy ? '🌟' : 'X'}</td>
							<td>
								<button className='delete' onClick={() => deleteContact(contact.id)}>
									Delete
								</button>
							</td>
						</tr>
					</tbody>
				))}
			</table>
		</div>
	);
}

export default App;
