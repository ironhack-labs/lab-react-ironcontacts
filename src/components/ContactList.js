import React, { Component } from 'react';
import contacts from '../contacts.json';
import Card from './Card';

class ContactList extends Component {
  constructor() {
    super();
    this.state = { contacts: contacts.slice(0,5) };

  }

  addRandomContact = () => {
    const NewContact = [...this.state.contacts];
    const addOne = contacts[Math.floor(Math.random() * contacts.length)];
    NewContact.push(addOne);
    this.setState({
        contacts: NewContact

    })

  }

    sortByName = () => {
      const newOrderedList = [...this.state.contacts];
      newOrderedList.sort(function (a,b){
        if (a.name > b.name){
            return 1;
        }
        if (a.name < b.name){
            return -1
        }
        return 0
      });
        this.setState({
            contacts: newOrderedList
        })

    }
   

    sortByPopularity = () => {
        const orderPopularity = [...this.state.contacts];
        orderPopularity.sort(function (a,b){
          if (a.popularity < b.popularity){
              return 1;
          }
          if (a.popularity > b.popularity){
              return -1
          }
          return 0
        });
          this.setState({
              contacts: orderPopularity,
          });
  
      };

      deleteContact = (contactIndex) => {
            const contactCopy = [...this.state.contacts]; 
            contactCopy.splice(contactIndex, 1);
            this.setState({
                contacts: contactCopy,
            });
          };

      
      

      

   

  
  render() {
    return (
        <div>
        <div>
       <button onClick={this.addRandomContact}>Add random contact</button>
       <button onClick={this.sortByName}>Sort by Name</button>
       <button onClick={this.sortByPopularity}>Sort by Populrity</button>
       </div>
       <table>
            <thead>
                <th> Picture: </th>
                <th> Name: </th>
                <th> Popularity: </th>
                <th> Action: </th>
            </thead>
       </table>
        {this.state.contacts.map((fiveContact, id) => {
          return <Card key={fiveContact.id} {...fiveContact} clickToDelete={() => this.deleteContact(id)} />;
        })}
        </div>
    );
  }
  };


export default ContactList;
