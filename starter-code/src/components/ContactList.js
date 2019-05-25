import React from 'react';
import Contact from './Contact';

class ContactList extends React.Component {
  state = {
    contacts:this.props.contacts.slice(0,5)
  }

  addContactHandler = () => {
    const min = 0;
    const max = this.props.contacts.length - 1;
    const randomIndex = Math.floor(Math.random() * (+max - +min)) + +min; 
    const obj = this.props.contacts[randomIndex]

    const contactsCopy = [...this.state.contacts]
    contactsCopy.push(obj)
    this.setState({
      contacts:contactsCopy
    })
  }

  sortBy = (keyword) => {
    const contactsCopy = [...this.state.contacts]
    console.log(contactsCopy)

    if (keyword === 'name') {
      contactsCopy.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)); 
    } else {
      contactsCopy.sort((a,b) => (a.popularity > b.popularity) ? -1 : ((b.popularity > a.popularity) ? 1 : 0)); 
    }
    
    this.setState({
      contacts: contactsCopy
    })
  }
  
  render() {
  console.log(this.state.contacts)
  return (
    <div>
      <button onClick={this.addContactHandler}> Add Random Contact</button>
      <button onClick={() => this.sortBy('name')}> Sort By Name</button>
      <button onClick={() => this.sortBy('popularity')}> Sort By Popularity</button>

        <table className='table'>
          <thead>
            <tr>
              <th scope="col">Picture</th>
              <th scope="col">Name</th>
              <th scope="col">Popularity</th>
            </tr>
          </thead>
            <tbody>
            {
              this.state.contacts.map((elemento, index) => {
              return <Contact data={elemento} key={index}/>
              })
            }
            </tbody>
        </table>
    </div>
  )
  }
}
export default ContactList


/*
  const fiveContacts = props.contacts.map((element) => {
    console.log(element.name)
  })

  */