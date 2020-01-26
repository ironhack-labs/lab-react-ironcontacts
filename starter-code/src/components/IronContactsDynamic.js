import React, { Component } from "react";
import contacts from '../contacts.json';
import IronContactCard from './IronContactCard';

class IronContactsDynamic extends Component {
    constructor() {
        super();
        this.state = {contacts: contacts.slice(0,5)}
    }

    addContactHandler = () => {
        const randomContactToBeAdded = contacts[Math.floor(Math.random()* contacts.length)]
        //console.log(randomContactToBeAdded)
        this.setState(() => {
            this.state.contacts.push(randomContactToBeAdded);
            return this.state.contacts
        });
        /* this.setState({
            contacts: [...this.state.contacts, randomContactToBeAdded]
        }); */
        
    }

    deleteContactHandler = (contactId) => {
        this.setState({
            contacts: this.state.contacts.filter(oneContact => oneContact.id !== contactId)
        });        
    }

    nameSortHandler = () => {        
        const sortedNameList = this.state.contacts.sort((a, b) => a.name.localeCompare(b.name))        
        //console.log(sortedList)
        this.setState({
            contacts: [...sortedNameList]
        });
    }

    popularitySortHandler = () => {        
        const sortedPopularityList = this.state.contacts.sort((a, b) => b.popularity - a.popularity)        
        //console.log(sortedPopularityList)
        this.setState({
            contacts: [...sortedPopularityList]
        });
    }

    render() {
        //console.log(this.state.contacts);
        return(
            <div>
            <div className = "buttonHandler-container">
                <button onClick={this.addContactHandler}>Add Random Contact</button>
                <button onClick={this.nameSortHandler}>Sort by name</button>
                <button onClick={this.popularitySortHandler}>Sort by popularity</button>
            </div>
                                     
            <table className = "ironContacts-container">
                <thead>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                        <th>Action</th>
                    </tr>
                </thead>
            <tbody>            
                {this.state.contacts.map(oneContact => {
                    return <IronContactCard key = {oneContact.id} {...oneContact} clickDelete = {() => this.deleteContactHandler(oneContact.id)}/>;
                })}
            </tbody>
            </table>
            </div>
        )        
    }
}

export default IronContactsDynamic;