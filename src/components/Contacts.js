import React from 'react';

import contacts from '../contacts.json';
import './Contacts.css';

class Contacts extends React.Component {
    //iteration 1
  constructor() {
    super()
    this.state = {
      contacts: contacts.slice(0, 5),
    }
  }
  //iteration 2
  addRandomContact = () => {

    const newContacts = [...this.state.contacts]
    const randomContacts = contacts[Math.floor(Math.random() * contacts.length)]
    newContacts.push(randomContacts);

    if(!newContacts.includes(randomContacts)){
        newContacts.push(randomContacts);
    }

    this.setState({ contacts: newContacts })
  }
  //iteration 3.1
  sortByName = () => {

    const orderedByName = [...this.state.contacts].sort( (a, b) =>
      (a.name > b.name)? 1 : (b.name > a.name) ? -1 : 0
    )

    this.setState({ contacts: orderedByName })
  }
  
  
  // iteration 3.2
  sortByPopularity = () => {

    const orderedByPopularity = [...this.state.contacts].sort( (a, b) =>
      (a.popularity < b.popularity) ? 1 : (b.popularity < a.popularity) ? -1 : 0
    )

    this.setState({ contacts: orderedByPopularity })

  }
 // iteration 4
  deleteContacts = id => {
  
      const contactsCopy = [...this.state.contacts]
      contactsCopy.splice(id, 1)

  this.setState({ contacts: contactsCopy })
  }


  render() {
    return (
      <>
        <section>
          <h2>IronContacts</h2>
          <button className='topButtons' onClick={this.addRandomContact}>Add Random Contact</button>
          <button className='topButtons' onClick={this.sortByName} >Sort by name</button>
          <button className='topButtons' onClick={this.sortByPopularity}>Sort by popularity</button>
          </section>
          <section >
          <table>
            <thead>
              <tr>
                <th >Picture</th>
                <th >Name</th>
                <th >Popularity</th>
              </tr>
            </thead>
            <tbody>
              {this.state.contacts.map((el, index) => (
                <tr key={index}>
                  <th>
                    <img src={el.pictureUrl} alt="Contact" />
                  </th>
                  <th className= 'contentText'>  {el.name}</th>
                  <th className= 'contentText'>{el.popularity.toFixed(2)}</th>
                  <th><button className = 'rigthButton' onClick={this.deleteContacts}>Delete</button></th>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </>
    );
  }
}

export default Contacts;