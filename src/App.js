import "./App.css";
import contacts from "./contacts.json";
import React, { useState } from "react";

function App() {
	const [contactsList, setContactsList] = useState(contacts.slice(0, 5));
	const [remainingContacts, setRemainingContacts] = useState(contacts.slice(5));

	function addRandomContact() {
		const randomContact =
			remainingContacts[Math.floor(Math.random() * remainingContacts.length)];

		setContactsList((oldContacts) => [...oldContacts, randomContact]);
		setRemainingContacts((oldRemaining) =>
			oldRemaining.filter((contact) => contact !== randomContact)
		);
	}

	function sortByName() {
		const toSortName = [...contactsList];
		const sortedByName = toSortName.sort((a, b) =>
			a.name.localeCompare(b.name)
		);
		setContactsList(sortedByName);
	}

	function sortByPopularity() {
		const toSortPop = [...contactsList];
		const sortedByPop = toSortPop.sort((a, b) => b.popularity - a.popularity);
		setContactsList(sortedByPop);
	}

	function deleteContact(index) {
		setContactsList((contactsList) =>
			contactsList.filter((_, i) => i !== index)
		);
	}

	return (
		<div className="App">
			<h1>IronContacts</h1>
      <div className="">
        <button onClick={addRandomContact}> Add Random Contact </button>
        <button onClick={sortByPopularity}> Sort by Popularity </button>
        <button onClick={sortByName}> Sort by Name </button>
      </div>
			<table>
				<thead >
					<tr >
						<th className="table-head">Picture</th>
						<th className="table-head">Name</th>
						<th className="table-head">Popularity</th>
						<th className="table-head">Won Oscar</th>
						<th className="table-head">Won Emmy</th>
						<th className="table-head ">Actions</th>
					</tr>
				</thead>
				<tbody>
					{contactsList.map((contact, index) => (
						<tr key={contact.id}>
							<td>
								<img
									src={contact.pictureUrl}
									alt={contact.name}
									style={{ height: "100px" }}
								/>
							</td>
							<td>{contact.name}</td>
							<td>{contact.popularity.toFixed(2)}</td>
							<td>{contact.wonOscar ? "🏆" : "-"}</td>
							<td>{contact.wonEmmy ? "🏆" : "-"}</td>
							<td className="delete">
								<button onClick={() => deleteContact(index)}>Delete</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
export default App;
