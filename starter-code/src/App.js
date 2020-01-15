import React, { Component } from "react";
import "./App.css";
import ContactList from "./components/ContactList";
import "bootstrap/dist/css/bootstrap.css";
import contacts from "./contacts.json"

class App extends Component {
	render() {
		return <ContactList contacts={contacts}/>;
	}
}

export default App;
