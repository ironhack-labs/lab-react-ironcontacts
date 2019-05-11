import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
import Artist from './components/Artist';

const ourArtists = contacts.slice(0, 5);
const randomArtist = contacts[Math.floor(Math.random() * contacts.length)];
const newState = ourArtists.push(randomArtist);

console.log(randomArtist);

class App extends Component {
	state = {
		artists: ourArtists
	};

	randomAdd = () => {
		// let previousState = this.state.artists;

		// debugger;
		this.setState({
			artists: newState
		});
	};

	render() {
		return (
			<div>
				{/* <pre>{JSON.stringify(randomArtist, '\t', 2)}</pre> */}
				{/* <pre>{JSON.stringify(this.state, '\t', 2)}</pre> */}
				<div className="App">
					<header className="App-header">
						<img src={logo} className="App-logo" alt="logo" />
						<h1 className="App-title">Welcome to React</h1>
					</header>
					<p className="App-intro">
						<table>
							<h2>IronContacts</h2>
							<button onClick={this.randomAdd}> Add Random Contact</button>
							<tr>
								<th>Picture</th>
								<th>Name</th>
								<th>Popularity</th>
							</tr>
							{this.state.artists.map((artist, index) => {
								return (
									<Artist
										key={index}
										name={artist.name}
										picture={artist.pictureUrl}
										popularity={artist.popularity}
									/>
								);
							})}
						</table>
					</p>
				</div>
			</div>
		);
	}
}

export default App;
