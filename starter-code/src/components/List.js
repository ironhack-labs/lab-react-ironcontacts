import React, { Component } from 'react';
import Card from './Card';
import contacts from '../contacts'

class List extends Component {
    constructor(){
        super();
        this.state = {
            theContacts: contacts,
            filteredContacts: []
        }
    }

    sortActorsByNameHandler = () => {
        const filteredContactsCopy = [...this.state.filteredContacts];
        filteredContactsCopy.sort((contactA, contactB) => {
            return contactA.name.localeCompare(contactB.name);
        })
        this.setState({
            filteredContacts : filteredContactsCopy
        })
    }

    sortActorsByPopularityHandler = () => {
        const filteredContactsCopy = [...this.state.filteredContacts];
        filteredContactsCopy.sort((contactA, contactB) => {
            return contactA.popularity - contactB.popularity;
        })
        this.setState({
            filteredContacts : filteredContactsCopy
        })
    }
    

    addRandomActorHandler = () => {
        const contactsCopy = [...this.state.theContacts];
        const filteredContactsCopy = [...this.state.filteredContacts];
        console.log(Math.floor(Math.random() * contactsCopy.length-1))
        let item = contactsCopy.splice(Math.floor(Math.random() * contactsCopy.length-1), 1)[0]
        console.log(item)
        filteredContactsCopy.push(item);
        //console.log(contactsCopy.length)
        this.setState({
          theContacts: contactsCopy,
          filteredContacts : filteredContactsCopy
        })
      }

      deleteContactHandler = (contactIndex) => {
        const filteredContactsCopy = [...this.state.filteredContacts];
        filteredContactsCopy.splice(contactIndex, 1);
        this.setState({
          filteredContacts: filteredContactsCopy
        })
      }    

    render() {
        
     if (this.state.filteredContacts.length < 1) {
        const contactsCopy = [...this.state.theContacts];
        let filteredContactsStart = contactsCopy.splice(0,5)
        this.setState({
            theContacts: contactsCopy,
            filteredContacts : filteredContactsStart
        })
     }

        return (
            <div>
                <div className="columns">
                    <div className="column"><button onClick={this.addRandomActorHandler}>Add Random Contact</button></div>
                    <div className="column"><button onClick={this.sortActorsByNameHandler}>Sort Contacts by name</button></div>
                    <div className="column"><button onClick={this.sortActorsByPopularityHandler}>Sort Contacts by popularity</button></div>
                </div>
                
                {    
                    this.state.filteredContacts.map((oneContact, index) => {
                       return <Card key={index} {...oneContact} pleaseDelete={this.deleteContactHandler} />                          
                    })    
                }
            </div>
        );
    }

}

export default List;
