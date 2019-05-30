import React, { Component } from 'react';
import contacts from './contacts.js'
import ContactComponent from './ContactComponent.js'

class ObjectComponent extends Component {

	constructor() {
		super()
		this.state = {
			datas: [
				{
				    "name": "Idris Elba",
				    "pictureUrl": "https://image.tmdb.org/t/p/w500/d9NkfCwczP0TjgrjpF94jF67SK8.jpg",
				    "popularity": 11.622713
				},
				{
				    "name": "Jessica Chastain",
				    "pictureUrl": "https://image.tmdb.org/t/p/w500/nkFrkn5NZVGWb4b2X0yIcXezhyt.jpg",
				    "popularity": 8.324357
				},
				{
				    "name": "Johnny Depp",
				    "pictureUrl": "https://image.tmdb.org/t/p/w500/kbWValANhZI8rbWZXximXuMN4UN.jpg",
				    "popularity": 15.656534
				},
				{
				    "name": "Emilia Clarke",
				    "pictureUrl": "https://image.tmdb.org/t/p/w500/j7d083zIMhwnKro3tQqDz2Fq1UD.jpg",
				    "popularity": 16.211837
				},
				{
				    "name": "Leonardo DiCaprio",
				    "pictureUrl": "https://image.tmdb.org/t/p/w500/A85WIRIKVsD2DeUSc8wQ4fOKc4e.jpg",
				    "popularity": 11.245333
				}
			]
		}
	}

	getRandomActor = () => {
		return contacts[Math.floor(Math.random()*contacts.length)];
	}

	addNewRandomActor = () => {
		const actors = this.state.datas;

		let newActor = this.getRandomActor();

		if(actors.includes(newActor)){
			return newActor
		}else{
			actors.push(newActor);
		}

		this.setState([ actors ]);
  	};

  	sortByName = () => {
  		const actors = this.state.datas;
  		
  		actors.sort((a,b) => a.name.localeCompare(b.name))

  		this.setState([ actors ]);
  	}

  	sortByPopularity = () => {
  		const actors = this.state.datas;

  		actors.sort((a,b) => b.popularity - a.popularity)

		this.setState([ actors ]);  		
  	}

  	deleteMovieHandler = (actorIndex) => {
		const actors = this.state.datas;
		const index = actors.indexOf(actorIndex);
		actors.splice(index, 1);
		this.setState({
            datas: actors
        });
    }

	render() {

		const contactsList = this.state.datas.map((item, index) => {

			return <ContactComponent key={index} item={item} clickToDelete={this.deleteMovieHandler.bind(this, item)} />

		})

		return (
			<div className="contactDiv">
				<h1>Celebrities</h1>
				<hr/>
				<br/>
				<span>
					<button onClick={this.addNewRandomActor}>Add Random Contact</button>
					<button onClick={this.sortByName}>Sort by name</button>
					<button onClick={this.sortByPopularity}>Sort by popularity</button>
				</span>
				<br/>
				<br/>
				<table className="celebritiesTable">
				 <tbody> 
					<tr>
						<th>Picture</th>
						<th>Name</th>
						<th>Popularity</th>
						<th>Action</th>
					</tr>
					{contactsList}
				 </tbody> 
				</table>
			</div>
		)	
	}
	
}

export default ObjectComponent;