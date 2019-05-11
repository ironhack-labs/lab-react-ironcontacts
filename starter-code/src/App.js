import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
import Artist from './components/Artist';

const ourArtists = contacts.slice(0, 5);

class App extends Component {
	state = {
		artists: ourArtists
	};

	randomAdd = () => {
		const randomArtist = contacts[Math.floor(Math.random() * contacts.length)];
		ourArtists.push(randomArtist);
		this.setState({
			artists: ourArtists
		});
	};

	setOrderedName = () => {
		function compare(a, b) {
			const nameA = a.name.toUpperCase();
			const nameB = b.name.toUpperCase();

			let comparison = 0;
			if (nameA > nameB) {
				comparison = 1;
			} else if (nameA < nameB) {
				comparison = -1;
			}
			return comparison;
		}
		let resultname = ourArtists.sort(compare);
		this.setState({
			artists: resultname
		});
	};

	setOrderedNumber = () => {
		function compare(a, b) {
			const numberA = a.popularity;
			const numberB = b.popularity;

			let comparison = 0;
			if (numberA < numberB) {
				comparison = 1;
			} else if (numberA > numberB) {
				comparison = -1;
			}
			return comparison;
		}
		let resultnumber = ourArtists.sort(compare);
		this.setState({
			artists: resultnumber
		});
	};

	deleteArtist = (selected) => {
		const newArray = this.state.artists.filter((remainingArtists, index) => {
			console.log(remainingArtists);
			return index !== selected;
		});

		this.setState({
			artists: newArray
		});
	};

	render() {
		return (
			<div>
				{/* <pre>{JSON.stringify(this.state.artists, '\t', 2)}</pre> */}
				<div className="App">
					<header className="App-header">
						<img src={logo} className="App-logo" alt="logo" />
						<h1 className="App-title">Welcome to React</h1>
					</header>
					<p className="App-intro">
						<table>
							<h2>IronContacts</h2>
							<button onClick={this.randomAdd}> Add Random Contact</button>
							<button onClick={this.setOrderedName}> Sort by name</button>
							<button onClick={this.setOrderedNumber}> Sort by popularity</button>
							<tr>
								<th>Picture</th>
								<th>Name</th>
								<th>Popularity</th>
							</tr>
							{this.state.artists.map((artist, index) => {
								return (
									<div>
										<Artist
											key={index}
											name={artist.name}
											picture={artist.pictureUrl}
											popularity={artist.popularity}
										/>
										<button onClick={() => this.deleteArtist(index)}> Delete</button>
									</div>
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
