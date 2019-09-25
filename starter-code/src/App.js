import React, { Component } from 'react'
import './App.css'
import { Table, Icon, Button, Badge } from 'antd'
import contactsRaw from './contacts.json'

const contacts = contactsRaw.map((contact, i) => {
  return { ...contact, key: i }
})

class App extends Component {
  state = {
    contacts: [contacts[0], contacts[1], contacts[2], contacts[3], contacts[4]]
  }

  addRandom = () => {
    this.setState(prevState => {
      const randomContact = Math.floor(Math.random() * (contacts.length - 1) + 1)
      let isTheSame

      prevState.contacts.forEach(contact => {
        if (contact.key === contacts[randomContact].key) isTheSame = true
      })
      if (isTheSame) return this.addRandom()
      return { contacts: [...prevState.contacts, contacts[randomContact]] }
    })
  }

  sortByName = () => {
    this.setState(prevState => {
      const { contacts } = prevState
      contacts.sort((a, b) => {
        if (a.name > b.name) return 1
        else if (a.name < b.name) return -1
        else return 0
      })
      return { contacts }
    })
  }

  sortByPopularity = () => {
    this.setState(prevState => {
      const { contacts } = prevState
      contacts.sort((a, b) => {
        return a.popularity - b.popularity
      })
      return { contacts }
    })
  }

  deleteOne = key => () => {
    this.setState(prevState => {
      const contacts = prevState.contacts.filter(contact => contact.key !== key)
      return { contacts }
    })
  }

  render() {
    const columns = [
      {
        title: 'Picture',
        dataIndex: 'pictureUrl',
        key: 'picture',
        render: img => (
          <div
            style={{
              width: '150px',
              height: '150px',
              borderRadius: '50%',
              overflow: 'hidden'
            }}
          >
            <img
              style={{
                width: '100%'
              }}
              src={img}
              alt="avatar"
            />
          </div>
        )
      },
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: key => <Badge count={key} style={{ backgroundColor: '#52c41a' }} />
      },
      {
        title: 'Popularity',
        dataIndex: 'popularity',
        key: 'popularity',
        render: key => <Badge count={key} style={{ backgroundColor: '#52c41a' }} />
      },
      {
        title: 'Delete',
        dataIndex: 'key',
        key: 'key',
        render: key => (
          <Button type="danger" onClick={this.deleteOne(key)}>
            <Icon type="delete" />
          </Button>
        )
      }
    ]
    const { contacts } = this.state
    return (
      <div>
        <h1
          style={{
            textAlign: 'center',
            color: 'blue'
          }}
        >
          Ironcontacts
        </h1>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            margin: '30px 0'
          }}
        >
          <Button type="primary" onClick={this.addRandom}>
            Add random
          </Button>
          <Button onClick={this.sortByName}>Sort by name</Button>
          <Button onClick={this.sortByPopularity}>Sort by popularity</Button>
        </div>
        <Table columns={columns} dataSource={contacts} />
      </div>
    )
  }
}

export default App
