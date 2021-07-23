import { Component } from "react";
import contactsData from '../../data/contacts.json'
import ContactItem from "../contact-item/ContactItem";


class ContactList extends Component {

    state = {
        contacts: []
    }

    componentDidMount() {
        this.setState({
            contacts: contactsData
        })
    }

    handleDeleteContact(id) {
        this.setState((prevState) =>({
            contacts: prevState.contacts.filter(contact => contact.id !== id)
        }));
    }

    render () {
        const { title } = this.props;
        const { contacts } = this.state;
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">{title}</th>
                    </tr>
                    <tr>

                    <th scope="col">Picture</th>
                    <th scope="col">Name</th>
                    <th scope="col">Popularity</th>
                    <th scope="col">Action</th>

                    </tr>

                </thead>

                <tbody>
                    { contacts.map((contact) =>

                        <ContactItem {...contact}
                        key={contact.id} 
                        onClickDelete={(id) => this.handleDeleteContact(id)}
                        />

                    )}
                </tbody>
            </table>
        )
    }
}

export default ContactList;