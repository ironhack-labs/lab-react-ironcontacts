import React, { Component } from 'react';
import contacts from '../contacts.json';

let contacts5 = [];
for (let i = 0; i < 5; i++) {
    contacts5.push(contacts[i]);
}

class Celebrities extends Component {
  
    state = {
      contacts: contacts5
    }

    render() {
        return(this.state.contacts.map(contact => {
            return(<table>
                 <tr>
                    <td>
                        <img height="100" width="auto" src={contact.pictureUrl} />
                    </td>
                    <td>{contact.name}</td>
                    <td>{contact.popularity}</td>
                </tr>
            </table>)
        }))
    }
}

export default Celebrities;