import React, { Component } from 'react';
import contacts3 from './contacts.json'
import {Table, Button, Icon} from 'antd'
import './App.css'

const contacts = contacts3.map((contact, index) =>{
  return{...contact, key: index}
})

class App extends Component{
  state = {
      contacts: [contacts[0],contacts[1],contacts[2],contacts[3],contacts[4]]
    }

    addRandom = () =>{
      this.setState((prevState)=>{
        const random = Math.floor(Math.random()* (contacts.length-1))
        let repetido
        
        prevState.contacts.forEach(contact =>{
          if(contact.key === contacts[random].key) repetido = true
        })
        
        if(repetido) return this.addRandom()

       
        return {contacts: [...prevState.contacts, contacts[random]] }
      })
    }

    sortName = () =>{
      this.setState(prevState =>{
        const {contacts} = prevState
        contacts.sort((a,b)=>{
          if (a.name > b.name){
            return 1
          } else if (b.name > a.name){
            return -1
          } else {
            return 0
          }
        })
        return {contacts}
      })
    }

    sortPopularity = () =>{
      this.setState(prevState =>{
        const {contacts} = prevState
        contacts.sort((a,b)=> b.popularity - a.popularity) //mejor de mayor a menor alv
        return {contacts}
      })
    }
    
    delete = (key) =>()=> {
    this.setState((prevState) => {
      return {
        ...prevState,
        contacts: prevState.contacts.filter((e) => e.key !== key)
      };
    });
  };

  render(){
   const columns = [
    {
    title: 'Picture',
    dataIndex: 'pictureUrl',
    key: 'picture',
    render: img => <div style={{ width: '10vw'}}> <img style={{ width: '100%'}} src={img} alt="laimagen"/> </div>
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
    render: key => <Button type="dashed" onClick={this.delete(key)}><Icon type="delete"/></Button>
  },
   ]
   const {contacts} = this.state
    return(
      <div>
      <div id="buttons">
        <Button type="danger" onClick= {this.addRandom}> Al azar</Button>
        <Button type="danger" onClick= {this.sortName}>Por nombre</Button>
        <Button type="danger" onClick= {this.sortPopularity}>Por popularidad</Button>
      </div>
        <Table columns={columns} dataSource={contacts} />
      </div>
    )
  }
}


export default App