import React, { Component } from 'react';
import contacts from './../../contacts.json';

class ContactsList extends Component {
	constructor() {
		super();
		this.state = {
			contacts: contacts.splice(0, 5)
		};
		this.addContact = this.addContact.bind(this);
		this.sortByName = this.sortByName.bind(this);
		this.sortByPopularity = this.sortByPopularity.bind(this);
		this.deleteContact = this.deleteContact.bind(this);
	}

	addContact() {
		const indexContact1 = contacts[Math.floor(Math.random() * contacts.length)];
		const contactsCopy = [...this.state.contacts];
		contactsCopy.push(indexContact1);
		this.setState({ contacts: contactsCopy });
	}

	sortByName() {
		const contactsCopy = [...this.state.contacts];
		contactsCopy.sort(function(a, b) {
			if (a.name < b.name) {
				return -1;
			}
			if (a.name > b.name) {
				return 1;
			}
			return 0;
		});
		this.setState({ contacts: contactsCopy });
	}
	sortByPopularity() {
		const contactsCopy = [...this.state.contacts];
		contactsCopy.sort(function(a, b) {
			if (a.popularity > b.popularity) {
				return -1;
			}
			if (a.popularity < b.popularity) {
				return 1;
			}
			return 0;
		});
		this.setState({ contacts: contactsCopy });
	}

	deleteContact(id) {
		this.setState(previousState => ({
			contacts: previousState.contacts.filter(contact => contact.id !== id)
		}));
	}

	render() {
		return (
			console.log({ contacts }),
			(
				<div className="contactList">
					<button className="button" onClick={this.addContact}>
						Add Random Contact
					</button>
					<button className="button" onClick={this.sortByName}>
						Sort by name
					</button>
					<button className="button" onClick={this.sortByPopularity}>
						Sort by Popularity
					</button>
					<table>
						<thead>
							<tr className="parts">
								<th>Picture</th>
								<th>Name</th>
								<th>Popularity</th>
							</tr>
						</thead>
						<tbody>
							{this.state.contacts.map(contacts => {
								return (
									<tr key={contacts.id}>
										<td>
											<img width="50vh" src={contacts.pictureUrl}></img>
										</td>
										<td>
											<p>{contacts.name}</p>
										</td>
										<td>
											<p> {contacts.popularity}</p>
										</td>
										<td>
											<button className="deleteBtn"  onClick={() => this.deleteContact(contacts.id)}>Delete</button>
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			)
		);
	}
}

export default ContactsList;
