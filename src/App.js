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
            
       return(
           <tr key={i}>
          <td>
            <img
              style={{ width: '50px' }}
              src={contact.pictureUrl}
              alt={contact.name}
            />
          </td>
          <td>{contact.name}</td>
          <td>{contact.popularity}</td>
          <td>
            <button onClick={() => this.delete(i)}>Delete</button>
          </td>
        </tr>
      );
 })
        return contactList;
    }

    randomCeleb = () =>{
        let arr = [...this.state.showingContacts]
        let ind = Math.floor(Math.random() * this.state.showingContacts.length)
        let rArr =  [...this.state.restOfContacts]
        let celeb = rArr[ind];
        arr.push(celeb);
        rArr.splice(ind, 1);
        this.setState({
      showingContacts: arr,
      restOfContacts: rArr
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
            <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.showContacts()}</tbody>
        </table>
            </div>
        );
    }
}

export default App;
