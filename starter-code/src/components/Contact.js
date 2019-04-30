import React, { Component } from 'react';
import DisplayContact from "./DisplayContact"
import contacts from '../contacts.json'

const firstFive = contacts.slice(0,5)

function selectRandomContact(array) {
	const randomIndex = Math.floor(Math.random()*contacts.length)
	return contacts[randomIndex];
}

class Contact extends Component {
	constructor() {
		super()
		this.state = {
			contacts: firstFive,
			sort: "default"
		}
	}

	addRandomContact = () => {
		var newContact = selectRandomContact(contacts)
		const contactCopy = [...this.state.contacts]
		contactCopy.push(newContact)

		this.setState( {
			contacts: contactCopy
		})
	}

	sortByName = () => {
		const filteredContacts = [...this.state.contacts]
		filteredContacts.sort( (a,b) => {
			const nameA = a.name.toUpperCase();
			const nameB = b.name.toUpperCase();

			if (nameA > nameB) {
				console.log("A")
				return 1
			} else if (nameA == nameB) {
				console.log("B")
				return 0
			} else return -1;
		})
		this.setState( {
			contacts: filteredContacts,
			sort: "name"
		})
		return console.log("filtered: ", filteredContacts)
	}

	sortyByPopularity = () => {

	}

	render() {
		console.log("rendering.... state contacts: ", this.state.contacts)
		// if (this.state.sort === "name") this.filteredContacts = this.sortByName()
		// else if (this.state.sort === "popularity") this.filteredContacts = this.sortyByPopularity()
		// else this.filteredContacts = this.state.contacts;

		return (
			<div className="contactContainer">
				<header className="title">IronContacts</header>
				<button className="button randomButton" onClick={() => this.addRandomContact()} >Add Random Contact</button>
				<button className="button" onClick={() => this.sortByName()} >Sort by Name</button>
				<button className="button" onClick={() => this.sortyByPopularity()} >Sort by Popularity</button>

				<table className="contactTable"> 
					<thead className="tableHead">
						<tr className="headingRow">
							<th className="tableHeader">Picture</th>
							<th className="tableHeader">Name</th>
							<th className="tableHeader">Popularity</th>
						</tr>
					</thead>
					<tbody>
						{
							this.state.contacts.map( (contact, index) => (
								<DisplayContact key={index} {...contact} />
							))
						}
					</tbody>
				</table>
			</div>
			
		)
	}
}

export default Contact