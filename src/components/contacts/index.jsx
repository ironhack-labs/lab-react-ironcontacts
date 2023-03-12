import contactsArr from '../../contacts.json'
import React, { Component } from "react";


const contacts = contactsArr.slice(5, 10);




class Contact extends Component{
    constructor(props) {
        super(props);
        this.state = {
          contacts: contacts,
        };
    };

    addRandom = () => {
        console.log('hola')
        const randomContact =
          contactsArr[Math.floor(Math.random() * contactsArr.length)];
      
        this.setState({
          contacts: [...this.state.contacts, randomContact],
        });
      };

        render() {
            return (
                <>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Picture</th>
                            <th scope="col">Name</th>
                            <th scope="col">Popularity</th>
                            <th scope="col">Won an Oscar</th>
                            <th scope="col">Won an Emmy</th>
                        </tr>
                     </thead>
                    <tbody>
                        {this.state.contacts.map((contact, key) => {
                        return (
                            <tr key={contact.id}>
                            <td>
                            <img className="picture" src={contact.pictureUrl} />
                            </td>
                            <td>{contact.artistName}</td>
                            <td>{contact.popularity}</td>
                            <td>
                            {contact.wonOscar ? (
                                <i className="bi bi-trophy-fill" />
                            ) : (
                                " "
                            )}
                            </td>
                            <td>
                            {contact.wonEmmy ? (
                                <i className="bi bi-trophy-fill"></i>
                            ) : (
                                " "
                            )}
                            </td>
                        </tr>
                        
                                
                            );
                        })}
                  </tbody>
                </table>
                <button className="btn btn-primary" onClick={this.addRandom}>Add random contact</button>
                </>
             
            );
        }
}



export default Contact;
