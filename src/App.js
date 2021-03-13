import React from "react";
import contacts from "./contacts.json";
import  './App.css'

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

  render() {
    return (
      <div>
        <button onClick={() => this.randomContacts()}>ADD Random Contacts</button>
        {this.state.data.map((element) => {
          return (
            <div>
              <h1>Iron contacts</h1>
              <table>
                <tr>
                  <th>Picture</th>
                  <th>Name</th>
                  <th>Popularity</th>
                </tr>
                <tr>
                  <td>
                    <img className="image" src={element.pictureUrl} />
                  </td>
                  <td>{element.name}</td>
                  <td>{element.popularity}</td>
                </tr>
              </table>
            </div>
          );
        })}
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">

//     </div>
//   );
// }

export default App;
