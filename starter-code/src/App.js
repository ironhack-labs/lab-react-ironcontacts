import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Contacts from './components/Contacts.jsx';
import SimpleTable from './components/MaterialUI/DataTable';

class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>IronContacts</h1>
				{/* <Contacts /> */}
				<SimpleTable />
			</div>
		);
	}
}

export default App;
