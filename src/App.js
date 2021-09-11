import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
import ShowTable from './ShowTable.js';
import { useState } from 'react';

function App() {
	let [ actors, setActors ] = useState(contacts.slice(0, 5));

	function randomContact() {
		let randomNumber = Math.floor(Math.random() * (contacts.length - 1));
		let newContact = contacts[randomNumber];
		contacts.splice(randomNumber, 1);

		let copyOfActors = [ ...actors ];
		copyOfActors.push(newContact);
		setActors(copyOfActors);
	
	}

	function sortNameContact() {
		let copyOfActors = [ ...actors ];
		copyOfActors.sort((a, b) => {
			return a.name.localeCompare(b.name);
		});
		setActors(copyOfActors);
	}

	function sortByPopularity() {
		let copyOfActors = [ ...actors ];
		copyOfActors.sort((a, b) => {
			return b.popularity - a.popularity;
		});
		setActors(copyOfActors);
	}

	const deleteActor = (i) => {
		console.log('deleteActor', i);
		let copyOfActors = [ ...actors ];
		copyOfActors.splice(i, 1);
		setActors(copyOfActors);
	};

	return (
		<div className="App">
			<h1>IronContacts</h1>
			<button onClick={randomContact}>Add Random Contact</button> &nbsp;
			<button onClick={sortNameContact}>Sort by name</button> &nbsp;
			<button onClick={sortByPopularity}>Sort by popularity</button>
			<table>
				<tr>
					<th>Picture</th>
					<th>Name</th>
					<th>Popularity</th>
					<th>Action</th>
				</tr>
				<ShowTable actors={actors} deleteActor={deleteActor} />
			</table>
		</div>
	);
}

export default App;
