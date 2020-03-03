import React, { Component } from 'react';
import './App.scss';
import ContactsList from './components/list';
class App extends Component {
	render() {
		return (
			<div className="App">
				<section>
					<h4>IronContacts</h4>
					<ContactsList />
				</section>
			</div>
		);
	}
}

export default App;
