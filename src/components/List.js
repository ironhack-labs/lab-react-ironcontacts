import { Component } from "react";
import ContactTag from "./ContactTag";

import contacts from "../contacts.json";
const first5Contacts = contacts.slice(0, 5);

class ContactList extends Component {
  constructor() {
    super();

    this.state = {
      list: first5Contacts,
    };
  }

  addNewContact() {
    const newContact = {
      name: "Anthony Hopkins",
      pictureUrl:
        "https://image.tmdb.org/t/p/w500/jdoBTIru71FbPuHGEgox5RVmIO0.jpg",
      popularity: 10.273801,
      id: "f197b07c-c0f6-4837-a4d6-f98f8673b0e6",
    };
      const listCopy = [ ...this.state.list ]
      listCopy.push(newContact)

      this.setState({
          list:listCopy
      })
  }
    
    sortByName () {
        const listByName = [ ...this.state.list ]
        listByName.sort((a, b) => a.name.localeCompare(b.name))

        this.setState({
            list:listByName
        })
    }

    sortByPopularity () {
        const listByPopularity = [ ...this.state.list ]
        listByPopularity.sort((a, b) => b.popularity - a.popularity)
        
        this.setState({
            list:listByPopularity
        })
    }

    

  render() {
    return (
      <>
        <button onClick={() => this.addNewContact()}>Add Random Contact</button>
        <button onClick={() => this.sortByName()}>Sort by name</button>
        <button onClick={() => this.sortByPopularity()}>Sort by popularity</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.state.list.map((elm) => (
              <ContactTag {...elm} />
            ))}
          </tbody>
        </table>
        <hr></hr>
      </>
    );
  }
}

export default ContactList;
