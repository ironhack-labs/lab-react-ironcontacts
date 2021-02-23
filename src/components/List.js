import "./List.css";

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
    

//   addNewContact() {
//     const newContact = {
//       name: "Anthony Hopkins",
//       pictureUrl:
//         "https://image.tmdb.org/t/p/w500/jdoBTIru71FbPuHGEgox5RVmIO0.jpg",
//       popularity: 10.273801,
//       id: "f197b07c-c0f6-4837-a4d6-f98f8673b0e6",
//     };
      
//       this.setState({
//           list:this.state.list.push(newContact)
//       })
//   }
    
    // sortByName () {
    //     const listByName = [ ...this.state.list ]
    //     listByName.sort((a, b) => a.name.localeCompare(b.name))

    //     this.setState({
    //         list:listByName
    //     })
    // }

    sortByName () {

        this.setState({
            list:this.state.list.sort((a, b) => a.name.localeCompare(b.name))
        })
    }

    // sortByPopularity () {
    //     const listByPopularity = [ ...this.state.list ]
    //     listByPopularity.sort((a, b) => b.popularity - a.popularity)
        
    //     this.setState({
    //         list:listByPopularity
    //     })
    // }

    sortByPopularity () {

        this.setState({
            list:this.state.list.sort((a, b) => b.popularity - a.popularity)
        })
    } 

    deleteContact (contactId) {
    this.setState({
            list: this.state.list.filter(elm => elm.id !== contactId)
        })
    }    

  render() {
    return (
      <>
        <nav className='nav-buttons'>
            <button onClick={() => this.addNewContact()}>Add Random Contact</button>
            <button onClick={() => this.sortByName()}>Sort by name</button>
            <button onClick={() => this.sortByPopularity()}>Sort by popularity</button>
        </nav>        
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.list.map((elm) => (<ContactTag {...elm} removeContact={() => this.deleteContact(elm.id)} key={elm.id} />))}
          </tbody>
        </table>
      </>
    );
  }
}

export default ContactList;
