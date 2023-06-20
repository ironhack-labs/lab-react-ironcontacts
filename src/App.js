import './App.css';

import contactArray from './contacts.json';
import { useState } from 'react';

function App() {
	const [contactsDisplay, setContactsDisplay] = useState(
		contactArray.slice(0, 5)
	);

	function addRandomContact() {
		const availableContacts = contactArray.filter((contact) => {
			return !contactsDisplay.includes(contact);
		});

		if (availableContacts.length > 0) {
			let randomIndex = Math.floor(Math.random() * availableContacts.length);

			const randomContact = availableContacts[randomIndex];

			setContactsDisplay((prevContactDisplay) => {
				return [randomContact, ...prevContactDisplay];
			});
		}
	}

	function deleteContact(contactId) {
		const filteredList = contactsDisplay.filter((contact) => {
			return contactId !== contact.id;
		});

		setContactsDisplay((prevContactDisplay) => {
			return filteredList;
		});
	}

	function sortByName() {
		setContactsDisplay((prevContactDisplay) => {
			return [...prevContactDisplay].sort((a, b) =>
				a.name.localeCompare(b.name)
			);
		});
	}

	function sortByPopularity() {
		setContactsDisplay((prevContactDisplay) => {
			return [...prevContactDisplay].sort(
				(a, b) => b.popularity - a.popularity
			);
		});
	}

	return (
		<div className="App">
			<h1>IronContacts</h1>

			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'center',
					gap: '1rem',
				}}
				className="buttons"
			>
				<button onClick={() => addRandomContact()}>Add random contact</button>
				<button onClick={() => sortByPopularity()}>Sort by Popularity</button>
				<button onClick={() => sortByName()}>Sort by Name</button>
			</div>

			<table>
				<tr>
					<th>Picture</th>
					<th>Name</th>
					<th>Popularity</th>
					<th>Won an Oscar</th>
					<th>Won an Emmy</th>
					<th></th>
				</tr>
				{contactsDisplay.map((contact) => {
					return (
						<tr>
							<td>
								<img
									style={{ maxWidth: '5rem' }}
									src={contact.pictureUrl}
									alt={`${contact.pictureUrl}`}
								/>
							</td>
							<td>{contact.name}</td>
							<td>{contact.popularity}</td>
							<td>{contact.wonOscar && '🏆'}</td>
							<td>{contact.wonEmmy && '🏆'}</td>
							<td>
								<button onClick={() => deleteContact(contact.id)}>
									Delete
								</button>
							</td>
						</tr>
					);
				})}
			</table>
		</div>
	);
}

export default App;
