import React, { Component } from 'react';
import DisplayContact from "./DisplayContact"
import contacts from '../contacts.json'

const firstFive = contacts.slice(0,5)

function selectRandomContact(array) {
	const randomIndex = Math.floor(Math.random()*contacts.length)
	console.log("random contact: ", contacts[randomIndex])
	return contacts[randomIndex];
}

class Contact extends Component {
	constructor() {
		super()
		this.state = {
			contacts: firstFive
		}
	}

	addRandomContact = () => {
		var newContact = selectRandomContact(contacts)
		const contactCopy = [...this.state.contacts]
		contactCopy.push(newContact)

		this.setState( {
			contacts: contactCopy
		})
		console.log("new state: ", this.state)
	}

	render() {
		console.log(this.state.contacts)
		return (
			<div className="contactContainer">
				<header className="title">IronContacts</header>
				<button className="randomButton" onClick={() => this.addRandomContact()} >Add Random Contact</button>
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