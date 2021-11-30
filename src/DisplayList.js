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

  
  remove(id) {

    let copyRemove = [...this.state.contacts]
    copyRemove = copyRemove.filter(elem => elem.id !== id)

    this.setState({
      contacts: copyRemove
    });


  }

  render() {
    return (

    <> 
     <div class="buttons">
      <button onClick={this.newContact}>Add Random Contact</button>
      <button onClick={this.sortByName}>Sort by Name</button>
      <button onClick={this.sortByPopularity}>Sort by popularity</button>
    </div>
    
      <div>
        {this.state.contacts.map((elem, idx) => {
          return <div className="personal-info">
          
                
                  <table>
                  <tr>
                    <th><img src={elem.pictureUrl} alt="profile" /></th>
                    <th>{elem.name}</th>
                    <th>{elem.popularity.toFixed(2)}</th>
                  </tr>
                </table>

                <button onClick={() => this.remove(elem.id)}>  Eliminar</button>

          </div>

        })}
      </div>
    </>

    )
  
  }
}


export default DisplayList