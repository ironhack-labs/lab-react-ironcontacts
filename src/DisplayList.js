import React, { Component } from "react";
import './DisplayList.css';
import contacts from "./contacts.json";

class DisplayList extends Component {
  constructor() {
    super()

    this.state = {
      contacts: contacts.splice(0, 5),

    };
  }

  newContact = () => {
    const i = Math.floor(Math.random() * contacts.length)
    let copy = [...this.state.contacts]
    copy.push(contacts.splice(i, 1)[0])

    this.setState({
      contacts: [...copy]
    });

  }

  sortByName = () => {

    let copySortByName = [...this.state.contacts]
    copySortByName.sort((a, b) => a.name.localeCompare(b.name))

    this.setState({
      contacts: [...copySortByName]
    });

  }

  sortByPopularity = () => {

    let copySortByPopularity = [...this.state.contacts]
    copySortByPopularity.sort((a, b) =>  b.popularity - a.popularity)

    this.setState({
      contacts: [...copySortByPopularity]
    });


  }

  render() {
    return (
      <div className="personal-info">
        <button onClick={this.newContact}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort by Name</button>
        <button onClick={this.sortByPopularity}>Sort by popularity</button>
        {this.state.contacts.map((elem, idx) =>
          <>
            <table>
              <tr>
                <th>Picture</th>
                <th><strong> Name</strong></th>
                <th><strong> Rating</strong></th>

              </tr>
              <tr>
                <th><img src={elem.pictureUrl} alt="profile" /></th>
                <th>{elem.name}</th>
                <th>{elem.popularity.toFixed(2)}</th>
              </tr>
            </table>

            <button onClick={this.newContact}>  Eliminar</button>


          </>)}

      </div>

    )
  }
}


export default DisplayList