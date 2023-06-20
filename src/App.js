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
								<p>{contact.popularity}</p>
							</td>
						</tr>
					);
				})}
			</table>
		</div>
	);
}

export default App;
