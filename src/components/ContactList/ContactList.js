import React from 'react';
import contacts from "./../../contacts.json"; 
import './ContactList.css';

const fiveContacts = contacts.slice(0,5)
const otherContacts = contacts.slice(5,53)

console.log(contacts)
console.log(otherContacts)

class ContactList extends React.Component{
 state = {
  ironcontacts: fiveContacts
 }

 addContact = () => {
  const copyContact = [ ...this.state.ironcontacts ];  
  const randomContact = otherContacts[Math.floor(Math.random()*otherContacts.length)]  

  console.log(randomContact)

  // id: this.state.length, title: "Nueva película", year: "1988", runtime: "92", genres: ["Comedy", "Fantasy"], director: "Tim Burton", actors: "Alec Baldwin, Geena Davis, Annie McEnroe, Maurice Page", plot: "A couple of recently deceased ghosts contract the services of a \"bio-exorcist\" in order to remove the obnoxious new owners of their house.", posterUrl: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUwODE3MDE0MV5BMl5BanBnXkFtZTgwNTk1MjI4MzE@._V1_SX300.jpg" 
  const {name, pictureUrl,popularity} = randomContact;

  copyContact.push({      
    name, pictureUrl, popularity
    });
 console.log(copyContact)
  this.setState({ ironcontacts: copyContact });
}

displayContacts = () => {
  return this.state.ironcontacts.map((contact) => {
    return (               
            <tr>
              <td><img src={contact.pictureUrl}></img></td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
            </tr>       
      )
    }
    )
  }

render() {
  return(
    <div>
        <button onClick={() => this.addContact()}>Add contact</button>
      <table>
          <tr>
            <th>Picture</th>
            <th >Name</th>
            <th >Popularity</th>
          </tr>
      {
        this.displayContacts()        
      }
      </table>
    </div>
  )    
}

}
export default ContactList;