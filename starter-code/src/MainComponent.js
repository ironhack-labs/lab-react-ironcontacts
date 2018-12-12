import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import MainComponent from './MainComponent'
import contacts from './contacts.json';

class MainComponent extends Component {
	state = {
		contactList: contacts.slice(5, contacts.length),
		showList: contacts.slice(0, 5)
	};

	getRand = () => {
		//how to get random element in array
		//cut it out of this.state.contactList and put it into this.state.showList
		let rand = Math.floor(Math.random() * this.state.contactList.length);
		let randContact = this.state.contactList[rand];

		let newShowList = [ ...this.state.showList ];
		let newContactList = [ ...this.state.contactList ];

		newContactList.splice(randContact, 1);
		newShowList.push(randContact);

		this.setState({
			showList: newShowList,
			contactList: newContactList
		});
		console.log(this.state.contactList.length);
		console.log(randContact);
	};

	sortList = () => {
		const list = [ ...this.state.showList ];

		let sortNames = (a, b) => {
			if (a.name < b.name) {
				return -1;
			}
			if (a.name > b.name) {
				return 1;
			}
			return 0;
		};
		list.sort(sortNames);
        console.log(list);
        
		this.setState({
			showList: list
		});
	};
 
    sortPop = () => {
        const listPop = [ ...this.state.showList ];

		let sortPopularity = (a, b) => {
			if (a.popularity < b.popularity) {
				return -1;
			}
			if (a.popularity > b.popularity) {
				return 1;
			}
			return 0;
		};
		listPop.sort(sortPopularity);
        console.log(listPop);
        


		this.setState({
			showList: listPop
		});

    }


    deleteContact = () => {
        const 
    }

	render() {
		let showList = this.state.showList.map((contact, index) => {
			return (
				<div key={index}>
					<li>{contact.name}</li>
					<img src={contact.pictureUrl} alt="contact" />
				</div>
			);
		});

		return (
			<div>
				{showList}
				<button onClick={this.getRand}>Add Random</button>
				<button onClick={this.sortList}>Sort List (abc)</button>
                <button onClick={this.sortPop}>Sort List (Pop)</button>
			</div>
		);
	}
}

export default MainComponent;
