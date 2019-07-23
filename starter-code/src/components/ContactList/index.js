import React, { Component } from 'react';
import Contact from './../Contact';
import contacts from './../../contacts';

export default class ContactList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			contacts: contacts.slice(0, 5),
			remaining: contacts.slice(5),
		};
	}
	addRandomContact = () => {
		let contactsClone = [...this.state.contacts];
		let remainingClone = [...this.state.remaining];
		contactsClone.push(
			...remainingClone.splice(
				Math.floor(Math.random() * remainingClone.length),
				1,
			),
		);
		this.setState({
			contacts: [...contactsClone],
			remaining: [...remainingClone],
		});
	};

	sortContactsByName = () => {
		let contactsClone = [...this.state.contacts];
		contactsClone.sort((a, b) => (a.name > b.name ? 1 : -1));
		this.setState({
			contacts: contactsClone,
		});
	};

	sortContactsByPopularity = () => {
		let contactsClone = [...this.state.contacts];
		contactsClone.sort((a, b) => {
			return a.popularity - b.popularity;
		});

		this.setState({
			contacts: [...contactsClone],
		});
	};
	deleteContact = (i) => {
		let contactsClone = [...this.state.contacts];
		contactsClone.splice(i, 1);
		this.setState({
			contacts: [...contactsClone],
		});
	};

	showContacts = () => {
		return this.state.contacts.map((contact, i) => {
			return (
				<Contact
					key={i}
					name={contact.name}
					pictureUrl={contact.pictureUrl}
					popularity={contact.popularity}
					deleteContact={() => {
						this.deleteContact(i);
					}}
				/>
			);
		});
	};
	render() {
		return (
			<div>
				<button
					onClick={() => {
						this.addRandomContact();
					}}>
					Add Random Contact
				</button>
				<button onClick={this.sortContactsByName}>Sort by Name</button>
				<button onClick={this.sortContactsByPopularity}>
					Sort By popularity
				</button>
				<ul>{this.showContacts()}</ul>
			</div>
		);
	}
}
