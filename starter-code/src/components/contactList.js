import React from 'react';

// when you import you can give it any name you want
// however the relative path is important; this is only true for
// json files because they do not have a default exported value
// ex: json file does not have an export line like line 22
import blah from '../contacts.json'

class ContactList extends React.Component {
    constructor(props){
        super(props);
        this.state={
            listofFive: blah.slice(0,5),
            allofContacts: blah.slice(5),
            contactsAscending: true,
        }
    }

    displayContacts = () => {
      return this.state.listofFive.map((eachContact, index) => {
          return(
              <tr key={index}>
                  <td> <img style={{width:'150px'}} src={eachContact.pictureUrl} alt="profilePicture"/> </td>
                  <td>{eachContact.name}</td>
                  <td>{eachContact.popularity}</td>
                  <td>
                    <button onClick={() => {this.deleteContact(index)}}>
                        Delete
                    </button>
                  </td>
              </tr>
          )
      })
    }

    deleteContact = (indexOfContactToDelete) => {
      console.log('deleteContacts()');
      let copy = [...this.state.listofFive];

      copy.splice(indexOfContactToDelete, 1);
      
      this.setState({
        listofFive: copy,
      });
    }

    addRandom = () => {
      let cloneOfListofFive = [...this.state.listofFive];
      let cloneOfallOfContacts  = [...this.state.allofContacts];

      let randomNum = Math.floor(Math.random() * cloneOfallOfContacts.length)


      cloneOfListofFive.unshift(...cloneOfallOfContacts.splice(randomNum,1));

      this.setState({
          listofFive: cloneOfListofFive,
          allofContacts: cloneOfallOfContacts,
      })
    }


    sortContacts = (argToSortBy) => {
      let copyofListofFive = [...this.state.listofFive];

      if(this.state.contactsAscending) {

        copyofListofFive.sort((a,b) => {
          
          if(a[argToSortBy] > b[argToSortBy]){
              return 1
          } else if(a[argToSortBy] < b[argToSortBy]){
              return -1
          } else {
              return 0
          }
        })

      } else {

        copyofListofFive.sort((a,b) => {
          
          if(a[argToSortBy] > b[argToSortBy]){
              return -1
          } else if(a[argToSortBy] < b[argToSortBy]){
              return 1
          } else {
              return 0
          }
        })
      }


      this.setState({ 
        listofFive: copyofListofFive,
        contactsAscending: !this.state.contactsAscending,
      })
    }
    

    render(){
      console.log("Testing:", this.state);
      return(
          <div>

              <button onClick={this.addRandom}>
                Add Random Contact
              </button>

              <button onClick={() =>{this.sortContacts('name')}}>
                 Sort Contacts by Name
              </button>

              <button onClick={() =>{this.sortContacts('popularity')}}>
                 Sort Contacts by Popularity
              </button>

              <table>

                <tbody>
                  <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th>
                    <th>Action</th>
                  </tr>

                  {this.displayContacts()}
                </tbody>

              </table>

          </div>
      )
    }
}



export default ContactList;