import React, { Component } from "react";
import "./App.css";
import data from "./contacts.json";
import ContactTable from "./components/ContactTable";
import { Button } from "antd";

const workingData = data.map((e, i) => {
	return { ...e, id: i };
});

class App extends Component {
	state = {
		contacts: workingData.slice(0, 5)
	};

	addRandomContact = () => {
		const contacts = [...this.state.contacts];

		const filteredData = workingData.filter(w => contacts.findIndex(c => w.id === c.id) === -1);
		if (filteredData.length === 0) return;

		const randomContact = filteredData[Math.floor(Math.random() * filteredData.length)];

		this.setState({ contacts: [...contacts, randomContact] });
	};

	compare = (a, b) => {
		if (a > b) return 1;
		if (a < b) return -1;
		return 0;
	};

	sortByName = () => {
		const contacts = [...this.state.contacts];
		this.setState({ contacts: contacts.sort((a, b) => this.compare(a.name, b.name)) });
	};
	sortByPopularity = () => {
		const contacts = [...this.state.contacts];
		this.setState({ contacts: contacts.sort((a, b) => this.compare(b.popularity, a.popularity)) });
	};

	removeContact = id => {
		const contacts = [...this.state.contacts];
		this.setState({ contacts: contacts.filter(c => c.id !== id) });
	};

	render() {
		return (
			<div className="App">
				<h1>IronContacts</h1>
				<div style={{ width: "100vw", display: "flex", justifyContent: "center" }}>
					<Button style={{ margin: "3px" }} onClick={this.addRandomContact}>
						Add Random Contact
					</Button>
					<Button style={{ margin: "3px" }} onClick={this.sortByName}>
						Sort by name
					</Button>
					<Button style={{ margin: "3px" }} onClick={this.sortByPopularity}>
						Sort by popularity
					</Button>
				</div>
				<div style={{ width: "100vw", display: "flex", justifyContent: "center" }}>
					<ContactTable contacts={this.state.contacts} removeContact={this.removeContact} />
				</div>
			</div>
		);
	}
}

export default App;
