import React, { Component } from "react";
import ContactItem from "./ContactItem.js";
import Controls from "./Controls";

class ContactList extends Component {
	state = {
		contacts: this.props.contacts.slice(0, 5),
		sortKey: null,
	};

	onClickRandomContact = () => {
		console.log(this.props);
		const randomCont = this.props.contacts[
			Math.floor(Math.random() * this.props.contacts.length)
		];
		if (randomCont) {
			this.setState({
				contacts: [randomCont, ...this.state.contacts],
			});
		}
	};

	onClickSort(sortedFactor) {
		const contacts = [...this.state.contacts].sort((c1, c2) => {
			if (sortedFactor === "name") {
				return c1.name.localeCompare(c2.name);
			}
			if (sortedFactor === "popularity") {
				return c2.popularity - c1.popularity;
			}
		});
		this.setState({
			contacts: contacts,
			sortKey: sortedFactor,
		});
	}

	deleteContact(contact) {
		console.log("entra")
		this.setState({ contacts: this.state.contacts.filter(c => c !== contact) });
	}

	render() {
		return (
			<div className="App">
				<h1>IronContacts</h1>
				<Controls
					onClickRandomContact={() => this.onClickRandomContact()}
					onClickSort={key => this.onClickSort(key)}
				/>

				<table className="table">
					<thead>
						<tr>
							<th scope="col">Picture</th>
							<th scope="col">Name</th>
							<th scope="col">Popularity</th>
						</tr>
					</thead>
					<tbody>
						{this.state.contacts.map((oneContact, index) => {
							return <ContactItem key={index} {...oneContact} deleteContact={()=> this.deleteContact(oneContact)}/>;
						})}
					</tbody>
				</table>
			</div>
		);
	}
}

export default ContactList;
