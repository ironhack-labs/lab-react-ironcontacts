import React, { Component } from 'react';
import contacts from './contacts.json';
import logo from './logo.svg';
import './App.css';
import Table from './components/Table';

class App extends Component {
	state = {
		selectedContacts: contacts.slice(0, 5)
	};

	handleRandom = () => {
		const randomIndex = Math.floor(Math.random() * contacts.length);
		let newStar = contacts[randomIndex];
		const copySelectedContacts = [...this.state.selectedContacts];
		copySelectedContacts.push(newStar);

		this.setState({ selectedContacts: copySelectedContacts });
	};

  handleSortName = () => {
		const sortedArrByName = [...this.state.selectedContacts].sort((a, b) => {
		  return	a.name.localeCompare(b.name);
		});
    console.log(this.state.selectedContacts)
    console.log(sortedArrByName)
		this.setState({ selectedContacts: sortedArrByName });
	};



  handleSortPopularity = () => {
    const sortedArrByPopularity = [...this.state.selectedContacts].sort((a, b) => {
      return a.popularity - b.popularity
    });
    console.log(sortedArrByPopularity)
    this.setState({ selectedContacts: sortedArrByPopularity });
  };
  
  handleDelete = (index) => {
    // const newArr = [...this.state.selectedContacts];
    
    // newArr.splice(index, 1);
    // this.setState(({ selectedContacts: newArr }))
    
    this.setState({
     selectedContacts: this.state.selectedContacts.filter((contact, contactIndex) => {
        return contactIndex !== index;
      }),
    });
  };
  



	render() {
		return (
			<div className="App">
				<button onClick={this.handleRandom}>Add random contact</button>
				<button onClick={this.handleSortName}>Sort by name</button>
				<button onClick={this.handleSortPopularity}>Sort by popularity</button>
				<table className="table-stars">
					<thead>
						<tr>
							<th>Picture </th>
							<th>Name</th>
							<th>Popularity</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
            {this.state.selectedContacts.map((contact,index) => (
             
              <Table key={contact.id}
								img={contact.pictureUrl}
								name={contact.name}
                popularity={contact.popularity}>
                <button onClick={(event)=>this.handleDelete(index)}>Delete</button>
                </Table>
              
						))}
					</tbody>
				</table>
			</div>
		);
	}
}

export default App;
