import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import Table from './components/Table'

class App extends Component {
	render() {
		return (
			<div className='App container'>
				<div className='row justify-content-center'>
					<h1>IronContacts</h1>
				</div>
				<div className='row justify-content-center'>
					<Table />
				</div>
			</div>
		)
	}
}

export default App
