import React, { Component } from 'react';
import contacts from './contacts.json';

// import logo from './logo.svg';
import './App.css';

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

class App extends Component {
	state = {
		contactsDisplayed: contacts.slice(0, 5)
	};

	addRandom = () => {
		let randomCelebrity = contacts[getRandomInt(contacts.length)];
		this.setState({
			contactsDisplayed: [ ...this.state.contactsDisplayed, randomCelebrity ]
		});
	};

	sortByName = () => {
		this.setState({
			contactsDisplayed: [ ...this.state.contactsDisplayed ].sort((a, b) => {
				return a.name.localeCompare(b.name);
			})
		});
	};

	sortByPopularity = () => {
		this.setState({
			contactsDisplayed: [ ...this.state.contactsDisplayed ].sort((a, b) => {
				return a.popularity - b.popularity;
			})
		});
	};

	render() {
		return (
			<div className="App">
				<h1>Ironhack Contacts</h1>
				<div className="btn">
					<button onClick={this.addRandom}>Add random contact</button>
					<button onClick={this.sortByName}>Sort by name</button>
					<button onClick={this.sortByPopularity}>Sort by popularity</button>
				</div>
				<div className="ironhackTable">
					<table>
						<thead>
							<tr>
								<th>Picture</th>
								<th>Name</th>
								<th>Popularity</th>
							</tr>
						</thead>
						<tbody>
							{this.state.contactsDisplayed.map((oneCelebrity, index) => (
								<tr key={index}>
									<td>
										<img src={oneCelebrity.pictureUrl} alt="" />
									</td>
									<td>{oneCelebrity.name}</td>
									<td>{oneCelebrity.popularity.toFixed(2)}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}

export default App;
