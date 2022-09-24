import React, { Component } from "react";
import TableRow from "../TableRow/TableRow";
import contacts from "../../contacts.json";
import "./Table.css";

const originalContacts = [...contacts];

class Table extends Component {
	state = {
		contacts: originalContacts.splice(0, 5),
	};

  RandomContact = () => {
    const famousRandom = contacts(Math.floor(Math.random()* contacts.length))
    console.log(famousRandom)
  
    
  }

  // Para no modificar el estado original, clonamos el prevState.contacts, 
  //buena practica cuando trabajamos con estados y vamos a hacer operaciones sobre ellos
 
  sortByPopularity = () => {
    this.setState((prevState) => {
      return {
        contacts: [...prevState.contacts].sort((a, b) => b.popularity - a.popularity) 
        // sort ordena de mayor a menor o viceversa . Compara "a" y "b"
        // en este caso a en menor x ej = 9.21 entonces si ponemos a -b va de menor a mayor
      }
    })
  }


  sortByName = () => {
    this.setState((prevState) => {
      return {
        contacts: [...prevState.contacts].sort((a, b) => a.name.localeCompare(b.name))
      }
    })
  }


  DeleteContact = (id) => {
    this.setState((prevState) => {
     return {
       contacts:[...prevState.contacts].filter((contact) => contact.id !== id)
      }
    })
}


	render() {
		const { contacts } = this.state;

		return (
			<div>
				<div className="buttons">
					<button className="btn btn-primary" onClick={this.RandomContact}>Add Random Contact </button>
          <button className="btn btn-primary" onClick={this.sortByPopularity}>Sort by popularity </button>
          <button className="btn btn-primary" onClick={this.sortByName}>Sort by Name </button>
				</div>
				<table className="table mt-4 text-center">
					<thead>
						<tr>
							<th scope="col">Picture</th>
							<th scope="col">Name</th>
							<th scope="col">Popularity</th>
							<th scope="col">Won Oscar</th>
							<th scope="col">Won Emmy</th>
              <th scope="col">Actions</th>
						</tr>
					</thead>
					<tbody>
						{contacts.map((contact) => (
							<TableRow key={contact.id} {...contact} 
              onDelete={()=> this.DeleteContact(contact.id)}
              />
						))}
					</tbody>
				</table>
			</div>
		);
	}
}

export default Table;

