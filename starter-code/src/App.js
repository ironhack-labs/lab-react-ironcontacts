import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'
import TableComponent from './components/TableComponent';
import CardComponent from './components/Card';

class App extends Component {
    state = {
        contactsNew: contacts.slice(0,5)
    }

    randomContact=()=>{
        const randomNumber = Math.round(Math.random()*(199-5)+5)
        let newContact = contacts[randomNumber]
        this.setState({
            contactsNew: [...this.state.contactsNew, newContact]
        })
    }

    sortByName = () => {
        const sortedArray = this.state.contactsNew.sort(((a,b) => {
            return a.name.localeCompare(b.name)
        }))

        this.setState({
            contactsNew: [...sortedArray]
        })
    }
 
    sortByPopularity = () => {
        const sortedArray = this.state.contactsNew.sort(((a,b) => {
            return (a.popularity-b.popularity)
        }))

        this.setState({
            contactsNew: [...sortedArray]
        })
    }

    delete = index =>{
        const newArray = [...this.state.contactsNew];
        newArray.splice(index, 1);

        this.setState({
            contactsNew: [...newArray]
        })
    }

    render() {
        return ( 
        <div className = "App" >
            <h1>IronContacts</h1>
            <button onClick={()=>this.randomContact()}>Add Random Contact</button>
            <button onClick={()=>this.sortByName()}>Sort by Name</button>
            <button onClick={()=>this.sortByPopularity()}>sort by popularity</button>
            <TableComponent > {
                this.state.contactsNew.map((contact,i) => ( 
                    <CardComponent 
                    name = { contact.name }
                    popularity = { contact.popularity }
                    pictureUrl = { contact.pictureUrl }
                    key={i}
                    delete={this.delete}
                    />
                ))
            } 
            
            </TableComponent>   
            </div >
        );
    }
}

export default App;