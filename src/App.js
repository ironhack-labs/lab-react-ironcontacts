import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";
import React from "react";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			contactsList: [],
		};
    //Iteration 1. Adding 5 initial movies to state.contactList
		for (let i = 0; i < 5; i++) {
			this.state.contactsList.push(contacts[i]);
		}
	}

  //Iteration 2. This add's a new contact.
	addContact() {
		let newContact = contacts[Math.floor(Math.random() * contacts.length)];
		let newContactsList = [...this.state.contactsList];
		newContactsList.push(newContact);
		this.setState({ contactsList: newContactsList });
	}

  //Iteration 3. Sorts
  sortByPopularity(){
    let arrayCopy = [...this.state.contactsList];
    this.setState({contactsList: arrayCopy.sort((contact1, contact2) => contact1.popularity - contact2.popularity)});  
  }
  sortByName(){
    let arrayCopy = [...this.state.contactsList];
    this.setState({contactsList: arrayCopy.sort((contact1, contact2) => contact1.name.localeCompare(contact2.name))});
  }

  //Iteration 4. Remove contact

	render() {
		return (
			<div>
				<button onClick={() => this.addContact()}>Add Random Contact</button>
        <button onClick={() => this.sortByName()}>Sort by name</button>
        <button onClick={() => this.sortByPopularity()}>Sort by popularity</button>
				<table>
					<thead>
						<tr>
							<th>Picture</th>
							<th>Name</th>
							<th>Popularity</th>
						</tr>
					</thead>
					<tbody>
						{this.state.contactsList.map((contact, index) => {
							return (
								<tr key={contact.id + index}>
									<td>
										<img src={contact.pictureUrl}></img>
									</td>
									<td>{contact.name}</td>
									<td>{contact.popularity}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		);
	}
}
export default App;
