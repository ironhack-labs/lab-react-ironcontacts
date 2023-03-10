import contactsData from "../../contacts.json";
import React, { Component } from "react";
import "./index.css"

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: contactsData.splice(0, 5),
      remaining: contactsData.slice(5)
    };
  }

  AddRandom = () => {
    // const remaining = contactsData.slice(5);
    const randomIndex = Math.floor(Math.random() * (this.state.remaining.length-1));
    const randomContact = this.state.remaining[randomIndex];
    this.setState({
        contact: [randomContact, ...this.state.contact],
        remaining: [...this.state.remaining].filter(contact => contact.id !== randomContact.id)
    })
  }

  SortPopularity = () => {
    const sortedContatcsByPopularity = [...this.state.contact].sort((a, b) =>
    b.popularity > a.popularity ? 1 : -1 
  );
    this.setState ({
      contact: sortedContatcsByPopularity
    })
  }

  SortName = () => {
    const sortedContatcsByName = [...this.state.contact].sort((a, b) =>
    b.name > a.name ? -1 : 1
  );
    this.setState ({
      contact: sortedContatcsByName
    })
  }

  onDelete = (id) => {
    // const {contact} = this.state.contact;
    this.setState({ contact:  [...this.state.contact].filter(contact => contact.id !== id) })

  }
  
  

  RenderProfile = () => {
    // console.log(contactsData.slice(5))
    const {contact} = this.state

    let profilesToRender = [...contact]
  
    return profilesToRender.map(profile => (
        
        <tr key={profile.id} className="info-th">
        <td>
          <img className="img" src={profile.pictureUrl} alt="imagen" />
        </td>
        <td>{profile.name}</td>
        <td>{profile.popularity.toFixed(2)}</td>
        <td>{profile.wonOscar === false ? null : <p>🏆</p>}</td>
        <td>{profile.wonEmmy === false ? null : <p>🏆</p>}</td>
    

        <td><button onClick={() => this.onDelete(profile.id)}>DELETE</button></td>
      
      </tr>
      ))

    }
  


  render() {
    return (
      <div>
      <div className="btn">
      <button onClick={this.AddRandom}>Add Random Contact</button>
      <button onClick={this.SortPopularity}>Sort by popularity</button>
      <button onClick={this.SortName}>Sort by name</button>
      </div>
     
        <table className="table">
          <thead>
            <tr className="info">
            <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th className="Oscar">Won Oscar</th>
              <th className="Emmy">Won Emmy</th>
              <th className="Actions">Actions</th>
            </tr>
          </thead>
          <tbody className="tbody">
         
          {this.RenderProfile()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Contacts;
