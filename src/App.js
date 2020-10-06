import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contactData from "./contacts.json";


class App extends Component {
  
  // contactData = contactData.filter((cont1, i) => cont1[i] < cont1[6])
  
  state = {
    contacts: contactData.slice(0,5)
  };


  addRandomContact = () => {
    console.log("yo")
    let randomNumber = Math.floor(Math.random()*(contactData.length))
    const copy = [...this.state.contacts, contactData[randomNumber]]
    // const copy = [...this.state.contacts].push(contactData[4]) // ===> Ne fonctionne pas, pourquoi ?
    this.setState({
      contacts: copy,
    })
  }


  sortContact = () => {
    const copySortContact = [...this.state.contacts]
    
    this.setState({
      contacts: copySortContact.sort(function(a, b) {
        var nameA = a.name.toUpperCase(); // ignore upper and lowercase
        var nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
      
        // names must be equal
        return 0;
      }),
    })
  }


  sortByNumber = () => {
    const copySortNumber = [...this.state.contacts]
    
    this.setState({
      contacts: copySortNumber.sort(function (a, b) {
        return b.popularity - a.popularity;
      }),
    })
  }

  deleteContact = (i) => {
    console.log("poozef,klafnzeapooo")
    
    //--------------- methode 2 ---------------
    const copyDelete = [...this.state.contacts];
    copyDelete.splice(i,1);

    this.setState({
      contacts: copyDelete,
    })


    //--------------- methode 1 ---------------
    // this.setState({
    //   contacts: this.state.contacts.filter((a,index) => {
    //     return index !== i;
    //   })
    // })



  }


  render(){
    return (
      <div>
          <h1>IronContacts</h1>
          <button onClick={()=>this.sortContact()}>Sort contacts by name</button>
          <button onClick={()=>this.sortByNumber()}>Sort contacts by number</button>
          <button onClick={()=>this.addRandomContact()}>Add random contact</button>
          <table>
              <tbody>
                  {this.state.contacts.map((cont, i) => (
                      <tr>
                        key={i}
                        <td><img src={cont.pictureUrl} alt="" width="10%"/></td>
                        <td>{cont.name}</td>
                        <td>{cont.popularity}</td>
                        <td><button onClick={(event)=>this.deleteContact(i)}>delete</button></td>
                      </tr>
                    ))
                  }
              </tbody>
          </table>
      </div>
    );

  }

  
}

export default App;
