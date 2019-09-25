import React, { Component } from 'react';
import './App.css';
import { Layout, Typography, Button } from 'antd'
import Contacts from './components/Contacts'
import Columns from './components/Columns'
import contactsData from './contacts.json'
const { Header, Content } = Layout
const { Title } = Typography
const ButtonGroup = Button.Group

class App extends Component {
  state = {
    contacts: contactsData.slice(0, 5)
  }

  addRandomContact = () => {
    console.log("Entrando a add")
    this.setState(prevState => {
      const randomIndex = Math.floor(Math.random() * contactsData.length)
      return {
        ...prevState,
        contacts: [...prevState.contacts, contactsData[randomIndex]]
      }
    })
  }

  deleteContact = name => {
    this.setState(prevState => {
      return {
        ...prevState,
        contacts: prevState.contacts.filter(e => e.name !== name)
      }
    })
  }

  sortBy = criteria => {
    switch (criteria) {
      case 'name':
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
        break
      case 'popularity':
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
        break
      default:
        return
    }
  }

  render() {
    const { contacts } = this.state
    return (
      <Layout>
        <Header >
          <Title type="warning" style={{ lineHeight: '64px' }}>IronContacts</Title>
        </Header>
        <Content >
          <ButtonGroup className="buttongroup">
            <Button className="Button" icon="user-add" onClick={() => this.addRandomContact}>Add Random Contact</Button>
            <Button className="Button" icon="sort-ascending" onClick={() => this.sortBy('name')}>Sort by name</Button>
            <Button className="Button" icon="sort-ascending" onClick={() => this.sortBy('popularity')}>Sort by popularity</Button>
          </ButtonGroup>
          <Columns />
          {contacts.map(e => (
            <Contacts key={contacts.popularity} contact={e} deleteContact={this.deleteContact} />
          )
          )}
        </Content >
      </Layout >
    );
  }
}

export default App;