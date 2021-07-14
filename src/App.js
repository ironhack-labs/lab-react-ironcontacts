import logo from './logo.svg';
import './App.css';
import contactsData from './contacts.json';

function App() {
  	let state = {
		  contacts: [contactsData[0], contactsData[1], contactsData[2], contactsData[3], contactsData[4]]
  	}

	return (
		<div className="App">
		<header className="App-header">
			<table>
				<tr>
					<th>Picture</th>
					<th>Name</th>
					<th>Popularity</th>
				</tr>
				{state.contacts.map(contact => (
				<tr key={contact.id}>
					<td>{<img src={contact.pictureUrl} alt="Profile" height="100px"></img>}</td>
					<td>{contact.name}</td>
					<td>{contact.popularity}</td>
				</tr>
				))}
			</table>
		</header>
		</div>
	);
}

export default App;
