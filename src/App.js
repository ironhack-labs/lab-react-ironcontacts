import './App.css';
import contacts from './contacts.json';

const newArray = contacts.slice(0, 5);

function App() {
	console.log(contacts);
	return (
		<div>
			<h1>IronContacts</h1>
			<table>
				<tr>
					<th>Picture</th>
					<th>Name</th>
					<th>Popularity</th>
					<th>Won Oscar</th>
					<th>Won Emmy</th>
				</tr>

				{newArray.map((contact) => {
					return (
						<tr>
							<td>
								<img
									class="imgContact"
									src={contact.pictureUrl}
									alt={contact.name}
								></img>
							</td>
							<td>
								<p>{contact.name}</p>
							</td>
							<td>
								<p>{contact.popularity.toFixed(2)}</p>
							</td>
							<td>{contact.wonOscar ? '🏆' : ''}</td>
							<td>{contact.wonEmmy ? '🏆' : ''}</td>
						</tr>
					);
				})}
			</table>
		</div>
	);
}

export default App;
