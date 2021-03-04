
import { Component } from 'react'
import contacts from '../../contacts.json';

class ContactList extends Component {

    state = {
        randomContact: undefined,
        restOfContacts: contacts.slice(5, contacts.length),
        displayedContacts: contacts.slice(0, 5)
    }


    addRandom = () => {
        const { restOfContacts, displayedContacts } = this.state;
        const randomNumber = Math.round(Math.random() * (restOfContacts.length - 1));
        const randomContact = restOfContacts[randomNumber];
        restOfContacts.splice(randomNumber, 1)
        displayedContacts.push(randomContact)
        this.setState({
            randomContact,
            restOfContacts
        })

    }

    handleSort = (sortBy) => {
        function sortByPopularity(a, b) {
            return b.popularity - a.popularity
        }
        if (sortBy === 'name') {
            this.setState({
                displayedContacts: this.state.displayedContacts.sort((a, b) => a.name.localeCompare(b.name))
            })
        } else if (sortBy === 'popularity') {
            this.setState({
                displayedContacts: this.state.displayedContacts.sort(sortByPopularity)
            })
        }
    }



    render() {
        const { className } = this.props;
        const { displayedContacts } = this.state;
        return (
            <div>
                <button onClick={() => this.addRandom()} className="btn btn-primary">Add random Contact</button>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown button
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a className="dropdown-item" onClick={() => this.handleSort('name')}>Sort by Name</a></li>
                        <li><a className="dropdown-item" onClick={() => this.handleSort('popularity')}>Sort by Popularity</a></li>
                    </ul>
                </div>
                <table className={`table ${className}`}>
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Picture</th>
                            <th scope="col">Popularity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayedContacts.map(contact => (
                            <tr key={contact.id}>
                                <td>{contact.name}</td>
                                <td><img style={{ width: "70px" }} src={contact.pictureUrl} /></td>
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