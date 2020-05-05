import React, { Component } from 'react'
import './App.css'
import contacts from './contacts.json'
import People from './people/People'

class App extends Component {
	constructor() {
		super()
		this.peopleClone = [...contacts]
		this.mySelection = this.peopleClone.splice(0, 5)
		this.state = { firstContacts: this.mySelection }
	}

	addRandom = () => {
		const secondClone = this.peopleClone.filter((elm) => !this.mySelection.includes(elm))
		let randomPerson = secondClone[Math.floor(Math.random() * secondClone.length - 1)]
		this.mySelection.push(randomPerson)

		this.setState({ firstContacts: this.mySelection })
	}

	sortName = () => {
		this.mySelection.sort((a, b) => {
			if (a.name > b.name) {
				return 1
			}
			if (a.name < b.name) {
				return -1
			}
			return 0
		})
		this.setState({ firstContacts: this.mySelection })
	}

	sortPop = () => {
		this.mySelection.sort((a, b) => {
			if (a.popularity > b.popularity) {
				return 1
			}
			if (a.popularity < b.popularity) {
				return -1
			}
			return 0
		})
		this.setState({ firstContacts: this.mySelection })
	}

	deletePerson = (idx) => {
		this.mySelection.splice(idx, 1)
		this.setState({ firstContacts: this.mySelection })
	}

	render() {
		return (
			<>
				<section className='container'>
					<h1>IronContacts by Yai</h1>

					<article className='my-btn'>
            <button onClick={ this.addRandom }>Add random</button>
            <button onClick={ this.sortName }>Order by name</button>
            <button onClick={ this.sortPop }>Order by popularity</button>
					</article>
					<article>
						<table>
							<thead>
								<tr>
									<th>Picture</th>
									<th>Name</th>
									<th>Popularity</th>
									<th></th>
								</tr>
							</thead>
							<tbody>
								{this.state.firstContacts.map((elm, idx) => (
									<People key={idx} picture={elm.pictureUrl} name={elm.name} popularity={elm.popularity} removePerson={() => this.deletePerson(idx)} />
								))}
							</tbody>
						</table>
					</article>
				</section>
			</>
		)
	}
}

export default App
