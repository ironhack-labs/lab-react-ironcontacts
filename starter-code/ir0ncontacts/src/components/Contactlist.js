import React, { Component } from "react";
import ContactCard from "./ContactCard.js";
import contacts from "../contacts.json";
import  "./style/button.css"

class Contactlist extends Component {
  constructor() {
    super();
    this.state = {
      orderReves: true,
      Allcontacts: contacts,
      fivecontacts: contacts.splice(0, 5)
    };
  }

  addRandomContact = () => {
    // alert('ciao')
    let randomOne = this.state.Allcontacts[
      Math.floor(Math.random() * this.state.Allcontacts.length)
    ];
    console.log(randomOne);
    let copyContact = [...this.state.fivecontacts];
    copyContact.push(randomOne);
    // console.log(copyContact);

    this.setState({ fivecontacts: copyContact });
  };

  sortNameContact = () => {
    let copyContact = [...this.state.fivecontacts];
    this.state.orderReves ? copyContact.sort((a, b) => a.name.localeCompare(b.name)) : copyContact.sort((a, b) => b.name.localeCompare(a.name))
    this.setState({ fivecontacts: copyContact });

  };

  sortPopularityContact = () => {
    let copyContact = [...this.state.fivecontacts];
    this.state.orderReves ? copyContact.sort((a, b) => a.popularity - b.popularity) : copyContact.sort((a, b) => b.popularity - a.popularity)
    this.setState({ fivecontacts: copyContact });
    this.orderReves();
  };

  deleteMovieHandler = (id) => {

    let copyContact = [...this.state.fivecontacts];
    copyContact.splice(id, 1);
    this.setState({ fivecontacts: copyContact });
  };

  orderReves = () => this.setState({ orderReves: !this.state.orderReves })



  render() {
    return (
      <>
        <div className="container">
          <button
            onClick={this.addRandomContact}
            className="btn btn-sm btn-dark buttonmargin"
          >
            Random Contact
          </button>

          <button
            onClick={this.sortNameContact}
            className="btn btn-sm btn-info buttonmargin"
          >
            Sort Name
          </button>

          <button
            onClick={this.sortPopularityContact}
            className="btn btn-sm btn-success buttonmargin"
          >
            Sort popularity
          </button>

          <table>
            <thead>
              <tr>
                <th scope="col">Picture</th>
                <th scope="col">Name</th>
                <th scope="col">Popularity</th>
              </tr>
            </thead>
            <tbody>
              {this.state.fivecontacts.map((ele, idx) => (
                <ContactCard
                  {...ele}
                  key={idx}
                  deleteMovie={() => this.deleteMovieHandler(idx)}
                />
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}


export default Contactlist;


