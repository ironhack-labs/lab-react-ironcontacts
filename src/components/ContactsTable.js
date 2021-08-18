import React from "react";
import allProducersContacts from "../contacts.json";
import Contact from "./Contact";

class ContactsTable extends React.Component {
    state = {
contacts : allProducersContacts.slice(0,5)
    }

    randomContactHandler = () => {
       let randomContact =
         allProducersContacts[
           Math.floor(Math.random() * allProducersContacts.length)
         ];
        let contactsCopy = [...this.state.contacts] 
        contactsCopy.push(randomContact)
        this.setState ({
             contacts: contactsCopy
        })    
    }
    render(){
        return (
          <div>
            <table>
              <thead>
                <tr>
                  <th className="title">IronContacts</th>
                </tr>
                <button className='randomBtn' onClick={this.randomContactHandler}>Add Random Contact</button>
                <tr className="rowTitle">
                  <th>Picture</th>
                  <th>Name</th>
                  <th>Popularity</th>
                </tr>
              </thead>
              <tbody>
                {this.state.contacts.map((contact) => {
                  return <Contact {...contact} />;
                })}
              </tbody>
            </table>
          </div>
        );
    }
}

export default ContactsTable