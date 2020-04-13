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
    sortByName = () => {
      this.setState({
        fiveContacts: this.state.fiveContacts.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)),
      });
    }
    sortByPopularity = () => {
      this.setState({
        fiveContacts : this.state.fiveContacts.sort((a,b) => (a.popularity > b.popularity)? -1 : ((b.popularity > a.popularity)? 1 : 0))
      })
    }
  render() {
      //const fiveContacts = contacts.slice(0, 5)
        const { fiveContacts } = this.state;
        return (
          <div>
            <table className="contacts-box"> 
              <h1>IronContacts</h1>
              <div>
                <button onClick={this.addRandomContact} className="btn">Add Random Contact</button>
                <button onClick={this.sortByName} className="btn">Sort by Name</button>
                <button onClick={this.sortByPopularity} className="btn">Sort by Popularity</button>
              </div>
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