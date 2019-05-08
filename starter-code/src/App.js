import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json'

class App extends Component {
  contactSlided = contacts.slice(0, 5)
  state = {
    data: this.contactSlided
  }

  addRandomContact = () => {
    const newContacts = [...this.state.data]
    const filterContacts = contacts.filter(e => !newContacts.includes(e))
    const contact =
      filterContacts[Math.floor(Math.random() * filterContacts.length)]
    if (filterContacts.length === 1) {
      return
    } else {
      newContacts.push(contact)
    }
    this.setState({ data: newContacts })
    console.log(this.state.data)
  }

  sortByName = () => {
    const newContacts = [...this.state.data]
    const sortedContacts = newContacts.sort((a, b) => (a.name < b.name ? -1 : 1))
    console.log(sortedContacts)
    this.setState({ data: sortedContacts })
  }


  sortByPopularity = () => {
    const newContacts = [...this.state.data]
    const sortedContacts = newContacts.sort((a, b) => (a.popularity < b.popularity ? -1 : 1))
    console.log(sortedContacts)
    this.setState({ data: sortedContacts })
  }

hanldleDelete = celebrityIndex =>{
  const newContacts= this.state.data
  newContacts.splice(celebrityIndex, 1)
  this.setState({data: newContacts})

}

  render() {
    return (
      <div className="body">
        <div className="botones">
          <button onClick={this.sortByName}>Sort by name</button>
          <button onClick={this.sortByPopularity}>Sort by popularity</button>
          <button onClick={this.addRandomContact}>Add character</button>
        </div>
        <h1>Celebrity List</h1>
        <table>
          <thead className="columnName">
            <tr>
              <th>Photo</th>
              <th>Name</th>
              <th>popularity</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((e, i, a) => {
              return (
                <tr key={e.index}>
                  <td><img src={e.pictureUrl} /></td>
                  <td>{e.name}</td>
                  <td>{e.popularity}</td>
                  <td><button onClick={this.hanldleDelete}>Delete</button></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}
export default App;
