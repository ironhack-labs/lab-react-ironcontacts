import logo from './logo.svg';
import './App.css';
import contactsFromJSON from './contacts.json';
import React, { useState } from 'react';

function App() {
	const firstFive = contactsFromJSON.slice(0, 5);

	const [contacts, setContacts] = useState(firstFive);


	const addRandom = () => {
		if (contacts.length === contactsFromJSON.length) {
			console.log('reached the end of list');
			return;
		}

		let remaining = contactsFromJSON.filter(contact => !contacts.find(element => element.id === contact.id));

		const randomIndex = Math.floor(Math.random() * remaining.length);

		setContacts(prevContacts => [...prevContacts, remaining[randomIndex]]);
	};

	const sortBy = (order, type) => {
		let copy = [...contacts];

		const sorts = {
			name: 
			{
				asc() {
					copy.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLocaleLowerCase()));
				},
				des() {
					copy.sort((a, b) => b.name.toLowerCase().localeCompare(a.name.toLocaleLowerCase()));
				}
			},
			pop: 
			{
				asc(){
					copy.sort((a, b) => a.popularity - b.popularity);
				},
				des(){
					copy.sort((a, b) => b.popularity - a.popularity);
				}
			}
		}

		sorts[type][order]()

		setContacts(copy);
	};


  const deleteContact = (id) => {
    const copy = contacts.filter(contact => contact.id !== id)

    setContacts(copy)
  }

	return (
		<div className='App'>
			<h1> IronContacts </h1>

			<div className='btn-group'>
				<button onClick={() => addRandom()}> Add Random Contact </button>
				<button onClick={() => sortBy('asc', 'name')}> Sort A - Z </button>
				<button onClick={() => sortBy('des', 'name')}> Sort Z - A </button>
				<button onClick={() => sortBy('asc', 'pop')}> Sort by Ascending popularity </button>
				<button onClick={() => sortBy('des', 'pop')}> Sort by Descending popularity </button>
			</div>

			<table>
				<thead>
					<tr>
						<th>Picture</th>
						<th>Name</th>
						<th>Popularity</th>
						<th>Won an Oscar</th>
						<th>Won an Emmy</th>
					</tr>
				</thead>

				<tbody>
					{contacts.map(contact => (
						<tr key={contact.id}>
							<td>
								<img src={contact.pictureUrl} alt={contact.name} className='actor-pic' />
							</td>
							<td> {contact.name} </td>
							<td> {contact.popularity} </td>
							<td> {contact.wonOscar ? '🏆' : null} </td>
							<td> {contact.wonEmmy ? '🏆' : null} </td>
							<td>
								<button onClick={() => deleteContact(contact.id)}>Delete</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default App;
