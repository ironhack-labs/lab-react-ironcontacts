import React from "react";
import contacts from "./contacts.json";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: contacts.slice(0, 5),
    };
  }

  randomContacts = () => {
    let randomCont = contacts[Math.floor(Math.random() * contacts.length)];
    const dataCopy = [...this.state.data];
    dataCopy.push(randomCont);
    this.setState({
      data: dataCopy,
    });
  };

  sortName = () => {
    const dataCopy = [...this.state.data];
    dataCopy.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    this.setState({ data: dataCopy });
  };

  render() {
    return (
      <div>
        <button onClick={() => this.randomContacts()}>
          ADD Random Contacts
        </button>
        <button onClick={() => this.sortName()}>Sort by name</button>
        <div>
          <h1>Iron contacts</h1>
          <div>
            <table>
              <thead>
                <tr>
                  <th>Picture</th>
                  <th>Name</th>
                  <th>Popularity</th>
                </tr>
              </thead>
              <tbody>
                {this.state.data.map((element) => {
                  return (
                    <tr key={element.id}>
                      <td>
                        <img className="image" src={element.pictureUrl} />
                      </td>
                      <td>{element.name}</td>
                      <td>{element.popularity}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
