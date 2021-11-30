import { useState } from 'react';
import './ListContacts.css';
import Card from '../card/Card';
import contacts from './../../contacts.json';

const allContacts = contacts;
const firstFive = allContacts.slice(0, 5);



function randomBetween(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}


function ListContacts(props){

	const[contactState, setContactState] = useState(firstFive);

	function addRandomContact(){
		const randomIndex = randomBetween(4, allContacts.length - 1)
		const randomContact = allContacts[randomIndex];
		allContacts.splice(allContacts.indexOf(randomContact), 1);
		setContactState([...contactState, randomContact]);
	}

	function sortByName(){
		const sortedContacts = contactState.sort((a, b) => a.name.localeCompare(b.name));
		setContactState([...sortedContacts])
	}

	function sortByPopularity(){
		const sortedContacts = contactState.sort((a, b) => b.popularity - a.popularity);
		setContactState([...sortedContacts])
	}

	function deleteContact(contact){
		const filteredContacts = contactState.filter(contactDel => contactDel.id !== contact.id);
		setContactState([...filteredContacts]);
	}
 
	return (

		<div className="list-contacts">

			<h1>IronContacts</h1>

			<div className="buttons-container">
				<button onClick={addRandomContact}>Add Random Contact</button>
				<button onClick={sortByName}>Sort by Name</button>
				<button onClick={sortByPopularity}>Sort by Popularity</button>
			</div>

			{contactState.map(contact => <Card key={contact.id} name={contact.name} 
				pictureUrl={contact.pictureUrl} popularity={contact.popularity} deleteContact={()=>deleteContact(contact)}/>)}
		
		</div>
	);
}

export default ListContacts;