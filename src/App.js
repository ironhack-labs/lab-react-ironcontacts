import './App.css';
import react from 'react';
import contacts from "./contacts.json";

class App extends react.Component {
  state = {
    contacts: contacts.splice(0, 5),
  };

  addRandomContact = () => {
    let randomArray = Math.floor(Math.random() * (contacts.length -0)) + 0;  
    let newContact = contacts[randomArray];
    this.setState((previousState) => {
      return {
        contacts: previousState.contacts.concat(newContact)
      };
    });
  };


  sortByName = () => {
   
    this.setState((previousState) => {
      return {
        contacts: previousState.contacts.sort((a, b) => {
          if (a.name > b.name) {
            return 1;
          } else if (a.name < b.name) {
            return -1;
          } else {
            return 0;
          }
        })
      };
    });   
  };

  sortByPopularity = () => {

    this.setState((previousState) => {
      return {
        contacts: previousState.contacts.sort((a, b) => {
          if (a.popularity < b.popularity) {
            return 1;
          } else if (a.popularity > b.popularity) {
            return -1;
          } else {
            return 0;
          }
        }),
      };
    }); 
  }

  removeContact = (id) => {
    this.setState((previousState) => {
      return {
        contacts: previousState.contacts.filter((contact) => {
        return contact.id !== id})
      };
    });
  };

  render() { 
    const {contacts} = this.state;
    return (
      <div className="App">
        <h1>Iron Contacts</h1>
        <button className="butt" onClick={this.addRandomContact}>
          Add Random Contact
        </button>
        <button className="butt" onClick={this.sortByName}>
          Sort by Name
        </button>
        <button className="butt" onClick={this.sortByPopularity}>
          Sort by Popularity
        </button>
        <table className="list">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          {contacts.map((person, index) => {
            return (
              <tbody key={index}>
                <tr>
                  <td>
                    <img
                      className="picture"
                      alt="portrait"
                      src={person.pictureUrl}
                    ></img>
                  </td>
                  <td>{person.name}</td>
                  <td>{person.popularity}</td>
                  <td className="delete">
                    <button
                      className="butt-2"
                       onClick={() => this.removeContact(person.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    );
  };

}

export default App;
