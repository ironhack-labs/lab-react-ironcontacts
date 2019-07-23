import React, { Component } from 'react';
import './App.css';

import List from './components/ContactList';

export default class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>IronContacts</h1>
				<List />
			</div>
		);
	}
}
