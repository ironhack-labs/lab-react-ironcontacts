// src/App.js
import './App.css';
import contacts from './contacts.json';
import { useState } from 'react';

function App() {
	const [ironContacts, setIronContacts] = useState([contacts[0], contacts[1], contacts[2], contacts[3], contacts[4]]);

	return (
		<div className='App'>
			<table>
				<thead>
					<tr>
						<th>Picture</th>
						<th>Name</th>
						<th>Popularity</th>
						<th>Won Oscar</th>
						<th>Won Emmy</th>
					</tr>
				</thead>

				{ironContacts.map((contact) => (
					<tbody key={contact.id}>
						<tr>
							<th>
								<img className='portrait' src={contact.pictureUrl} alt=' celebrity' />
							</th>
							<td>{contact.name}</td>
							<td>{contact.popularity}</td>
							<td>{contact.popularity ? '🏆' : ''}</td>
							<td>{contact.wonEmmy ? '🏆' : ''}</td>
						</tr>
					</tbody>
				))}
			</table>
		</div>
	);
}

export default App;
