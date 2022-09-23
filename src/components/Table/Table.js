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

	render() {
		const { contacts } = this.state;

		return (
			<div>
				<div className="buttons">
					<button className="btn btn-primary" onClick={this.RandomContact}>Add Random Contact </button>
          <button className="btn btn-primary" onClick={this.sortByPopularity}>Sort by popularity </button>
          <button className="btn btn-primary" onClick={this.sortByName}>Sort by Name </button>
				</div>
				<table className="Table-Container">
					<thead>
						<tr>
							<th>Picture</th>
							<th>Name</th>
							<th>Popularity</th>
							<th>Won Oscar</th>
							<th>Won Emmy</th>
						</tr>
					</thead>
					<tbody className="Table-Body">
						{contacts.map((contact) => (
							<TableRow key={contact.id} {...contact} />
						))}
					</tbody>
				</table>
			</div>
		);
	}
}

export default Table;
