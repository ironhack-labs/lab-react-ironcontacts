
import './App.css';
import contacts from "./contacts.json";
import React from "react";

class App extends React.Component { 

  constructor(){
    super() 
    this.state = { 
      remainingContacts: contacts.slice(5, contacts.length - 1),
      initialContacts: contacts.slice(0, 5)
    } 
    
  } 


  addRandomContact = () =>{
    const originContacts = [...this.state.remainingContacts];
    let i = Math.floor(Math.random() * originContacts.length);

    const showContacts = [...this.state.initialContacts]; 
    showContacts.push(originContacts[i]);
    originContacts.splice(i , 1); 
    

    this.setState({
      ...this.state,
      initialContacts: showContacts,
      remainingContacts: originContacts.length > 0 ? originContacts : contacts
    })
  }
 
  render() {

    return (
      <div className="list-of-contacts">
        <h2>IronContacts</h2>
        <table>
          <tbody>
            <tr className="spacer">
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
            {this.state.initialContacts.map((contact, idx) => {
              return (
                <tr key = {contact.id  + idx}>
                  <td><img src={`${contact.pictureUrl}`} alt='pic'></img> </td>
                  <td> <p className="name">{`${contact.name}`}</p> </td>
                  <td> <p className="popularity">{`${contact.popularity}`}</p></td> 
                </tr>

              )
            })}

          </tbody>
        </table> 
        <div className="buttons-container">
          <button onClick={() => this.addRandomContact()}>Add contacts</button>
        </div>

      </div>
    )
  }
}

 export default App;
