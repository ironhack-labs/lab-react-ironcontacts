import "./App.css";
import originalContacts from "./contacts.json"
import React from "react"

class App extends React.Component {

  state = {
    contacts: originalContacts.slice(0, 5)
  }

  addRandomContact() {
    const remaininContacts = originalContacts.slice(5, originalContacts.length - 4)
    const randomContact = remaininContacts[Math.floor(Math.random() * remaininContacts.length)]
    this.setState({
      contacts: [...this.state.contacts, randomContact]
    })
  }

  sortByPopularity() {
    console.log("sorting1")
    function compare(a, b) {
      if (a.popularity < b.popularity) { return 1 }
      if (a.popularity > b.popularity) { return -1 }
      return 0;
    }
    this.setState({
      contacts: [...this.state.contacts].sort(compare)
    })
  }

  sortByName() {
    console.log("sorting2")
    function compare(a, b) {
      if (a.name < b.name) { return 1 }
      if (a.name > b.name) { return -1 }
      return 0;
    }
    this.setState({
      contacts: [...this.state.contacts].sort(compare)
    })
  }

  deleteContact(id) {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id)
    })
  }

  componentDidMount() {
    this.sortByPopularity()
  }

  render() {
    return (
      <div className="App" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <h1>IronContacts</h1>
        <button onClick={() => this.addRandomContact()} className="btn btn-primary my-3">Add Random Contact</button>
        <button onClick={() => this.sortByPopularity()} className="btn btn-primary my-3">Sort by popularity</button>
        <button onClick={() => this.sortByName()} className="btn btn-primary my-3">Sort by name</button>
        <div>
          <table style={{ width: "800px" }} >
            <thead>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
                <th>Won an Oscar</th>
                <th>Won an Emmy</th>
                <th>ACtions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.contacts.map(({ id, name, pictureUrl, popularity, wonOscar, wonEmmy }) => (
                <tr key={id}>
                  <td><img src={pictureUrl} style={{ maxWidth: "100px" }} /></td>
                  <td>{name}</td>
                  <td>{popularity.toFixed(2)}</td>
                  <td>{wonOscar && "🏆"}</td>
                  <td>{wonOscar && "🏆"}</td>
                  <td><button onClick={() => this.deleteContact(id)} className="btn btn-primary my-3">Delete</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;