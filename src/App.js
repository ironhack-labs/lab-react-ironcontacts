import { Component } from "react";
import "./App.css";
import contacts from "./contacts.json";

class App extends Component {
  state = {
    contacts: contacts,
  };
  render() {
    const { contacts } = this.state;
    const justFiveContacts = contacts.slice(0, 5);
    console.log(justFiveContacts)
    return (
      <div className="App">
        <div className="container">
        <h1>Ironcontacts</h1>
          <table className='table'>
            <tr>
              <th>Pic</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
            {justFiveContacts.map((elements, key) => {
              return (
                <tr key={key}>
                  <td><img className='ContactsPics' src={elements.pictureUrl} alt=''/></td>
                  <td>{elements.name}</td>
                  <td>{elements.popularity.toFixed(2)}</td>
                </tr>
              )
            })}
          </table>
        </div>
      </div>
    );
  }
}

export default App;
