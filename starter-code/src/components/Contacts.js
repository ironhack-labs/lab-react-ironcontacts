import React, { Component } from 'react';
import data from '../contacts.json';
import _ from 'lodash';
import Contact from './Contact';

const randomSelector = (array) => array[Math.floor(Math.random() * array.length)];

class Contacts extends Component {
	constructor() {
		super();
		this.state = {
			contacts: data.splice(0, 5)
		};
	}
	addRandomContact = () => {
		const contacts = [ ...this.state.contacts ];

		//console.log(randomContact);
		contacts.push(randomSelector(data));
		this.setState({
			contacts
		});
	};

	sortByName = () => {
		const contacts = [ ...this.state.contacts ];
		contacts.sort((a, b) => a.name.localeCompare(b.name));

		console.log(contacts);
		this.setState({
			contacts
		});
	};
	sortByPopularity = () => {
		const contacts = [ ...this.state.contacts ];
		contacts.sort((a, b) => b.popularity - a.popularity);
		console.log(contacts);
		this.setState({
			contacts
		});
	};

	render() {
		// const properties = _.keys(this.state.contacts[0]);
		// console.log(properties);
		//return <table>{properties.forEach((property) => <th>{property}</th>)}</table>;
		return (
			<section>
				<button onClick={() => this.addRandomContact()}>Add random contact</button>
				<button onClick={() => this.sortByName()}>Sort by Name</button>
				<button onClick={() => this.sortByPopularity()}>Sort by Popularity</button>
				<table>
					<thead>
						<tr>
							<th>Picture</th>
							<th>Name</th>
							<th>Popularity</th>
						</tr>
					</thead>
					<tbody>
						{this.state.contacts.map((contact, i) => {
							return <Contact key={i} {...contact} />;
						})}
					</tbody>
				</table>
			</section>
		);
	}
}

export default Contacts;
