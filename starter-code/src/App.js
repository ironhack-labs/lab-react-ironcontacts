import React, { Component } from 'react';
import './App.css';
import {Table, Icon} from 'antd'
import {Button} from 'antd'
import contactsData   from './contacts.json'

const contacts = contactsData.map((contact, i)=>{
  return {...contact, key: i}
})

class App extends Component {

  state = {
    contacts: [contacts[0], contacts[1], contacts[2], contacts[3], contacts[4]]
  }

  addRandom = () =>{
    this.setState((prevState) =>{
      const randomContact = Math.floor(Math.random()*(contacts.length-1)+1)
      let isTheSame

      prevState.contacts.forEach(contact => {
        if(contact.key === contacts[randomContact].key)isTheSame = true
      })
      if(isTheSame) return this.addRandom()
      return {contacts:[...prevState.contacts, contacts[randomContact]]}
    })
  }

  sortByName = () =>{
    this.setState((prevState)=>{
      const {contacts} = prevState
      contacts.sort((a,b)=>{
        
        if(a.name>b.name) return 1;
        else if(a.name<b.name) return -1;
        else return 0
      })
      return {contacts}

    })
  }

  sortByPopularity = () =>{
    this.setState((prevState)=>{
      const {contacts} = prevState
      contacts.sort((a,b)=>{
        return b.popularity - a.popularity
      })
      return {contacts}

    })
  }

  deleteOne = (key)=> () => {
    this.setState((prevState)=>{
      const contacts = prevState.contacts.filter((contact)=> contact.key !==key
      )
      return{contacts}
    })
  }

  render() {
    const data = [
      {
        title: 'Picture',
        dataIndex: 'pictureUrl',
        key: 'picture',
        render: img =>(
          <div style=
          {{
            width: '150px',
            height: '150px',
            borderRadius: '50%',
            overflow: 'hidden'
          }}>
         <img style={{
          width: '100%'
        }}src={img} alt="avatar"/>
        </div>)
      },
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Popularity',
        dataIndex: 'popularity',
        key: 'popularity',
      },
      {
        title: 'Delete',
        dataIndex: 'key',
        key: 'key',
        render: key => <Button type="danger" onClick={this.deleteOne(key)}><Icon type="delete"/></Button>
      }    
    ]
      const {contacts} = this.state
    return (
      <div id="main">
        <h1>Contacts</h1>
        <div className="buttons">
          <Button type= 'default' onClick={this.addRandom} >Add Random Contact</Button>
          <Button type= 'default' onClick={this.sortByName}>Sort By Name</Button>
          <Button type= 'default' onClick={this.sortByPopularity}>Sort By Popularity</Button>
        </div>
        <Table columns={data} dataSource={contacts}/>
      </div>
    )
  }
}

export default App;