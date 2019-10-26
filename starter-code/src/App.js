import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";
import ContactCard from "./components/ContactCard";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    let first = contacts[5];
    // contacts.slice(0, 5);
    // console.log("contacts", contacts);
    // name: "Idris Elba"
    // pictureUrl: "https://image.tmdb.org/t/p/w500/d9NkfCwczP0TjgrjpF94jF67SK8.jpg"
    // popularity: 11.622713
    return (
      <div className="App">
        <ContactCard
          popularity={first.popularity}
          name={first.name}
          pictureUrl={first.pictureUrl}
        />
        {/* <h1> Contacts</h1>
        <table>
          <thead>
            <tr>
              <td>Name</td>
              <td>Picture</td>
              <td>Popularity</td>
            </tr>
          </thead>
          <tbody>
            {contacts.slice(0, 5).map((e, index) => {
              return (
                <div>
                  <div>
                    <ContactCard
                      key={index}
                      name={e.name}
                      img={e.pictureUrl}
                      pop={e.popularity}
                    />
                  </div>
                  <div>
                    <Button variant="secondary" onClick={this.addRandom}>
                      {" "}
                      Add Random Contact
                    </Button>
                  </div>
                </div>
              );
            })}
          </tbody>
        </table> */}
      </div>
    );
  }
}

export default App;
