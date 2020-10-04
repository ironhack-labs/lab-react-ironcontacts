import React, { Component } from 'react';
import contacts from './contacts.json';
import '../assets/styles/style.css';

function ContactLine(props) {
  return (
    props.contactIds.map(id => {
      return (
        <tr key={id}>
          <td><img src={contacts[id].pictureUrl} alt={contacts[id].name} /></td>
          <td>{contacts[id].name}</td>
          <td>{contacts[id].popularity}</td>
        </tr>
      )
    })
  )
}


class App extends Component {
  state = {
    contactList: ['0', '1', '2', '3', '4'],
    contactsRemaining: Object.keys(contacts).slice(5)
  }

  handleAddContact = () => {
    this.setState(prevState => {
      if (prevState.contactsRemaining.length > 0) {
        const rIndex = Math.floor(Math.random() * prevState.contactsRemaining.length);
        // console.log("Add:", rIndex);
        const prevList = [...prevState.contactList];
        const prevRemain = [...prevState.contactsRemaining];
        prevList.push(prevState.contactsRemaining[rIndex]);
        prevRemain.splice(rIndex, 1)
        return {
          contactList: prevList,
          contactsRemaining: prevRemain
        };
      }
    })
  }

  handleSortName = () => {
    this.setState(prevState => {
      const prevList = [...prevState.contactList];
      prevList.sort((a, b) => {
        if (contacts[a].name > contacts[b].name) {
          console.log(contacts[a].name, ' > ', contacts[b].name)
          return 1;
        }
        if (contacts[a].name > contacts[b].name) {
          console.log(contacts[a].name, ' < ', contacts[b].name)
          return -1;
        }
        console.log(contacts[a].name, ' = ', contacts[b].name)
        return 0;
      });
      console.log([...prevState.contactList]);
      console.log(prevList);
      return {
        contactList: [...prevList]
      }
    })
  }


  render() {
    console.log(this.state);
    return (
      <div className='container' >
        <h1>IronContacts</h1>
        <button onClick={this.handleAddContact}>Add Random Contact</button>
        <button onClick={this.handleSortName}>Sort by name</button>
        <table className='table'>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            <ContactLine contactIds={this.state.contactList} />
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;