// src/App.js
import './App.css'
import contactsData from './contacts.json'
import { useState } from 'react'

function App() {
	const [contacts, setContacts] = useState(contactsData.slice(0, 5))
	const [remainingContacts, setRemainingContacts] = useState(contactsData.slice(5))

	const addRandomContact = () => {
		const randomIndex = Math.floor(Math.random() * remainingContacts.length)
		const randomContact = remainingContacts[randomIndex]

		setContacts((prevContacts) => [...prevContacts, randomContact])
		setRemainingContacts((prevRemainingContacts) =>
			prevRemainingContacts.filter((contact) => contact.id !== randomContact.id),
		)
	}

	const sortByName = () => {
		const sortedContacts = [...contacts].sort((a, b) => a.name.localeCompare(b.name))
		setContacts(sortedContacts)
	}

	const sortByPopularity = () => {
		const sortedContacts = [...contacts].sort((a, b) => b.popularity - a.popularity)
		setContacts(sortedContacts)
	}

	return (
		<div className='App'>
			<h1>IronContacts</h1>
			<div>
				<button
					className='blue'
					onClick={addRandomContact}>
					Add Random Contact
				</button>
				<button
					className='purple'
					onClick={sortByName}>
					Sort by name
				</button>
				<button
					className='gold'
					onClick={sortByPopularity}>
					Sort by popularity
				</button>
			</div>
			<table>
				<thead>
					<tr>
						<th>Picture</th>
						<th>Name</th>
						<th>Popularity</th>
						<th>Won an Oscar</th>
						<th>Won an Emmy</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{contacts.map((contact) => (
						<tr key={contact.id}>
							<td>
								<img
									src={contact.pictureUrl}
									alt={contact.name}
								/>
							</td>
							<td>{contact.name}</td>
							<td>{contact.popularity.toFixed(1)}</td>
							<td>
								{contact.wonOscar ? (
									<span
										role='img'
										aria-label='Oscar Trophy'>
										🏆
									</span>
								) : null}
							</td>
							<td>
								{contact.wonEmmy ? (
									<span
										role='img'
										aria-label='Emmy Trophy'>
										🏆
									</span>
								) : null}
							</td>
							<td>
								<button
									className='red'
									onClick={() =>
										setContacts((prevContacts) => prevContacts.filter((c) => c.id !== contact.id))
									}>
									Delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default App
