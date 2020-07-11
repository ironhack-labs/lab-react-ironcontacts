import React, { Component } from 'react';
import contacts from './contacts.json';

class Table extends Component {
    constructor(props){
        super(props)
        this.state = {
            contactsList : contacts.slice(0,5)
        }
    }

    addRandomContact = () => {
        const newArray = [...this.state.contactsList]
        const randomContact = contacts[(Math.floor(Math.random() * contacts.length))]
        newArray.push(randomContact)
        this.setState({contactsList: newArray})
    }

    sortByName = () => {
        const newArray = [...this.state.contactsList].sort((a, b) => {
            return a.name.localeCompare(b.name)
        })
        this.setState({contactsList: newArray})
    }

    sortByPopularity = () => {
        const newArray = [...this.state.contactsList].sort((a, b) => {
            return b.popularity - a.popularity
        })
        this.setState({contactsList: newArray})
    }

    deleteContact = id => {
        const newArray = [...this.state.contactsList]
        const contactIndex = newArray.findIndex(item => item.id === id)

        newArray.splice(contactIndex, 1)

        this.setState({contactsList: newArray})
    }

    render(){

        const myTable = this.state.contactsList.map(contact => (
            <tr key={contact.id}>
            <td> <img src={contact.pictureUrl} alt="Avatar" className="avatar"/> </td>
            <td>{contact.name}</td>
            <td>{contact.popularity}</td>
            <td> <button onClick={() => this.deleteContact(contact.id)} className="btn btn-danger">Delete</button> </td>
            </tr>
        ))

        return (
            <div className="container">
                <button onClick={this.addRandomContact} className="btn btn-success m-2">Add random contact</button>
                <button onClick={this.sortByName} className="btn btn-secondary m-2">Sort by name</button>
                <button onClick={this.sortByPopularity} className="btn btn-secondary m-2">Sort by popularity</button>
                <table className="table mt-4">
                    <thead>
                    <tr>
                        <th scope="col">Picture</th>
                        <th scope="col">Name</th>
                        <th scope="col">Popularity</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {myTable}
                    </tbody>
                </table>   
            </div>
            
        );
    }

  
}

export default Table;
