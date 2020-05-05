import React, { Component } from 'react';
import ContactRow from './ContactRow';
import contacts from '../contacts.json';

class Main extends Component {
	state = {
		shows: this.initiateList(),
		left: this.initiateLeftList(),
	};

	initiateList() {
		let listLeft = [...contacts].splice(0, 5);
		return listLeft;
	}

	initiateLeftList() {
		let listLeft = [...contacts];
		listLeft.splice(0, 5);
		return listLeft;
	}

	handleAddRandom = () => {
		let rand = Math.floor(Math.random() * Math.floor(this.state.left.length));
		let newShows = [...this.state.shows];
		const newProfile = [...this.state.left][rand];
		newShows.push(newProfile);
		let newLeft = [...this.state.left];
		newLeft = newLeft.filter((profile) => profile.id !== newProfile.id);
		this.setState({ shows: newShows, left: newLeft });
	};

	handleSortName = () => {
		const sortedList = [...this.state.shows].sort((a, b) => a.name.localeCompare(b.name));
		this.setState({ shows: sortedList });
	};

	handleSortPopularity = () => {
		const sortedList = [...this.state.shows].sort((a, b) => b.popularity - a.popularity);
		this.setState({ shows: sortedList });
	};

	handleDelete = (id) => {
		const updatedList = [...this.state.shows].filter((profile) => profile.id !== id);
		this.setState({ shows: updatedList });
	};

	render() {
		return (
			<main>
				{!!this.state.left.length && <button onClick={this.handleAddRandom}>Add Random Contact</button>}
				<button onClick={this.handleSortName}>Sort by name</button>
				<button onClick={this.handleSortPopularity}>Sort by popularity</button>
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
						{this.state.shows.map((contact) => {
							return (
								<ContactRow
									key={contact.id}
									name={contact.name}
									picture={contact.pictureUrl}
									popularity={contact.popularity}
									delete={() => this.handleDelete(contact.id)}
								/>
							);
						})}
					</tbody>
				</table>
			</main>
		);
	}
}

export default Main;
