import React, { Component } from 'react';
import contacts from "../contacts.json";
import Contact from "./contact"

class Contacts extends Component {
    constructor(props){
        super(props);
        this.state = {
            contacts: contacts,
            showcontacts: contacts.slice(0,5)
        }
    }

    changeHandler = (e) => {
        let searchQuery = e.target.value;

        var showcontacts = (
            this.state.showcontacts.filter(contact => (
                contact.name.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1
            ))
        )

        this.setState({
            showcontacts: showcontacts
        })
    }

    addHandler = () => {
        let randomContactIndex = Math.floor(Math.random() * this.state.contacts.length);

        let randomContact = this.state.contacts[randomContactIndex];

        this.state.showcontacts.push(randomContact)

        this.setState({
            showcontacts: this.state.showcontacts
        })
    }

    sortNameHandler = () => {
        this.state.showcontacts.sort((a,b) => (a.name > b.name) ? 1 : -1);

        this.setState({
            showcontacts: this.state.showcontacts
        })
    }

    sortPopularityHandler = () => {
        this.state.showcontacts.sort((a,b) => (a.popularity < b.popularity) ? 1 : -1);

        this.setState({
            showcontacts: this.state.showcontacts
        })
    }

    deleteHandler = (indexNumber) => {
       
        let newContacts = [...this.state.showcontacts]

        newContacts.splice(indexNumber, 1)

        this.setState({
            showcontacts: newContacts
        })
    }

    render(){
        return (
            <div>
                <h1 className="display-3 lead">Iron Contacts</h1>
                <input type="text" className="mb-2 mr-2" placeholder="Search for favorites" onChange={this.changeHandler}></input>
                <button onClick={this.addHandler} className="mr-2">Add Random Contact</button>
                <button onClick={this.sortNameHandler} className="mr-2">Sort By Name</button>
                <button onClick={this.sortPopularityHandler} className="mr-2">Sort By Popularity</button>
                <table className="table table-striped table-bordered table-hover table-sm">                
                    <thead className="thead-dark">
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Popularity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                
                {this.state.showcontacts.map((contact, index) => (
                    <Contact index={index.toString()} pictureUrl={contact.pictureUrl} name={contact.name} popularity={contact.popularity} deleteHandler={this.deleteHandler}/>
                ))}
                </table>
            </div>
        )
    }
}

export default Contacts