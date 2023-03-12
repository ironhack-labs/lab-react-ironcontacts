import "./index.css";
import React from "react";
import { Component } from "react";
import contactsList from "../../contacts.json";

const spreadContactList = [...contactsList];

class FamousList extends Component {
  constructor(props){
    super(props);
    this.state ={
      contactsToRender: spreadContactList.splice(0,5),
      restContacs: spreadContactList.slice(5)
      }
    }

  addRandom = () => {
    const unusedContacts = this.state.restContacs;
    let randomIndex = Math.floor(Math.random() * (unusedContacts.length - 1));
    
    const newContactsToRender = this.state.contactsToRender;
    newContactsToRender.push(unusedContacts[randomIndex])
    this.setState(
      {contactsToRender: newContactsToRender}
      )
    }

  sortFunction(proper, x, y){
    const currentContacts = this.state.contactsToRender;
    
    const sortedContacts = currentContacts.sort((a, b) => {
      if (b[proper] > a[proper]) {
        return x;
      } else {
        return y;
      }
    });
     this.setState({
      contactsToRender: sortedContacts
    });
  }

  sortByName = () =>  {
    this.sortFunction('name', -1, 1);
  }

  sortByPopularity = () => {
    this.sortFunction('popularity', 1, -1);    
  }

  delete = (id) => {
  const currentContacts = this.state.contactsToRender;
  const updatedContacts = currentContacts.filter((contact) => contact.id !== id);

    this.setState({ 
      contactsToRender: updatedContacts
    });
  }
  
  render() { 
    return (
    <>
    <div className='container'>
    <button className='btn' onClick={ this.addRandom }>Add random contact</button>
    <button className='btn' onClick={ this.sortByName }>Sort by name</button>
    <button className='btn' onClick={ this.sortByPopularity }>Sort by popularity</button>
    </div>
    <table>
    <thead>
    <tr>
    <th></th>
    <th>Picture</th>
    <th>Name</th>
    <th>Popularity</th>
    <th>Won an Oscar</th>
    <th>Won an Emmy</th>
    </tr>
    </thead>
    <tbody>
    {
    this.state.contactsToRender.map((contact, index) => (
    <tr key={ contact.id }>
    <td>{ index + 1 }</td>
    <td><img className='img-contacts' src={ contact.pictureUrl } alt={ contact.name } /></td>
    <td>{ contact.name }</td>
    <td>{ contact.popularity.toFixed(2) }</td>
    <td>{ contact.wonOscar ? '🏆' : 'NadeNá'}</td>
    <td>{ contact.wonEmmy ? '🏆' : 'NadeNá' }</td>
    <td><button onClick={ () => this.delete(contact.id) }>Delete</button></td>
    </tr>
    ))
    }
    </tbody>
    </table>
    </>
    );
  }
}

export default FamousList;