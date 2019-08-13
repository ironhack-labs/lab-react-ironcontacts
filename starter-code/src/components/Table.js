import React, { Component } from 'react'
import contacts from '../contacts.json'
import '../Table.css'
import { throws } from 'assert'

class Table extends Component {
	constructor() {
		super()
		this.state = {
			contacts: contacts,
			vaina: [],
			index: 5,
			idSort: 0,
			idPopularity: 0,
			idDel: 0,
			idRand: 0
		}
	}

	initialState = () => {}
	randomContact = () => {
		const newContact = Math.floor(Math.random() * (this.state.contacts.length - 1)) + this.state.index
		this.state.index++
		this.state.vaina.push(this.state.contacts[newContact])
		const newInfo = [...this.state.vaina]
		const newIndex = this.state.index
		this.state.idRand = 1
		this.setState({ vaina: newInfo, index: newIndex })
	}

	sortedContacts = () => {
		this.state.vaina.sort((a, b) => (a.name > b.name ? 1 : -1))
		const sortedVaina = [...this.state.vaina]
		this.state.idSort = 1
		this.setState({ vaina: sortedVaina })
	}

	sortByPopularity = () => {
		console.log(this.state.vaina)
		this.state.vaina.sort((a, b) => (a.popularity > b.popularity ? 1 : -1))
		console.log(this.state.vaina)
		const sortedVaina = [...this.state.vaina]
		this.state.idPopularity = 1
		this.setState({ vaina: sortedVaina })
	}

	deleteContact = idx => {
		const contactsCopy = [...this.state.vaina]
		contactsCopy.splice(idx, 1)
		this.state.idDel = 1

		this.setState({
			vaina: contactsCopy
		})
	}

	render() {
		if (this.state.idSort === 0 && this.state.idPopularity === 0 && this.state.idDel === 0 && this.state.idRand === 0) {
			this.state.vaina = [...this.state.contacts]
		} else if (this.state.idSort === 1) {
			this.state.idSort = 0
		} else if (this.state.idPopularity === 1) {
			this.state.idPopularity = 0
		} else if (this.state.idDel === 1) {
			this.state.idDel = 0
		} else if (this.state.idRand === 1) {
			this.state.idRand = 0
		}

		this.state.vaina.splice(this.state.index, this.state.vaina.length - 1)
		return (
			<div>
				<h2>Iron Contacts</h2>
				<button onClick={this.randomContact}>Add random contact</button>
				<button onClick={this.sortedContacts}>Sort by name</button>
				<button onClick={this.sortByPopularity}>Sort by popularity</button>
				<table>
					<tr>
						<th>Picture</th>
						<th>Name</th>
						<th>Popularity</th>
					</tr>
					{this.state.vaina.map((elm, idx) => {
						return (
							<tr key={idx}>
								<td>{elm.name}</td>
								<td>
									<img className='pictureclass' src={elm.pictureUrl} />
								</td>
								<td>{elm.popularity}</td>
								<td>
									<button onClick={() => this.deleteContact(idx)}>Delete</button>
								</td>
							</tr>
						)
					})}
				</table>
			</div>
		)
	}
}
export default Table
