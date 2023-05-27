// src/App.js
import './App.css';
import contacts from './contacts.json';
import { useState } from 'react';

const firstFiveContacts = contacts.slice(0, 5);
const contactList = contacts.slice(5);

function App() {
	const [contactsArr, updateContactsArr] = useState(firstFiveContacts);
	const [possibleContacts, setPossibleContacts] = useState(contactList);

	// add contact
	const addRandomContact = () => {
		const possibleContactsCopy = [...possibleContacts];
		const randomIndex = Math.floor(Math.random() * possibleContacts.length);
		const randomContact = possibleContactsCopy[randomIndex];
		possibleContactsCopy.splice(randomIndex, 1);
		setPossibleContacts(possibleContactsCopy);

		updateContactsArr([...contactsArr, randomContact]);
	};

	// sort

	const sortByName = () => {
		const contactsToSort = [...contactsArr];
		contactsToSort.sort(contactsToSort.name);

		function sortStuff(a, b) {
			const attr1 = a.name;
			const attr2 = b.name;

			let comparison = 0;

			if (attr1 > attr2) {
				comparison = 1;
			} else if (attr1 < attr2) {
				comparison = -1;
			}
			return comparison;
		}
		contactsToSort.sort(sortStuff);
		updateContactsArr(contactsToSort);
	};

	const sortByPopularity = () => {
		const contactsToSort = [...contactsArr];
		contactsToSort.sort(contactsToSort.popularity);

		function sortStuff(a, b) {
			const attr1 = a.popularity;
			const attr2 = b.popularity;

			let comparison = 0;

			if (attr1 > attr2) {
				comparison = 1;
			} else if (attr1 < attr2) {
				comparison = -1;
			}
			return comparison;
		}
		contactsToSort.sort(sortStuff);
		updateContactsArr(contactsToSort);
	};

	return (
		<div className="App">
			<h1>IronContacts</h1>
			<button
				onClick={(event) => {
					addRandomContact();
				}}>
				Add Random Contact
			</button>
			<table>
				<thead>
					<tr>
						<th>Picture</th>
						<th>
							Name
							<button
								onClick={(event) => {
									sortByName();
								}}>
								Sort
							</button>
						</th>
						<th>
							Popularity
							<button
								onClick={(event) => {
									sortByPopularity();
								}}>
								Sort
							</button>
						</th>
						<th>Won an Oscar</th>
						<th>Won an Emmy</th>
					</tr>
				</thead>
				<tbody>
					{contactsArr.map(({ name, pictureUrl, popularity, id, wonOscar, wonEmmy }) => {
						return (
							<tr key={id}>
								<td>
									<img width="200" src={pictureUrl} alt={name} />
								</td>
								<td>{name}</td>
								<td>{popularity}</td>
								<td>{wonOscar ? '🏆' : null}</td>
								<td>{wonEmmy ? '🏆' : null}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
export default App;
