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

	compare(a, b, property) {
		var A = a[property];
		var B = b[property];

		if ((typeof a[property]) === "string") {
			A = a[property].toUpperCase();
			B = b[property].toUpperCase();
		}

		if (A > B) {
			if ((typeof a[property]) === "string") return 1;
			return -1
		} else if (A == B) return 0;
		else {
			if ((typeof a[property]) === "string") return -1;
			return 1
		}
	}

	sort = ( value ) => {
		const filteredContacts = [...this.state.contacts]
		filteredContacts.sort( (a,b) => this.compare(a, b, value))
		this.setState( {
			contacts: filteredContacts,
			sort: value
		})
	}

	removeContact = (index) => {
		const contactCopy = [...this.state.contacts];
		contactCopy.splice(index, 1);
		this.setState({
				contacts: contactCopy
		})
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
				<button className="button" onClick={() => this.sort("name")} >Sort by Name</button>
				<button className="button" onClick={() => this.sort("popularity")} >Sort by Popularity</button>

				<table className="contactTable"> 
					<thead className="tableHead">
						<tr className="headingRow">
							<th className="tableHeader">Picture</th>
							<th className="tableHeader">Name</th>
							<th className="tableHeader">Popularity</th>
							<th className="tableHeader">Action</th>
						</tr>
					</thead>
					<tbody>
						{
							this.state.contacts.map( (contact, index) => (
								<DisplayContact key={index} {...contact} index={index} onclick={this.removeContact} />
							))
						}
					</tbody>
				</table>
			</div>
			
		)
	}
}

export default Contact