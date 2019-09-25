import React from 'react'
import contacts from './contacts.json'
import './App.css'
import { Card } from 'antd'
import { Button } from 'antd';

class App extends React.Component {
  state = {
    contacts: [contacts[0], contacts[1], contacts[2], contacts[3], contacts[4], contacts[5]]
  }
  addContacts = () => {
    contacts.slice(0.4)

    function shuffle(array) {
      array.sort(() => Math.random() - 0.5)
    }

    shuffle(contacts)
    this.setState(prevState => {
      return {
        ...prevState,
        contacts: [...prevState.contacts, contacts[prevState.contacts.length]]
      }
    })
  }
  sortContactsAlphabetically = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        contacts: prevState.contacts.sort((a, b) => {
          if (a.name > b.name) return 1
          else if (a.name < b.name) return -1
          else return 0
        })
      }
    })
  }

  sortContactsNumerically = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        contacts: prevState.contacts.sort((a, b) => {
          if (a.popularity > b.popularity) return 1
          else if (a.popularity < b.popularity) return -1
          else return 0
        })
      }
    })
  }
  deleteContacts = popularity => {
    this.setState(prevState => {
      return {
        ...prevState,
        contacts: prevState.contacts.filter(e => e.popularity !== popularity)
      }
    })
  }

  render() {
    const { contacts } = this.state
    return (
      <div className="body">
        <div className="h1">
          <h1>Contacts</h1>
        </div>
        <div className="button">
          <Button type="primary" onClick={this.addContacts}>random</Button>
          <Button type="primary" onClick={this.sortContactsAlphabetically}>sort by name</Button>
          <Button type="primary" onClick={this.sortContactsNumerically}>sort by popularity</Button>
        </div>
        <div style={{ background: '#ECECEC', padding: '30px', display: 'flex', justifyContent: 'center' }}>
          <Card title="Contacts" bordered={false} style={{ width: 600 }}>
            <table>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
              </tr>

              {contacts.map(contact => {
                return (
                  <tr>
                    <td>
                      <img style={{ height: '100px', width: '100px' }} src={contact.pictureUrl} alt="" />
                    </td>
                    <td>{contact.name}</td>
                    <td>{contact.popularity}</td>
                    <td>
                      <button key={contact.popularity} onClick={() => this.deleteContacts(contact.popularity)}>
                        {' '}
                        Delete{' '}
                      </button>
                    </td>
                  </tr>
                )
              })}
            </table>
          </Card>
        </div>
        ,
      </div>
    )
  }
}

export default App
