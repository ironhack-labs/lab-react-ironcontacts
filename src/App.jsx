import { useState } from "react";
import "./App.css";
import contactsData from "./contacts.json";

function App() {
	const five = [...contactsData].slice(0, 5);
	const remaining = [...contactsData].slice(5);

	const [contacts, setContacts] = useState(five);

	const addContact = () => {
		const randomNumber = Math.floor(Math.random() * remaining.length);
		const randomContact = remaining[randomNumber];
		const contactsCopy = [...contacts, randomContact];
		setContacts(contactsCopy);
	};

	const sortByPopularity = () => {
		const sortedByPopularity = [...contacts];
		sortedByPopularity.sort((a, b) => {
			return b.popularity - a.popularity;
		});
		setContacts(sortedByPopularity);
	};

	const sortByName = () => {
		const sortedByName = [...contacts];
		sortedByName.sort((a, b) => {
			return a.name.localeCompare(b.name);
		});
		setContacts(sortedByName);
	};

	const deleteContact = (contactId) => {
		const filteredContacts = contacts.filter((elm) => elm.id !== contactId);
		setContacts(filteredContacts);
	};

	return (
		<div className="App">
			<h1>IronContacts</h1>
			<button onClick={addContact}>Add Random Contact</button>
			<button onClick={sortByPopularity}>Sort by popularity</button>
			<button onClick={sortByName}>Sort by name</button>
			<table>
				<thead>
					<tr>
						<th>Picture</th>
						<th>Name</th>
						<th>Popularity</th>
						<th>Won Oscar</th>
						<th>Won Emmy</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{contacts.map((elm) => {
						return (
							<tr key={elm.id}>
								<td>
									<img src={elm.pictureUrl} alt="" />
								</td>
								<td>{elm.name}</td>
								<td>{elm.popularity}</td>
								<td>{elm.wonOscar && "🏆"}</td>
								<td>{elm.wonEmmy && "🏆"}</td>
								<td>
									<button onClick={() => deleteContact(elm.id)}>Delete</button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}

export default App;
