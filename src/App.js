import './App.css';
import contactsFromJSON from './contacts.json';
import React, { useState } from 'react';

function App() {
	const firstFive = contactsFromJSON.slice(0, 5);

	const [contacts, setContacts] = useState(firstFive);
	const [search, setSearch] = useState('')

	const filter = contacts.filter(contact => contact.name.toLowerCase().includes(search.toLowerCase()))
	
	const addRandom = () => {
		if (contacts.length === contactsFromJSON.length) {
			return;
		}

		let remaining = contactsFromJSON.filter(contact => !contacts.find(element => element.id === contact.id));

		const randomIndex = Math.floor(Math.random() * remaining.length);

		setContacts(prevContacts => [...prevContacts, remaining[randomIndex]]);
	};

	const sortBy = (order, type) => {
		setContacts(prevContacts => {
			let copy = [...prevContacts];
	
			const sorts = {
				name: 
				{
					asc() {
						copy.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
					},
					des() {
						copy.sort((a, b) => b.name.toLowerCase().localeCompare(a.name.toLowerCase()));
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

			return copy
		})
	};

  const deleteContact = (id) => {
		setContacts(prevContacts => prevContacts.filter(contact => contact.id !== id))
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

			<p> Number of celebrities contacts: { contacts.length } { contacts.length === 52 && ' - Hey! Already added every contact' } </p>

			<input type='text'  onChange={e => setSearch(e.target.value)} />

			{ search.length >= 1 && filter.map(contact => <span> { contact.name } </span>) }

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
