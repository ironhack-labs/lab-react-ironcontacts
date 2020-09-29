import React, {Component} from 'react'
import Button from './button'
import Contact from './contact'
import contacts from '../contacts.json'

class ContactList extends Component {
    constructor() {
        super()
        this.state = {
            listedContacts: contacts.slice(0, 5),
            dbContacts: contacts.slice(5, contacts.length)
        }
    }

    randElement = (arr) => {
        return arr[Math.floor(Math.random() * arr.length)]
    }

    buttonAddRandom = () => {
        this.state.dbContacts.length > 0 ? this.setState(oldState => {
            const newContact = this.randElement(this.state.dbContacts)
            return {
                listedContacts: [newContact, ...oldState.listedContacts],
                dbContacts: oldState.dbContacts.filter(
                    hiddenContact => hiddenContact !== newContact
                )
            }
        })
        : alert('No more contacts on the DB')
    }

    buttonSortBy = orderType => {
        this.setState(oldState => {
            return {
                listedContacts: oldState.listedContacts.sort((a, b) =>
                    a[orderType] > b[orderType] ? 1 : -1
                )
            }
        })
    }

    deleteContact = toDelete => {
        this.setState(oldState => {
            return {
                listedContacts: oldState.listedContacts.filter(
                    contact => contact !== toDelete
                )
            }
        })
    }

    render() {
      return (
      <div>
        <Button onClick={this.buttonAddRandom}>
          Add Random Contact
        </Button>
        <Button onClick={() => this.buttonSortBy('name')}>
          Sort by name
        </Button>
        <Button onClick={() => this.buttonSortBy('popularity')}>
          Sort by popularity
        </Button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.listedContacts.map((contact, index) => (
              <Contact
                key={contact.id + index}
                contact={contact}
                deleteContact={this.deleteContact}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ContactList;