import React from 'react';
import contacts from '../contacts.json'


class Contact extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      contactList: contacts.slice(0,5)
    }
  }

  displayContactList = () => {

    let rows = this.state.contactList.map((contact, index) => {
      return (
            <tr key={index}>
              <td><img src={contact.pictureUrl} alt="profile"/> </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td> < button onClick = {() => {this.deleteContact(index)}} > Delete </button></td>
            </tr>
     )
    })
   
    return(
      <div>
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
           {rows}
          </tbody>
        </table>
      </div>
    )
    
  }

  randomContact = (e) => {
     e.preventDefault();
    let newContactList = [...this.state.contactList]
    let entireList = [...contacts]
    
    let randomnumber = Math.floor(Math.random() * ((entireList.length -6) - 6 + 1)) + 6
    newContactList.push(contacts[randomnumber])
     this.setState({
       contactList: newContactList
     })
  }

  dynamicSort = (property) => {
    var sortOrder = 1;

    if (property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
    }

    return function (a, b) {
      if (sortOrder === -1) {
        return b[property].localeCompare(a[property]);
      } else {
        return a[property].localeCompare(b[property]);
      }
    }
  }

  sortByName = () => {
    let sortByNameContactList = [...this.state.contactList]
     sortByNameContactList.sort(this.dynamicSort("name"))
    this.setState({
      contactList: sortByNameContactList
    })
  }

   sortByPopularity = () => {
     let sortByPopularityContactList = [...this.state.contactList]
     sortByPopularityContactList.sort((a, b) => {return  b.popularity - a.popularity })
     this.setState({
       contactList: sortByPopularityContactList
     })
   }
  
  deleteContact = (contactToDelete) => {
    let copy = [...this.state.contactList];
    copy.splice(contactToDelete, 1);
    this.setState({contactList: copy})
  }

  render() {
    return (
      <div>
        <div>
          < button onClick={this.randomContact}> Add New Contact </button>
          < button onClick={this.sortByName}> Sort By Name </button>
          < button onClick={this.sortByPopularity}> Sort By Popularity </button>
        </div>
        {this.displayContactList()}
      </div>
    )
  }
}

export default Contact;