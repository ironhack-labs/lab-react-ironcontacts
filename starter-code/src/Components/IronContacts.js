import React, { Component } from 'react';
import contacts from '../contacts.json';
import Contact from './Contact'

class IronContact extends Component {
   
    state = {
      fiveContacts : contacts.slice(0, 5),
    }
    addRandomContact = () => {
      this.setState({
        fiveContacts: this.state.fiveContacts.concat(contacts[Math.floor(Math.random() * contacts.length)])
      });
    }
  render() {
      //const fiveContacts = contacts.slice(0, 5)
        const { fiveContacts } = this.state;
        return (
          <div>
            <table className="contacts-box"> 
            <h1>IronContacts</h1>
            <button onClick={this.addRandomContact} className="btn">Add Random Contact</button>
              <thead >
                <tr>
                  <th className="hb">Picture</th>
                  <th className="hb">Name</th>
                  <th className="hb">Popularity</th>
                </tr>
              </thead>
              <tbody>
                {fiveContacts.map(eachContact =>(
                 <Contact key={eachContact.id} pictureUrl={eachContact.pictureUrl} name={eachContact.name} popularity={eachContact.popularity} />             
                ))}
              </tbody>
           </table>
          </div>
        );
    }
}

export default IronContact;