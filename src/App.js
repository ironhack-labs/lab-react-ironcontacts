import React from 'react';
import './App.css';
import contacts from './contacts.json';

class App extends React.Component {

	state = {
		contacts: contacts.slice(0, 5)
	};

	addRandomContact = () => {
		const newContact = contacts[Math.floor(Math.random() * contacts.length)];
		const newContacts = [newContact, ...this.state.contacts];
		this.setState({
			contacts: newContacts
		});
	};
	sortByName = () => {
		const sortByName = this.state.contacts.sort((a, b) => {
			var nameA = a.name.toLowerCase();
			var nameB = b.name.toLowerCase();
			if (nameA < nameB) {
				return -1;
			}
			if (nameA > nameB) {
				return 1;
			}
			if (nameA === nameB) {
				return 0;
			}
		});
		this.setState({
			contacts: sortByName
		});
	};
	sortByPopularity = () => {
		const sortByPopularity = this.state.contacts.sort((a, b) => b.popularity - a.popularity);
		this.setState({
			contacts: sortByPopularity
		});

	};
	deleteContact = (id) => {
		const newContacts = this.state.contacts.filter((item, index) => index !== id);
		this.setState({
			contacts: newContacts
		});

	};

	render() {
		const contacts = this.state.contacts
			.map((item, index) => {
				const {name, pictureUrl, popularity} = item;
				return (
					<tr key={index}>
						<td><img src={pictureUrl} alt={name}/></td>
						<td>{name}</td>
						<td>{popularity.toFixed(2)}</td>
						<td>
							<button onClick={() => this.deleteContact(index)}>Delete</button>
						</td>
					</tr>
				);
			});
		console.log(this.state);
		return (
			<div className="App">
				<h1>IronContacts</h1>
				<button onClick={this.addRandomContact}>Add Random Contact</button>
				<button onClick={this.sortByName}>Sort by name</button>
				<button onClick={this.sortByPopularity}>Sorty by popularity</button>
				<table>
					<thead>
					<tr>
						<th>Picture</th>
						<th>Name</th>
						<th>Popularity</th>
						<th>Action</th>
					</tr>
					</thead>
					<tbody>
					{contacts}
					</tbody>
				</table>
			</div>
		);
	}
}

export default App;