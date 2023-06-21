import './App.css';
import { useState } from 'react';

import contacts from './contacts.json';

function App() {
	const [contactsToDisplay, setContactsToDisplay] = useState(
		contacts.slice(0, 5)
	);
	const [newContactDisplay, setNewContacts] = useState(
		contacts.slice(5, contacts.length)
	);

	const addContact = () => {
		const updateContacts = [newContactDisplay];
		const newContact =
			newContactDisplay[Math.floor(Math.random() * newContactDisplay.length)];
		const newList = [...contactsToDisplay, newContact];
		setContactsToDisplay(newList);
		console.log(newContact);
		setNewContacts(newList);
		console.log(newList);
		setContactsToDisplay(updateContacts);
	};

	return (
		<div>
			<h1>IronContacts</h1>
			<button onClick={() => addContact()}>Add Random Contact</button>
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
				<tbody>
					{contactsToDisplay.map((contact) => {
						return (
							<tr>
								<td>
									<img
										className="imgContact"
										src={contact.pictureUrl}
										alt={contact.name}
									></img>
								</td>
								<td>
									<p>{contact.name}</p>
								</td>
								<td>
									<p>{contact.popularity.toFixed(2)}</p>
								</td>
								<td>{contact.wonOscar ? '🏆' : ''}</td>
								<td>{contact.wonEmmy ? '🏆' : ''}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}

export default App;
