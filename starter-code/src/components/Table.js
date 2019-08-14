import React, { Component } from 'react'
import contacts from '../contacts.json'

const contactsCopy = [...contacts]
const showedContacts = contactsCopy.splice(0, 5)

class Table extends Component {
	constructor() {
		super()
		this.state = {
			showedContacts
		}
	}

	addRandom = () => {
		this.setState({ showedContacts: showedContacts.push(contactsCopy[Math.floor(Math.random() * (contactsCopy.length - 1))]) })
	}

	sortByName = () => {
		this.setState({
			showedContacts: showedContacts.sort((a, b) => a.name.localeCompare(b.name))
		})
	}

	sortByPopularity = () => {
		this.setState({
			showedContacts: showedContacts.sort((a, b) => b.popularity - a.popularity)
		})
	}

	deleteContact = idx => {
		this.setState({
			showedContacts: showedContacts.splice(idx, 1)
		})
	}

	render() {
		return (
			<div>
				<div className='row justify-content-between buttons'>
					<button className='btn btn-outline-primary btn-sm' onClick={this.addRandom}>
						Add Random
					</button>
					<button className='btn btn-outline-primary btn-sm' onClick={this.sortByName}>
						Sort by name
					</button>
					<button className='btn btn-outline-primary btn-sm' onClick={this.sortByPopularity}>
						Sort by popularity
					</button>
				</div>
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
						{showedContacts.map((elm, idx) => {
							return (
								<tr key={idx}>
									<td>
										<img src={elm.pictureUrl} alt='Contact photo' />
									</td>
									<td>{elm.name}</td>
									<td>{elm.popularity}</td>
									<td>
										<button className='btn btn-outline-danger btn-sm' onClick={() => this.deleteContact(idx)}>
											Delete
										</button>
									</td>
								</tr>
							)
						})}
					</tbody>
				</table>
			</div>
		)
	}
}

export default Table
