import React, { Component } from "react";
import contacts from "./contacts";

export default class Tabla extends Component {
  constructor() {
    super();
    console.log(contacts);
    this.state = { contacts, shown: contacts.slice(0, 5) };
  }
  addRandomContacthandler = () => {
    let randomCeleb = this.state.contacts[
      ~~(Math.random() * this.state.contacts.length)
    ];
    while (this.state.shown.indexOf(randomCeleb) !== -1) {
      randomCeleb = this.state.contacts[
        ~~(Math.random() * this.state.contacts.length)
      ];
    }
    let tempshown = this.state.shown;
    tempshown.push(randomCeleb);
    this.setState({ shown: tempshown });
  };
  sortCelebshandler = () => {
    let tempshown = this.state.shown;

    tempshown.sort((a, b) => a.name.localeCompare(b.name));
    this.setState({ shown: tempshown });
  };
  sortbyPopularityHandler = () => {
    let tempshown = this.state.shown;
    tempshown.sort((a, b) =>
      a.popularity < b.popularity ? 1 : a.popularity > b.popularity ? -1 : 0
    );
    this.setState({ shown: tempshown });
  };
  render() {
    return (
      <div className="Tabla">
        <section>
          <button onClick={() => this.addRandomContacthandler()}>
            Agregar Celebridad
          </button>
          <button onClick={() => this.sortCelebshandler()}>Ordenar</button>
          <button onClick={() => this.sortbyPopularityHandler()}>
            Ordenar por popularidad
          </button>
        </section>
        <section>
          <table>
            <thead>
              <tr>
                <th>Foto</th>
                <th>Nombre</th>
                <th>Popularidad</th>
              </tr>
            </thead>
            <tbody>
              {this.state.shown.map(celeb => {
                return (
                  <tr key={contacts.indexOf(celeb)}>
                    <td>
                      <img src={celeb.pictureUrl}></img>
                    </td>
                    <td>{celeb.name}</td>
                    <td>{celeb.popularity}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>
      </div>
    );
  }
}
