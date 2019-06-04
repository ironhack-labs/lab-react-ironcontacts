import React, { Component } from 'react';
import contacts from '../contacts.json';
import _ from 'lodash';
import Contact from './Contact';

class Contacts extends Component {
	constructor() {
		super();
		this.state = {
			contacts: contacts.splice(0, 5)
		};
	}

	render() {
		// const properties = _.keys(this.state.contacts[0]);
		// console.log(properties);
		//return <table>{properties.forEach((property) => <th>{property}</th>)}</table>;
		return (
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
		);
	}
}

export default Contacts;
