import React, { Component } from 'react';
import { Typography } from 'antd';
import ButtonsComponent from './components/ButtonsComponent';
import CardComponent from './components/CardComponent';
import contacts from './contacts.json';
import './App.css';

const { Title } = Typography;

class App extends Component {
	state = {
		contacts: [ ...contacts.slice(0, 5) ]
	};

	addRandomContact = () => {
		const contactsCopy = this.state.contacts;
		contactsCopy.push(contacts[Math.floor(Math.random() * (contacts.length - 6) + 6)]);
		this.setState({
			contacts: contactsCopy
		});
	};

	sortContactsByName = () => {
		const contactsCopy = this.state.contacts;
		contactsCopy.sort((a, b) => {
			if (a.name < b.name) {
				return -1;
			}
			if (a.name > b.name) {
				return 1;
			}
			return 0;
		});
		console.log(contactsCopy);
		this.setState({
			contacts: contactsCopy
		});
	};

	sortContactsByPopularity = () => {
		const contactsCopy = this.state.contacts;
		contactsCopy.sort((a, b) => b.popularity - a.popularity);
		console.log(contactsCopy);
		this.setState({
			contacts: contactsCopy
		});
	};

	removeContact = (index) => {
		const contactsCopy = this.state.contacts;
		contactsCopy.splice(index, 1);
		this.setState({
			contacts: contactsCopy
		});
	};

	render() {
		return (
			<div className='App'>
				<Title level={2}>IronContacts</Title>
				<ButtonsComponent
					addRandomContact={this.addRandomContact}
					sortContactsByName={this.sortContactsByName}
					sortContactsByPopularity={this.sortContactsByPopularity}
				/>
				{this.state.contacts.map((contact, index) => (
					<CardComponent {...contact} key={index} index={index} removeContact={this.removeContact} />
				))}
			</div>
		);
	}
}

export default App;
