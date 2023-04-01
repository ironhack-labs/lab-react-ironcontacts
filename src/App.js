// src/App.js
import './App.css';
import contacts from './contacts.json';
import { useState } from 'react';

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

	return (
		<div className='App'>
			<table>
				<thead>
					<tr>
						<th>Picture</th>
						<th>Name</th>
						<th>Popularity</th>
						<th>Won Oscar</th>
						<th>Won Emmy</th>
					</tr>
				</thead>

				{ironContacts.map((contact) => (
					<tbody key={contact.id}>
						<tr>
							<th>
								<img className='portrait' src={contact.pictureUrl} alt=' celebrity' />
							</th>
							<td>{contact.name}</td>
							<td>{contact.popularity}</td>
							<td>{contact.popularity ? '🏆' : ''}</td>
							<td>{contact.wonEmmy ? '🏆' : ''}</td>
						</tr>
					</tbody>
				))}
			</table>
			<button onClick={addRandomContact}> Add Random Contact</button>
		</div>
	);
}

export default App;
