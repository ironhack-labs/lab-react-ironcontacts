import React, { Component } from 'react';
import contacts from './contacts.json';
import '../src/App.css';

class App extends Component {
    state ={

        showingContacts: contacts.splice(0,5),
         restOfContacts: contacts
    }
    delete =(cel) =>{
       let index = this.state.showingContacts.indexOf(cel)
       let arr4 = [...this.state.showingContacts]
       arr4.splice(cel, 1);
       this.setState({
      showingContacts: arr4
    })
    }
    showContacts = () => {
        let contactList = this.state.showingContacts.map((contact, i) =>{
            let li = <li key={i}><img height="150" width="130" src={contact.pictureUrl}/> <strong id='nameC'>{contact.name}</strong> <strong id='rage'>{contact.popularity}</strong> <button id='delete' onClick={() => this.delete(i)}>Delete</button></li>
          return   li
        })
        return contactList;
    }
    randomCeleb = () =>{
        let arr = [...this.state.showingContacts]
        let celeb = this.state.restOfContacts[Math.floor(Math.random() * this.state.restOfContacts.length)];
        
        arr.push(celeb);
        this.setState({
      showingContacts: arr
    })

    }
    sortByPop = () =>{
        let arr2 = [...this.state.showingContacts];
        
        this.setState({
      showingContacts: arr2.sort((a, b) => b.popularity - a.popularity)
    })
    }
    sortByName = () =>{
        let arr3 = [...this.state.showingContacts];
        
        this.setState({
      showingContacts: arr3.sort((a, b) =>{
          if (a.name > b.name) return 1;
          if (a.name < b.name) return -1;
          if (a.name === 0) return 0;
      })
    })
    }
    render() {
        return (
            <div>
            <button onClick={this.randomCeleb}>Add Random Contact</button>
            <button onClick={this.sortByPop}>Sort by popularity</button>
            <button onClick={this.sortByName}>Sort by name</button>
            <h1>Iron Contacts</h1>
            <div id='headings'>
            <h2 >Image</h2>
              <h2>Name</h2>   
              <h2>Popularity</h2>
              </div>
            {this.showContacts()}
            </div>
        );
    }
}

export default App;
