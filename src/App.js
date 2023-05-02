import './App.css';
import { useState } from 'react';
import allContacts from './contacts.json';

function App() {
	// Iteration 1
	const [visibleContacts, setVisibleContacts] = useState( allContacts.slice( 0, 6 ) );

	// Iteration 3
	const addRandomContact = () => {
		const remainingContacts = allContacts.filter( ( contact ) => {
			// test foreach element, whether at least one element passes the test. return a boolean
			return !visibleContacts.some( ( visibleContact ) => visibleContact.id === contact.id );
		} );
		const randomCharacter = remainingContacts[Math.floor( Math.random() * remainingContacts.length )];
		if ( remainingContacts.length > 0 ) {
			setVisibleContacts( [...visibleContacts, randomCharacter] );
		}
	};

	// Iteration 4
	const sortByName = () => {
		const copy = [...visibleContacts];
		copy.sort( ( a, b ) => a.name.localeCompare( b.name ) );
		setVisibleContacts( copy );
	};
	const sortByPopularity = () => {
		const copy = [...visibleContacts];
		copy.sort( ( a, b ) => b.popularity - a.popularity );
		setVisibleContacts( copy );
	};

	// Iteration 5
	const deleteContact = ( deleteThisId ) => {
		const filtered = visibleContacts.filter( ( contact ) => contact.id !== deleteThisId );
		return setVisibleContacts( filtered );
	};

	return (
		<div className="App">
			<h1>IronContacts</h1>
			<div className='actions'>
				<button onClick={addRandomContact}>Add Random Contact</button>
				<button onClick={sortByName}>Sort by Name</button>
				<button onClick={sortByPopularity}>Sort by Popularity</button>
			</div>
			<table>
				<thead>
					<tr>
						<th>Picture</th>
						<th>Name</th>
						<th>Popularity</th>
						<th>Won an Oscar</th>
						<th>Won an Emmy</th>
						<th>Remove</th>
					</tr>
				</thead>
				<tbody>
					{ visibleContacts.map( ( contact ) => {
						return (
							<tr key={contact.id}>
								<td><img src={contact.pictureUrl} alt='photo' /></td>
								<td>{contact.name}</td>
								<td>{( contact.popularity ).toFixed( 2 )}</td>
								{ contact.wonOscar ? <td>🏆</td> : <td></td>}
								{ contact.wonEmmy ? <td>🏆</td> : <td></td>}
								<td>
									<button onClick={() => deleteContact( contact.id )}>❌</button>
								</td>
							</tr> );
					} )}
				</tbody>
			</table>
		</div>
	);
}

export default App;
