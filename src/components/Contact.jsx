import React, { Component } from 'react'
import contacts from '../contacts.json'
import ContactList from './ContactList'
import './Contact.css'

export default class Contact extends Component {
	state = {
		fiveContacts: contacts.slice(0, 5)
	}

	addRandomContact = () => {
		const newContacts = this.state.fiveContacts;
		const randomContact = contacts[Math.floor(Math.random() * contacts.length)];

		if (!newContacts.includes(randomContact)) {
			newContacts.push(randomContact)
		}

		this.setState({
			fiveContacts: newContacts
		})
	}

	sortByName = () => {
		const newContacts = this.state.fiveContacts;
		const sortAlphabetically = newContacts.sort((a, b) => {
			return a.name.localeCompare(b.name)
		})
		
		this.setState({
			fiveContacts: sortAlphabetically
		})
	}

	sortByPopularity = () => {
		const newContacts = this.state.fiveContacts;
		const sortRanking = newContacts.sort((a, b) => {
			return b.popularity - a.popularity
		})
		
		this.setState({
			fiveContacts: sortRanking
		})
	}

	deleteFromList = (id) => {
		this.setState({
		  fiveContacts: this.state.fiveContacts.filter(f => f.id !== id)
		})
	  }

	render() {
		return (
			<div className="tableContact">
			 	<div className="buttons">
                    <button onClick={this.addRandomContact}> Add random contact</button>
                    <button onClick={this.sortByName}> Sort by name</button>
                    <button onClick={this.sortByPopularity}> Sort by popularity</button>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Popularity</th>
                        </tr>
                	</thead>
                	<tbody>
                    {this.state.fiveContacts.map(item => {
                        return <ContactList key={item.id} {...item} deleteFromList={this.deleteFromList}/>
                    })}
                	</tbody>
            	</table>
        	</div>
		)
	}

}