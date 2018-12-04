import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json'

class Main extends Component{

  state = {
    contacts: contacts.slice(5, contacts.length),
    initialContactList: contacts.slice(0, 5),
  }

  randomContactGenerator = ()=>{
    let r = Math.floor(Math.random()*this.state.contacts.length);
    let anotherContactList = [...this.state.contacts];
    let randomContact = anotherContactList.splice(r,1);
    let anotherInitialContactList = [...this.state.initialContactList];
    anotherInitialContactList.push(randomContact[0])
    this.setState({
    initialContactList: anotherInitialContactList,
    contacts: anotherContactList
    })
  }
  
  sortTheContacts = ()=>{
    let anotherContactList = [...this.state.initialContactList];
 
    anotherContactList.sort((x, y)=>{
    if(x.name > y.name){
      return 1;
    }else if(x.name < y.name){
      return -1;
    }else{
      return 0;
    }})
    this.setState({
      initialContactList: anotherContactList,
    })
  }

  sortThePopularity = ()=>{
    let aThirdContactList = [...this.state.initialContactList];
    aThirdContactList.sort((x, y)=>{
      if(x.popularity > y.popularity){
        return 1;
      }else if(x.popularity < y.popularity){
        return -1;
      }else{
        return 0;
      }
    })
    this.setState({
      initialContactList: aThirdContactList,
    })
  }

  deleteContact = (index) =>{
    let aFourthContactList = [...this.state.initialContactList];
    aFourthContactList.splice(index,1)
    // console.log(index, aFourthContactList);
    this.setState({
      initialContactList: aFourthContactList,
    })
  }

  render(){

    const listItems = this.state.initialContactList.map((contact, index)=>{

          return (
          <div key={index}>
            <div>{contact.name}</div>
            <div><img src={contact.pictureUrl} /></div>
            <div>{contact.popularity}</div>
            <button onClick={()=>this.deleteContact(index)}>delete</button>
          </div>
          )
})
    return(
      <table>
        <tbody>
        <button onClick={this.randomContactGenerator}>add contacts</button>
        <button onClick={this.sortTheContacts}>sort by name</button>
        <button onClick={this.sortThePopularity}>sort by popularity</button>
  
       <td> {listItems}</td>
      </tbody>
      </table>
    )
  }
}

export default Main;