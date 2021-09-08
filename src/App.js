import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
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
		// we want to grab random object from actors array and push it into the
		// if actor is there, we do not push.
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

	const ShowTable = () => {
		let list = actors.map((actor) => {
			return (
				<tr>
					<td>
						<img src={actor.pictureUrl} height="50px" />
					</td>
					<td>{actor.name}</td>
					<td>{actor.popularity}</td>
					<td>
						<button onClick={deleteActor}>Delete</button>
					</td>
				</tr>
			);
		});
		return list;
	};

	return (
		<div className="App">
			<h1>IronContacts</h1>
			<button onClick={randomContact}>Add Random Contact</button>
			<button onClick={sortNameContact}>Sort by name</button>
			<button onClick={sortByPopularity}>Sort by popularity</button>
			<table>
				<tr>
					<th>Picture</th>
					<th>Name</th>
					<th>Popularity</th>
					<th>Action</th>
				</tr>
				<ShowTable />
			</table>
		</div>
	);
}

export default App;
