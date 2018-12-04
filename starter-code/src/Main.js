import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json'


class Main extends Component {
    state = {
        contactList : contacts,
        firstFive : contacts.slice(0,5)
    }

    addRandomContact = () => { 
        const newContactList = [...this.state.firstFive] 
        var randomNum = Math.floor((Math.random()*200)+1);

        if(randomNum !== this.firstFive){
            newContactList.push( 
              contacts[randomNum]
            )
        } else {
            randomNum;
        }
        
        
        this.setState({ 
            firstFive:newContactList
        })
    }
        
    sortByName = () => {
        this.state.firstFive.sort(function(a, b) {
            var nameOne = a.name.toUpperCase();
            var nameTwo = b.name.toUpperCase(); 
            if (nameOne < nameTwo) {
              return -1;
            }
            if (nameOne > nameTwo) {
              return 1;
            }
        }
    )}

    deleteContact = (i) => {
        console.log(i)
        const contacts = this.state.contacts;
        contacts.splice(i, 1); 
        this.setState({ 
            contacts:contacts
        })
    }

  render() {
    const listItems = this.state.firstFive.map((theContact, index) => { 

        return  (                     
                    <li key={index} >
                        <h2>Name: {theContact.name}</h2>  
                        <img src={theContact.pictureUrl} width="100px"/> 
                        <h2>Popularity: {theContact.popularity}</h2>  
                         
                        <button onClick={() => this.deleteContact(index)}>Delete Contact</button>

                    </li>
        )
    })

        return (
            <div>
                <button onClick={this.addRandomContact} className="addContact">Add a Contact</button>
                <button onClick={this.sortByName} className="addContact">Sort by Name</button>
                <button onClick={this.sortByPop} className="addContact">Sort by Popularity</button>
                {listItems}
            </div>
        )
    }

}







export default Main;