import './App.css';
import { useState } from "react";
import contactsData from './contacts.json';

function App() {
	const [contacts, setContacts] = useState(contactsData.slice(0, 5));

	const addContact = () => {
		if (contacts.length < contactsData.length) {
			let random = Math.floor(Math.random() * contactsData.length);
			while (contacts.filter(e => e.id === contactsData[random].id).length > 0) {
				console.log('random WAS: ', random)
				random = Math.floor(Math.random() * contactsData.length);
				console.log('but it existed in the array already, so now random IS: ', random)
			}
			const newContact = contactsData[random];
			setContacts([...contacts, newContact]);
		}
		else console.log('There are no more contacts to be added');
	}

	const sortByName = () => {
			const newContact = contacts.sort((a, b) => a.name.localeCompare(b.name))
			setContacts([...newContact]);
	}

	const sortByPopularity = () => {
		const newContact = contacts.sort((a, b) => b.popularity - a.popularity)
		setContacts([...newContact]);
	}

	return (
		<div className="App">
		<header className="App-header">
			<button onClick={addContact}>Add Random Contact</button>
			<button onClick={sortByName}>Sort by name</button>
			<button onClick={sortByPopularity}>Sort by popularity</button>
			<table>
				<tr>
					<th>Picture</th>
					<th>Name</th>
					<th>Popularity</th>
				</tr>
				{contacts.map(contact => (
				<tr key={contact.id}>
					<td>{<img src={contact.pictureUrl} alt="Profile" height="100px"></img>}</td>
					<td>{contact.name}</td>
					<td>{contact.popularity}</td>
				</tr>
				))}
			</table>
		</header>
		</div>
	);
}

export default App;
