import contactsData from "../../contacts.json";
import React, { Component } from "react";

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: contactsData.slice(0, 5),
    };
  }

  AddRandom = () => {
    const remaining = contactsData.slice(5);
    const randomIndex = Math.floor(Math.random() * (remaining.length-1));
    const randomContact = remaining[randomIndex];
    //console.log(randomContact)
    // const contactClone = this.state.contact
    // const newArrContact = contactClone.push(randomContact)
    // console.log(newArrContact)
    this.setState({
        contact: [...this.state.contact, randomContact]
    })
  }

  RenderProfile = () => {
    // console.log(contactsData.slice(5))
    const {contact} = this.state

    let profilesToRender = [...contact]
  
    return profilesToRender.map(profile => (
        <tr key={profile.id}>
        <td>
          <img className="img" src={profile.pictureUrl} alt="imagen" />
        </td>
        <td>{profile.name}</td>
        <td>{profile.popularity.toFixed(2)}</td>
        <td>{profile.wonOscar === false ? null : <p>🏆</p>}</td>
        <td>{profile.wonEmmy === false ? null : <p>🏆</p>}</td>
      </tr>
      ))

    }
  


  render() {
    return (
      <div>
      <button onClick={this.AddRandom}>Add Random Contact</button>
        <table>
          <thead>
            <tr className="info">
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th className="Oscar">Won Oscar</th>
              <th className="Emmy">Won Emmy</th>
            </tr>
          </thead>
          <tbody>
          {this.RenderProfile()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Contacts;
