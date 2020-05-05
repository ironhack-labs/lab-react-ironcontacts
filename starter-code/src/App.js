import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';


class App extends Component {

  state={
    renderedContacts: contacts.splice(0,5),
    data: contacts,
  }

  renderContacts = () => {
    return this.state.renderedContacts.map((e,index)=>{
      return (
      <tr key={index}>
        <td>
          <img src={e.pictureUrl} alt='' height='100px' ></img>
        </td>
        <td>
          {e.name}
        </td>
        <td>
          {e.popularity.toFixed(2)}
        </td>
        <td>
          <button onClick={()=>this.handleDelete(index)}>Delete</button>
        </td>
      </tr>
      )
    })
  }

  selectRandomContact = (contactList) => {
    return contactList[Math.floor(Math.random() * contactList.length)]
  }

  handleRandom = () => {
    const newRenderedContacts = [...this.state.renderedContacts]
    const randomContact = this.selectRandomContact(this.state.data)
    newRenderedContacts.push(randomContact)
    this.setState({renderedContacts: newRenderedContacts})
  }

  handleSortName = () => {
    const sortedArray = [...this.state.renderedContacts].sort((a,b)=>{
      return a.name.localeCompare(b.name)
    })
    this.setState({renderedContacts: sortedArray})
  }
  
  handleSortPopularity = () => {
    const sortedArray = [...this.state.renderedContacts].sort((a,b)=>{
      return b.popularity-a.popularity
    })
    this.setState({renderedContacts: sortedArray})
  }

  handleDelete = (index) => {
    this.setState({renderedContacts: this.state.renderedContacts.filter((element,contactIndex) => {
        return contactIndex !== index;
      }),
    });
  }

  render() {
    return (
      <div className='main'>
      <div className='cta-buttons'>
        <button onClick={this.handleRandom}>Add random contact</button>
        <button onClick={this.handleSortName}>Sort by name</button>
        <button onClick={this.handleSortPopularity}>Sort by popularity</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.renderContacts()}
        </tbody>
      </table>
    </div>
    );
  }
}

export default App;
