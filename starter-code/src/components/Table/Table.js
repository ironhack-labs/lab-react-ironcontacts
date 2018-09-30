import React, { Component } from 'react';
import contacts from '../../contacts.json'
import ItemOfTable from './ItemOfTable';
import './Table.css'
import Button from '../Button/Button';

class Table extends Component {
  state = {
    contacts: contacts.splice(0,5),
    stockOfContacts: contacts
  }

  addRandomElement =() => {
    if(this.state.stockOfContacts.length){
      const listOfContacts = this.state.stockOfContacts
      const actualListOfContacts = this.state.contacts
      const newRandomElement = listOfContacts.splice(Math.floor(Math.random()*listOfContacts.length-1),1)

      actualListOfContacts.push(newRandomElement[0])
      this.setState({stockOfContacts:listOfContacts})
      this.setState({contacts:actualListOfContacts})
    }else{
      alert('The contacts list is empty')
    }
  }

  deleteSelectedContact = (element) => {
    const listOfContacts = this.state.stockOfContacts
    const actualListOfContacts = this.state.contacts
    const deletedElement = actualListOfContacts.splice(element,1)

    listOfContacts.push(deletedElement[0])
    this.setState({stockOfContacts:listOfContacts})
    this.setState({contacts:actualListOfContacts})
  }

  sortByName = (e) => {
    const actualListOfContacts = this.state.contacts
    actualListOfContacts.sort((a,b)=> a.name > b.name)
    this.setState({contacts:actualListOfContacts})
  }

  sortByPop = (e) => {
    const actualListOfContacts = this.state.contacts
    actualListOfContacts.sort((a,b)=> a.popularity < b.popularity)
    this.setState({contacts:actualListOfContacts})
  }

  render() {

    return (
      <div>
        <div className='button-group'>
          <Button caption='Add Random Contact' onClick={this.addRandomElement}/>
          <Button caption='Sort by name' onClick={this.sortByName}/>
          <Button caption='Sort by popularity' onClick={this.sortByPop}/>
        </div>
        <table>
          <thead>
            <tr>
              <th>
                <h3>Picture</h3>
              </th>
              <th>
                Name
              </th>
              <th>
                Popularity
              </th>
              <th>
                action
              </th>
            </tr>
          </thead>
          <tbody>
          {
            this.state.contacts.map((element,index) => {
              return <ItemOfTable key={index} {...element} onClick={()=>{this.deleteSelectedContact(index)}}/>
            })
          }
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
