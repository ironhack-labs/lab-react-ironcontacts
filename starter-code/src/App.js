import React, { Component } from 'react';
import { Table, Button, Icon, Typography } from 'antd'
import contactsRow from './contacts.json'
import './App.css';

const { Title } = Typography;

const contacts = contactsRow.map((contact, index) => {
  return { ...contact, key: index }
})

class App extends Component {
  state = {
    contacts: [contacts[0], contacts[1], contacts[2], contacts[3], contacts[4]]
  }

  addRandom = () => {
    this.setState(prevState => {
      const randomNumber = Math.floor(Math.random() * (contacts.length - 1))
      let isRepeated

      prevState.contacts.forEach(contact => {
        if (contact.key === contacts[randomNumber].key) isRepeated = true
      })
      if (isRepeated) return this.addRandom()

      return { contacts: [...prevState.contacts, contacts[randomNumber]] }
    })
  }

  sortByName = () => {
    this.setState(prevState => {
      const { contacts } = prevState
      contacts.sort((a, b) => {
        if (a.name > b.name) return 1
        else if (a.name < b.name) return -1
        return 0
      })
      return { contacts }
    })
  }

  sortByPopularity = () => {
    this.setState(prevState => {
      const { contacts } = prevState
      contacts.sort((a, b) => a.popularity - b.popularity)
      return { contacts }
    })
  }

  deleteOne = key => () => {
    this.setState(prevState => {
      const contacts = prevState.contacts.filter((contact) => contact.key !== key)
      return { contacts }
    })
  }

  render() {
    const columns = [
      {
        title: 'Picture',
        dataIndex: 'pictureUrl',
        key: 'pictureUrl',
        render: img => <div style={{ width: '70px', height: '70px', borderRadius: '50%', overflow: 'hidden' }}>
          <img style={{ width: '100%' }} src={img} alt="avatar" />
        </div>
      },
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: 'Popularity',
        dataIndex: 'popularity',
        key: 'popularity'
      },
      {
        title: 'Delete',
        dataIndex: 'key',
        key: 'key',
        render: key => <Button type="danger" onClick={this.deleteOne(key)} > <Icon type="delete" /> </Button>
      }
    ]
    const { contacts } = this.state
    return (
      <div>
        <div className="title">
          <Title>IronContacts</Title>
        </div>
        <div className="buttons">
          <Button type='primary' onClick={this.addRandom} >Add random</Button>
          <Button type='info' onClick={this.sortByName} >Sort by name</Button>
          <Button type='info' onClick={this.sortByPopularity} >Sort by name</Button>
        </div>
        <Table columns={columns} dataSource={contacts} />
      </div>
    )
  }
}

export default App;
