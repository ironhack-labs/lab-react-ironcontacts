import React, { Component } from 'react';
import contacts from '../contacts'

const newContacs = [...contacts];

class display extends Component {
    state = {
        contacts: [...newContacs].slice(0,5)
    };
    render() {
        return(this.state.contacts.map(contact => {
            return(<table>
                <tr>
                    <td>
                        <img height="100" width="auto" src={contact.pictureUrl} />
                    </td>
                    <td>{contact.name}</td>
                    <td>{contact.popularity.toFixed(2)}</td>
                </tr>
            </table>)
        }))
    }
}

export default display;
