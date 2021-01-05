import React from 'react';
import './App.css';
import contacts from "./contacts.json";


class App extends React.Component {


  // Iteration 1 | Display 5 Contacts 

  state = {
    contactsdex: contacts.filter((arr, index) => index <= 4)
  }



  // Iteration 2 | Add New Random Contacts

  addRandomContact = () => {
    this.contact = contacts[(Math.floor(Math.random() * (contacts.length - 4) + 4))]

    //solving the adding random contact repeactingly

    if (!this.state.contactsdex.includes(this.contact))
      this.setState({ contactsdex: [this.contact, ...this.state.contactsdex] });
  }

  // Iteration 3 | Sort Contacts By Name And Popularity

  sortByName = () => {
    const copy = [...this.state.contactsdex]
    const sorted = copy.sort((a, b) => a["name"].localeCompare(b["name"]))
    this.setState({ contactsdex: sorted })
  }


  sortByPopularity = () => {
    const copy = [...this.state.contactsdex]
    const sorted = copy.sort((a, b) => b["popularity"] - a["popularity"])
    this.setState({ contactsdex: sorted })
  }


  // Iteration 4 | Remove Contacts
  removeContacts = (contact) => {
    // console.log(contact)
    this.setState({ contactsdex: this.state.contactsdex.filter((person) => person.id !== contact.id) })
  }

  render() {


    return (
      <div className="App" >
        <h2>IronContacts</h2>
        <button onClick={() => this.addRandomContact()}>Add Random Contact </button>
        <button onClick={() => this.sortByName()}>Sort By Name</button>
        <button onClick={() => this.sortByPopularity()}>Sort by popularity </button>


        <table>
          <tbody>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>

            </tr>
            {this.state.contactsdex.map((contact) => {
              return (
                <tr key={contact.id}>
                  <td><img src={contact.pictureUrl} alt={contact.name} /></td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity}</td>
                  <td><button onClick={() => this.removeContacts(contact)}>Delete</button></td>

                </tr>
              )
            })}

          </tbody>

        </table>

      </div>
    );
  }
}

export default App;