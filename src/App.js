/** @format */

import { useState } from "react";
import "./App.css";
import contactsData from "./contacts.json";

function App() {
	let firstFive = contactsData.slice(0, 5);
	const [contacts, setContacts] = useState(firstFive);

	const randomContact = (array) => {
		let newArray = contactsData.filter((e) => !contacts.includes(e));

		const randomNumber = Math.floor(Math.random() * newArray.length);

		return setContacts([...contacts, newArray[randomNumber]]);
	};

	const sortByPopularity = () => {
		const sorted = [...contacts].sort((a, b) => {
			return b.popularity - a.popularity;
		});

		setContacts(sorted);
	};
	const sortByName = () => {
		const sorted = [...contacts].sort((a, b) => a.name.localeCompare(b.name));
		setContacts(sorted);
	};

	const deleteContact = (thisId) => {
		const restOfContacts = contacts.filter((e) => e.id !== thisId);
		setContacts(restOfContacts);
	};

	return (
		<div className="App">
			<h1>IronContacts</h1>

			<button
				className="btn btn-random"
				onClick={() => sortByPopularity(contacts)}
			>
				Sort by popularity
			</button>
			<button className="btn btn-random" onClick={sortByName}>
				Sort by Name
			</button>
			<button
				className="btn btn-random"
				onClick={() => {
					randomContact(contactsData);
				}}
			>
				Add Random Contact
			</button>

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
					{contacts.map((e, i) => {
						return (
							<tr className="details-tr">
								<td key={i}>
									<img src={e.pictureUrl} />
								</td>
								<td>{e.name}</td>
								<td>{e.popularity.toFixed(2)}</td>
								{e.wonOscar ? (
									<td>
										<p>🏆</p>
									</td>
								) : (
									<td></td>
								)}
								{e.wonEmmy ? (
									<td>
										<p>🏆</p>
									</td>
								) : (
									<td> </td>
								)}
								<button
									onClick={() => {
										deleteContact(e.id);
									}}
								>
									Delete
								</button>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}

export default App;
