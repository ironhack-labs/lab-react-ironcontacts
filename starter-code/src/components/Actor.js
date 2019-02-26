import React, { Component } from 'react';
import contacts from '../contacts.json';




class ContactList extends Component {
    state = {
     contactos: contacts.slice(0, 5),
   }
 
   sortPopul = () => {
    const { contactos } = this.state;
  
    contactos.sort(function (a, b) {
      if (a.popularity < b.popularity) {
        return 1;
      }
      if (a.popularity > b.popularity) {
        return -1;
      }
      return 0;
    })
    this.setState({contactos});
  }


sortName = () => {
  const { contactos } = this.state;

  contactos.sort(function (a, b) {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  })
  this.setState({contactos});
}


    addContact() {
      const { contactos } = this.state;
      const randomIndex = Math.floor(Math.random() * contacts.length);
      const randomNumber = contacts.splice(randomIndex, 1);
   
      contactos.push(randomNumber[0]);
      this.setState({contactos});
    }
      
    
    handleClick = (id) => {
      this.state.contactos.splice(id, 1)
      this.setState({ contactos: this.state.contactos })
    }
    

  render() {
   const { contactos } = this.state;

    const jocontact =
     contactos.map((one, index) => {
       return (
         <li key={index}>
           <h3>{one.name}</h3>
           <img width="100" src={one.pictureUrl} alt=""/>
           <p>{one.popularity}</p>
           <button onClick={()=>this.handleClick()}>
           Delete
           </button>
         </li>
       )
     })

    return (
     <section className="ContactList">
     <button onClick={()=>this.addContact()}>
       Add Random Contact
     </button>

     <button onClick={()=>this.sortName()}>
       Sort by Name
     </button>

     <button onClick={()=>this.sortPopul()}>
       Sort by Popularity
     </button>

        <ul>
         {jocontact}
       </ul>
     </section>
   );
 }
}

export default ContactList;


