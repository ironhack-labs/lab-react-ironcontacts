
import { Component } from 'react'
import contacts from '../../contacts.json';

const firstFive = contacts.slice(0, 5);
class ContactList extends Component {

    state = {
        randomContact: undefined
    }


    addRandom = () => {
        const restOfContacts = contacts.slice(5, contacts.length);
        const randomNumber = Math.round(Math.random() * (restOfContacts.length - 1));
        const randomContact = restOfContacts[randomNumber];
        restOfContacts.splice(randomNumber, 1)
        this.setState({
            randomContact
        })
    }



    render() {
        const { className } = this.props;
        if (typeof this.state.randomContact !== 'undefined') {
            console.log(this.state.randomContact);
            firstFive.push(this.state.randomContact)
            this.state.randomContact = undefined;
        }
        return (
            <div>
                <button onClick={() => this.addRandom()} className="btn btn-primary">Add random Contact</button>
                <table className={`table ${className}`}>
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Picture</th>
                            <th scope="col">Popularity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {firstFive.map(contact => (
                            <tr key={contact.id}>
                                <td>{contact.name}</td>
                                <td><img style={{width:"70px"}} src={contact.pictureUrl} /></td>
                                <td>{contact.popularity}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }

}

export default ContactList;